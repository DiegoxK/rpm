import { z } from "zod";

export type ContactType = z.infer<typeof ContactSchema>;

export const ContactSchema = z.object({
  fullname: z
    .string()
    .min(1, {
      message: "El nombre debe tener al menos 1 caracteres",
    })
    .max(50, {
      message: "El nombre debe tener menos de 50 caracteres",
    }),
  email: z.string().email({
    message: "Ingresa un correo electrónico válido",
  }),
  company: z
    .string()
    .min(1, {
      message: "El nombre de la empresa debe tener al menos 1 caracteres",
    })
    .max(50, {
      message: "El nombre de la empresa debe tener menos de 50 caracteres",
    }),
  phone: z
    .string()
    .regex(/^\d+$/, {
      message: "El teléfono solo puede contener números",
    })
    .min(1, {
      message: "El teléfono debe tener al menos 1 caracteres",
    })
    .max(50, {
      message: "El teléfono debe tener menos de 50 caracteres",
    }),

  message: z
    .string()
    .min(1, {
      message: "El mensaje debe tener al menos 1 caracteres",
    })
    .max(500, {
      message: "El mensaje debe tener menos de 500 caracteres",
    }),
});
