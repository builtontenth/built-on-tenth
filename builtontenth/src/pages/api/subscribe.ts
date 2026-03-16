export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const { email } = await request.json();

  if (!email || !email.includes('@')) {
    return new Response(JSON.stringify({ error: 'Invalid email' }), { status: 400 });
  }

  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': import.meta.env.BREVO_API_KEY
    },
    body: JSON.stringify({
      email,
      listIds: [5],
      updateEnabled: true
    })
  });

  if (res.ok || res.status === 204) {
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }

  const error = await res.json();
  return new Response(JSON.stringify({ error }), { status: 500 });
};
