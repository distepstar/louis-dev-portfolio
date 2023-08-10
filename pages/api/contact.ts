import { mailOptions, transporter } from "@/config/nodemailer";
import { IEmailData } from "@/consts";

import { NextApiRequest, NextApiResponse } from "next";

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message }: IEmailData = JSON.parse(req.body);
    if (!name || !email) {
      return res
        .status(400)
        .json({ err: "Please insert your name and email address!" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `Contact from Louis Dev Portfolio Web - ${name}`,
        text: `This email is sent by ${name} from ${email}`,
        html: `<h1>Message from ${name}: </h1><p>${message}</p>`,
      });

      return res.status(200).json({ success: true });
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({ err: err.message });
    }
  }
}

export default sendEmail;
