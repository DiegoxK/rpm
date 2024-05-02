"use server";

import { ContactSchema, ContactType } from "@/config/form-schema";
import { transporter } from "./nodemailer";

export async function sendEmail(formValues: ContactType) {
  const validatedFields = ContactSchema.safeParse(formValues);

  if (!validatedFields.success) {
    throw new Error("Error al validar el mensaje");
  }

  const { company, email, fullname, message, phone } = validatedFields.data;

  const mailOptions = {
    from: `contact-form@resultadospublicitariosmedellin.com`,
    to: `contacto@resultadospublicitariosmedellin.com`,
    subject: `Mensaje de ${company}`,
    text: `
    Nombre: ${fullname}
Empresa: ${company}
Teléfono: ${phone}
Email: ${email}
Mensaje: ${message}
    `,
  };

  console.log("sending...");

  try {
    const transporterResponse = await transporter.sendMail(mailOptions);
    console.log(transporterResponse);
    return {
      message: "Mensaje enviado correctamente",
    };
  } catch (error) {
    console.log("Failed to send email");
    console.error(error);
    throw new Error("Error al enviar el mensaje");
  }
}
