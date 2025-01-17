# ToneXP | Retro Gaming Platform

ToneXP is a retro gaming platform built with **Next.js** and **Prisma**, designed to bring classic games to the web. The platform is <em>somewhat</em> desktop-friendly and features a variety of emulator systems, including **Arcade**, **Atari**, **Super Nintendo Entertainment System (SNES)**, **Nintendo 64**, **PlayStation**, **Mega Drive**, and more. It’s a work in progress, so feel free to contribute!

The project allows you to run it locally or move your assets to an **AWS S3 bucket** for hosting. Please note that **game ROMs are not included**.

## Getting Started

### Setup your environment variables:

Create a `.env` file in the root directory and add the following:

```env
DATABASE_URL=file:./dev.db
NEXT_WEBSITE_URL=localhost:3000
AUTH_SECRET=YourSecretPhrase
NEXT_AWS_S3_BUCKET_NAME=Your_Bucket_Name_Here
NEXT_AWS_S3_REGION=Your_Bucket_Region_Here
NEXT_AWS_S3_KEY_ID=Your_Key_Id
NEXT_AWS_S3_SECRET_ACCESS_KEY=Your_Access_Key
NEXT_PUBLIC_IMAGE_SOURCE=Your_CDN_Here
```

### Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### Run the Development Server

To start the development server, run:

```bash
npm run dev
```

### Database Migrations

In a development environment, use the `migrate dev` command to generate and apply migrations:

```bash
npx prisma migrate dev
```

### Seed Demo Data

To seed the demo data into the database, apply the following:

```bash
npx prisma db seed
```

### View the Project

Once the server is running, open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## S3 Bucket Policy

If you choose to use AWS S3 for hosting your assets, you can set up the following bucket policy to allow public access to the files:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::your-website-here/*"
        }
    ]
}
```

### Contribution

Feel free to contribute! Open issues, submit pull requests, and provide feedback. The project is actively being developed, and contributions are welcome!

---

## Author

![Logo](./public/img/index_dwn.gif)

**Thounny Keo**  
Frontend Development Student | Year Up United

---

![Miku](./public/img/miku.gif/)  