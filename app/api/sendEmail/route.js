import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
const env = process.env;

export async function POST(req, res) {
  const { subject, message, email } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: env.MAILER_USER,
      pass: env.MAILER_PASS,
    },
  });

  // Manejo de errores en el transporte
  transporter.on("error", (error) => {
    console.error("Error en el transporte del correo electrónico:", error);
  });

  try {
    const data = {
      from: `"Frank Vidal" <${env.MAILER_USER}>`,
      to: [env.MAILER_USER, email],
      subject,
      text: message || "", // Asegúrate de tener un valor predeterminado
      html: `
    <h3>Hello Frank, I'm ${email}</h3>
    <li>Subject: ${subject}</li>
    <li>${message}</li>
    `, // Asegúrate de tener un valor predeterminado
    };

    await transporter.sendMail(data);

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
