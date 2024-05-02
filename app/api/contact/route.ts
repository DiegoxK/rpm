import { ContactSchema } from "@/config/form-schema";
import { transporter } from "@/lib/nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { text } from "stream/consumers";

export async function POST(req: NextRequest) {
  const formValues = await req.json();

  const { company, email, fullname, message, phone } = formValues;

  const requiredFields = [
    {
      field: company,
      message: "El nombre de la empresa es requerido",
    },
    { field: email, message: "El correo electrónico es requerido" },
    { field: fullname, message: "El nombre es requerido" },
    { field: message, message: "El mensaje es requerido" },
    { field: phone, message: "El teléfono es requerido" },
  ];

  for (const { field, message } of requiredFields) {
    if (!field) {
      return new NextResponse(message, { status: 400 });
    }
  }

  const validatedFields = ContactSchema.safeParse(formValues);

  if (!validatedFields.success) {
    return new NextResponse("Error al validar el mensaje", { status: 400 });
  }

  const mailOptions = {
    from: `contact-form@resultadospublicitariosmedellin.com`,
    to: `contacto@resultadospublicitariosmedellin.com`,
    subject: `Mensaje de ${company}`,
    text: `
Nombre: ${fullname}
Empresa: ${company}
Teléfono: ${phone}
Email: ${email}

${message}
    `,
    html: `
<b>Nombre:</b> ${fullname} <br>
<b>Empresa:</b> ${company} <br>
<b>Teléfono:</b> ${phone} <br>
<b>Email:</b> ${email} <br>
<br>
${message}
    `,
  };

  try {
    const transporterResponse = await transporter.sendMail(mailOptions);
    console.log(transporterResponse);
    return new NextResponse("Mensaje enviado correctamente", { status: 200 });
  } catch (error) {
    console.error("[CONTACT_POST]", error);
    return new NextResponse("Error interno del servidor", { status: 500 });
  }
}
