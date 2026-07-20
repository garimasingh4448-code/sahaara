// This runs on Vercel's server, never in the browser — so your API key stays hidden.
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { system, messages } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY is not set in Vercel project settings.' });
  }

  // Convert {role: 'user'|'assistant', content} into Gemini's format
  const contents = (messages || []).map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }]
  }));

  try {
    const r = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: system }] },
          contents
        })
      }
    );

    const data = await r.json();

    if (!r.ok) {
      console.error('Gemini API error:', data);
      return res.status(500).json({ error: 'AI service error', detail: data });
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text
      || "I'm here, I just lost my train of thought — could you say that again?";

    return res.status(200).json({ text });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to reach AI service' });
  }
}
