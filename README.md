![Timly Banner](https://raw.githubusercontent.com/0x0Zeus/timely-calendar-scheduler/main/public/timly.png)

# Timely – Calendar Scheduling Application

Timely is a modern, full-stack calendar scheduling application built with Next.js, React, and Prisma. It enables users to manage their availability, create event types, and allow others to book meetings seamlessly. Timely integrates with external calendars and provides a clean, accessible user experience.

## Features
- User authentication (NextAuth.js with OAuth support)
- Dashboard for managing events, availability, and meetings
- Customizable event types and booking pages
- Calendar integration (Nylas)
- File uploads (UploadThing)
- Responsive, accessible UI (Radix UI, Tailwind CSS)
- Schema-based form validation (Zod, Conform)

## Tech Stack
- **Frontend:** Next.js (App Router), React, Tailwind CSS, Radix UI
- **Backend:** Next.js API routes, Prisma ORM, Nylas API
- **Authentication:** NextAuth.js (Auth.js), Prisma Adapter
- **Validation:** Zod, Conform
- **File Uploads:** UploadThing
- **Database:** PostgreSQL (via Prisma)

## Getting Started

### Prerequisites
- Node.js (v18 or later recommended)
- npm, yarn, pnpm, or bun
- PostgreSQL database

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd Calander-Schedular
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
yarn install
   # or
pnpm install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env` (create one if not present)
   - Add the following variables:
     ```env
     DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<db>
     NEXTAUTH_SECRET=<your_generated_secret>
     # Add Nylas, UploadThing, and other required secrets here
     ```
4. Run database migrations:
   ```bash
   npx prisma migrate deploy
   # or
   npx prisma migrate dev
   ```
5. Start the development server:
   ```bash
   npm run dev
   # or
yarn dev
   # or
pnpm dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage
- Sign up or log in with your preferred authentication provider
- Connect your calendar account
- Set your availability and create event types
- Share your booking link with others
- Manage your meetings and settings from the dashboard

## Deployment
The recommended way to deploy Timely is on [Vercel](https://vercel.com/). For other deployment options, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Contributing
Contributions are welcome! Please open issues or pull requests for improvements, bug fixes, or new features.

## License
This project is licensed under the MIT License.
