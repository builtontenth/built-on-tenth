// api/apply.js
// Receives application form submissions
// Adds contact to Brevo + sends notification email to hello@builtontenth.com

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, company, location, website, email, service, spend, question } = req.body;

  if (!email || !email.includes('@') || !name?.trim()) {
    return res.status(400).json({ error: 'Name and valid email are required' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  // 1. Add to Brevo contacts (list 3 = applicants, or whatever list ID you use)
  const applicantListId = parseInt(process.env.BREVO_APPLICANT_LIST_ID || '3');

  try {
    await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        listIds: [applicantListId],
        updateEnabled: true,
        attributes: {
          FIRSTNAME: name.trim(),
          COMPANY: company || '',
          LOCATION: location || '',
          WEBSITE: website || '',
          SERVICE_INTEREST: service || '',
          MARKETING_SPEND: spend || '',
          APPLICATION_DATE: new Date().toISOString().split('T')[0],
          SOURCE: 'apply-form',
        },
      }),
    });
  } catch (err) {
    console.error('Failed to add contact to Brevo:', err);
    // Don't block the response — contact add failure shouldn't break the form
  }

  // 2. Send notification email to you via Brevo transactional email
  const notifyEmail = process.env.NOTIFY_EMAIL || 'hello@builtontenth.com';
  const notifyBody = `
New application received via builtontenth.com

Name: ${name}
Company: ${company || 'Not provided'}
Location: ${location || 'Not provided'}
Website: ${website || 'Not provided'}
Email: ${email}
Service: ${service || 'Not specified'}
Monthly spend: ${spend || 'Not specified'}
Question: ${question || 'None'}
Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}
  `.trim();

  try {
    const emailRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        sender: { name: 'Built on Tenth Site', email: notifyEmail },
        to: [{ email: notifyEmail, name: 'Tanvir Hossain' }],
        replyTo: { email: email, name: name },
        subject: `New application: ${name} — ${company || 'No company'} — ${service || 'No service selected'}`,
        textContent: notifyBody,
      }),
    });

    if (!emailRes.ok) {
      const errData = await emailRes.json();
      console.error('Brevo email send failed:', errData);
    }
  } catch (err) {
    console.error('Failed to send notification email:', err);
  }

  return res.status(200).json({ success: true });
}
