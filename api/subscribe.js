// api/subscribe.js
// Vercel serverless function - handles newsletter signups via Brevo API
// The BREVO_API_KEY env var is set in Vercel dashboard (never exposed to browser)

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, source = 'newsletter', listId } = req.body;

  // Basic validation
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error('BREVO_API_KEY not set in environment');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  // Brevo contact list ID - set this to your actual list ID from Brevo dashboard
  // Default: 2 (you can override per-form with the listId param)
  const targetListId = listId || parseInt(process.env.BREVO_LIST_ID || '2');

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        listIds: [targetListId],
        updateEnabled: true, // update if contact already exists
        attributes: {
          SOURCE: source,
          SIGNUP_DATE: new Date().toISOString().split('T')[0],
        },
      }),
    });

    const data = await response.json();

    // Brevo returns 201 for created, 204 for updated
    if (response.status === 201 || response.status === 204) {
      return res.status(200).json({ success: true, message: 'Subscribed successfully' });
    }

    // Handle "contact already in list" gracefully
    if (response.status === 400 && data.code === 'duplicate_parameter') {
      return res.status(200).json({ success: true, message: 'Already subscribed' });
    }

    console.error('Brevo API error:', response.status, data);
    return res.status(400).json({ error: data.message || 'Subscription failed' });

  } catch (err) {
    console.error('Brevo request failed:', err);
    return res.status(500).json({ error: 'Server error, please try again' });
  }
}
