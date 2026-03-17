export const prerender = false;

export async function POST({ request }) {
  const { name, company, location, website, service, spend, message } = await request.json();

  if (!name || !company) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }

  const emailBody = `
New application from builtontenth.com

Name: ${name}
Company: ${company}
Location: ${location || 'Not provided'}
Website: ${website || 'Not provided'}
Service: ${service || 'Not specified'}
Monthly marketing spend: ${spend || 'Not provided'}

Message:
${message || 'None'}
  `.trim();

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': import.meta.env.BREVO_API_KEY
    },
    body: JSON.stringify({
      sender: { name: 'Built on Tenth', email: 'hello@builtontenth.com' },
      to: [{ email: 'hello@builtontenth.com', name: 'Tanvir' }],
      replyTo: { email: 'hello@builtontenth.com' },
      subject: `New application: ${service || 'Service'} — ${company}`,
      textContent: emailBody
    })
  });

  if (res.ok || res.status === 201) {
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }

  return new Response(JSON.stringify({ error: 'Failed to send' }), { status: 500 });
}
