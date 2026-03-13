// EmailJS keys stay on the server and are never sent to the client.
// Set these in .env.local (see .env.example).

const EMAILJS_API = "https://api.emailjs.com/api/v1.0/email/send";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const userId = process.env.EMAILJS_USER_ID;

  if (!serviceId || !templateId || !userId) {
    console.error("Missing EmailJS env: EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID");
    return res.status(500).json({ error: "Email service not configured" });
  }

  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing name, email, or message" });
  }

  try {
    const response = await fetch(EMAILJS_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: userId,
        template_params: { name, email, message },
      }),
    });

    const text = await response.text();
    if (!response.ok) {
      console.error("EmailJS error:", response.status, text);
      return res.status(502).json({ error: "Failed to send email" });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Send email error:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
