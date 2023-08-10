import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.gmailUsername,
    pass: process.env.gmailAppPass,
  },
});

export const mailOptions = {
  from: process.env.gmailUsername,
  to: process.env.gmailUsername,
};
