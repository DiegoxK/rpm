import "server-only";

import nodemailer from "nodemailer";

const godaddyEmail = process.env.GODADDY_EMAIL;
const godaddyPassword = process.env.GODADDY_PASSWORD;

export const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 466,
  secure: true,
  auth: {
    user: godaddyEmail,
    pass: godaddyPassword,
  },
});
