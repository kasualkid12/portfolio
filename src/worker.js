/* eslint-disable no-restricted-globals */
import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

const dotenv = require('dotenv');
dotenv.config();

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event));
});

async function handleRequest(event) {
  const request = event.request;

  // Handle POST requests (form submissions)
  if (request.method === 'POST') {
    const contentType = request.headers.get('Content-Type') || '';
    if (contentType.includes('application/json')) {
      const data = await request.json();

      // Send the email using a third-party API like SendGrid or Mailgun
      const emailResponse = await sendEmail(data);

      if (emailResponse.ok) {
        return new Response('Message sent successfully!', { status: 200 });
      } else {
        return new Response('Failed to send message', { status: 500 });
      }
    } else {
      return new Response('Unsupported content type', { status: 400 });
    }
  }

  // Serve static assets for GET requests
  try {
    return await getAssetFromKV(event);
  } catch (e) {
    // Return a custom 404 response if asset is not found
    return new Response('404 - Not Found', { status: 404 });
  }
}

async function sendEmail(data) {
  const emailAPIUrl = 'https://api.example.com/send-email'; // Replace with actual API endpoint
  const emailAPIKey = 'process.env.EMAIL_API_KEY'; // Replace with your email API key

  const emailResponse = await fetch(emailAPIUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${emailAPIKey}`,
    },
    body: JSON.stringify({
      to: process.env.EMAIL, // The email address to send the form data to
      subject: `New message from ${data.name}`,
      text: `Email: ${data.email}\n\nMessage: ${data.message}`,
    }),
  });

  return emailResponse;
}
