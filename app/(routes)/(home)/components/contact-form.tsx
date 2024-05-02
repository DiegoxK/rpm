"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { assets } from "@/config/site";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";

import axios from "axios";

import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { ContactSchema, ContactType } from "@/config/form-schema";

export default function ContactForm() {
  const { toast } = useToast();

  const form = useForm<ContactType>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      fullname: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactType) => {
    const toastAlert = toast({
      title: "Enviando mensaje",
      description: "Por favor espera un momento",
      duration: 10000000,
    });

    axios
      .post(`/api/contact`, values)
      .then((response) => {
        toastAlert.update(
          toast({
            title: response.data,
            description: "Gracias por contactarnos, te responderemos pronto.",
            duration: 4000,
          }),
        );
      })
      .catch((error) => {
        toastAlert.update(
          toast({
            title: error.response.data,
            description: "Por favor inténtalo más tarde.",
            duration: 4000,
          }),
        );
        console.error(error);
      });

    form.reset();
  };

  return (
    <>
      <Image
        id="contact"
        className="mt-52 w-screen"
        alt="Contact wave"
        src={assets.contact.ContactBg}
      />

      <div className="bg-primary text-white">
        <Form {...form}>
          <form
            className="container space-y-3"
            onSubmit={form.handleSubmit(onSubmit)}
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
