// api/bridge.js
export default function handler(req, res) {
  const target = req.query.target;
  
  if (!target) {
    return res.status(400).send('Missing target parameter');
  }
  
  // Basic safety: only allow http/https
  if (!target.startsWith('http://') && !target.startsWith('https://')) {
    return res.status(400).send('Invalid target URL');
  }

  // Output HTML with a plain text link
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
    <!DOCTYPE html>
    <html>
    <head><title>Redirecting...</title></head>
    <body>
      <p>Click the link below to continue:</p>
      <p><a href="${target}">${target}</a></p>
    </body>
    </html>
  `);
}
