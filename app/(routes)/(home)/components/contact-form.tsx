"use client";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { assets } from "@/config/site";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { BaseSyntheticEvent } from "react";

const formSchema = z.object({
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

export default function ContactForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(
    values: z.infer<typeof formSchema>,
    event: BaseSyntheticEvent | undefined,
  ) {
    if (!event) return;

    toast({
      title: "Enviando mensaje",
      description: "Por favor espera un momento",
    });

    emailjs
      .sendForm(
        "service_t2vhkxp",
        "template_xxk4rmc",
        event.target,
        "57M3zsulQvtIl_HMj",
      )
      .then(() => {
        toast({
          title: "Mensaje enviado",
          description: (
            <div>
              {Object.entries(values).map(([key, value]) => (
                <div key={key}>
                  <strong>{key}</strong>: {value}
                </div>
              ))}
            </div>
          ),
        });
      })
      .catch(() => {
        toast({
          title: "Error al enviar el mensaje",
          description: "Por favor intenta de nuevo",
          variant: "destructive",
        });
      });
  }

  return (
    <>
      <Image
        className="mt-52 w-screen"
        alt="Contact wave"
        src={assets.contact.ContactBg}
      />

      <div className="bg-primary text-white">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="container space-y-3"
          >
            <div className="grid lg:grid-cols-3">
              <div className="relative">
                <Image
                  className="absolute bottom-0 right-[16%] hidden lg:block"
                  alt="Contact Image"
                  src={assets.contact.ContactImage}
                />
              </div>
              <div className="col-span-2 mt-10 space-y-4 sm:mt-0">
                <h3 className="text-4xl font-bold">Contactanos</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="fullname"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Tu nombre completo*" {...field} />
                        </FormControl>
                        <FormMessage className="text-white" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Correo*" {...field} />
                        </FormControl>
                        <FormMessage className="text-white" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Nombre de la empresa*"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-white" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Telefono*" {...field} />
                        </FormControl>
                        <FormMessage className="text-white" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Tu mensaje*" {...field} />
                  </FormControl>
                  <FormMessage className="text-white" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full rounded-lg font-bold"
              variant="secondary"
            >
              Enviar Mensaje
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
