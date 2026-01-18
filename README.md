# Electrical Installation Design Hub

Responsive Next.js (App Router) application for electrical installation design professionals.

## Quick start

```bash
npm install
npm run dev
```

## Deployment (Vercel)

1. Create a new Vercel project and connect this repository.
2. Set the following environment variables:
   - `DATABASE_URL` (PostgreSQL connection string)
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL`
3. Deploy. Vercel will run `next build` and host the app.

## Notes

- RSS ingestion endpoints are stubbed; replace with real ingestion services as needed.
- Authentication is scaffolded and requires provider configuration.
- PDF export routes are placeholder endpoints for future integration.
