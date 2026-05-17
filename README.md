This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the required values:

```bash
cp .env.example .env.local
```

Required environment variables:
- `DATABASE_URL` - PostgreSQL connection string
- `AUTH_SECRET` - Secret for NextAuth
- `NEXTAUTH_URL` - Your application URL
- `NEXTAUTH_SECRET` - Secret for NextAuth sessions
- `UPLOADTHING_TOKEN` - API token from your UploadThing dashboard (https://uploadthing.com/dashboard)

## Database Setup

This project uses Prisma with PostgreSQL. To set up the database:

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# (Optional) Seed the database
npx prisma db seed
```

## Deploy on Vercel

### Prerequisites
- Vercel account
- PostgreSQL database (Vercel Postgres recommended)
- AWS S3 bucket for file storage

### Deployment Steps

1. **Set up PostgreSQL Database**
   - Go to Vercel dashboard → Storage → Create Database
   - Select Postgres and follow the setup
   - Copy the connection strings

2. **Configure Environment Variables**
   In Vercel project settings, add:
   ```
   DATABASE_URL=your_postgres_connection_string
   AUTH_SECRET=generate_with_openssl_rand_base64_32
   NEXTAUTH_URL=your_vercel_domain
   NEXTAUTH_SECRET=generate_with_openssl_rand_base64_32
   AWS_ACCESS_KEY_ID=your_aws_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret
   AWS_REGION=your_s3_region
   AWS_S3_BUCKET_NAME=your_bucket_name
   ```

3. **Deploy**
   ```bash
   # Install Vercel CLI
   npm install -g vercel

   # Login
   vercel login

   # Deploy
   vercel
   ```

   Or connect your GitHub repository to Vercel and deploy from the dashboard.

4. **Post-Deployment**
   The build process automatically runs Prisma migrations via the postbuild script.

### Important Notes
- This project uses Next.js 16.2.6 which has breaking changes from traditional Next.js
- NextAuth 5.0.0-beta.30 is used (beta version)
- The project uses pnpm as package manager
- Database migrations run automatically after each build

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
