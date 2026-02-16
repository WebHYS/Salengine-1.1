# Salengine Prisma 7 setup

This repository is configured for Prisma ORM v7 with a local Docker Postgres database.

## Prerequisites

- Node.js 20+
- Docker Desktop / Docker Engine with `docker compose`

## Quick start

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy env file:

   **macOS/Linux**
   ```bash
   cp .env.example .env
   ```

   **Windows (PowerShell)**
   ```powershell
   Copy-Item .env.example .env
   ```

3. Start Postgres:

   ```bash
   npm run db:up
   ```

4. Run migrations and generate Prisma Client:

   ```bash
   npm run prisma:migrate
   ```

5. Seed the database:

   ```bash
   npm run prisma:seed
   ```

6. Run the Next.js dev server:

   ```bash
   npm run dev
   ```

## Useful commands

- `npm run db:up` – start dockerized Postgres
- `npm run db:down` – stop Postgres and remove container
- `npm run prisma:migrate` – run `prisma migrate dev`
- `npm run prisma:seed` – run `prisma db seed`
