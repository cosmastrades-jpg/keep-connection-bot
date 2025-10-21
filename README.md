# Keep Connection Bot (Heroku-ready)

This package is a Heroku-ready WhatsApp bot (Keep Connection).
It uses a **local offline AI** helper (keyword-based) for short professional replies.

## Quick deploy (Heroku)

1. Create an app on Heroku.
2. Add Node.js buildpack (heroku/nodejs).
3. Upload or push this repo to Heroku.
4. Set any Config Vars you want (optional).
5. Deploy and scale the worker:
   ```bash
   heroku ps:scale worker=1
   ```
6. View logs to obtain the QR link and scan with your WhatsApp number:
   ```bash
   heroku logs --tail
   ```

## Default config
- Owner: 254714860026
- Prefix: .
- Bot name: Keep Connection
- Local AI: enabled (no API keys required)

## Admin commands (owner only)
- .broadcast <msg>  (mock)
- .ban <number>     (mock)
- .unban <number>   (mock)
- .info             (returns owner info)
- .restart          (instructs owner to restart via Heroku)

## Notes
- This builds a working bot but uses a mock DB and simple local AI for offline replies.
- For production-grade AI responses, connect an external API (OpenAI, Gemini) and update config.js.
