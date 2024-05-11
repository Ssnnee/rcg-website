"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "./ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Input } from "./ui/input"
import { useState } from "react"

const FormSchema = z.object({
  name: z.string().min(5, { message: "Le champs doit contenir au moins 5 caractères" }),
  email: z.string().email({ message: "Veullez entrer une adresse email valide" }),
  subject: z.string().min(5, { message: "Le sujet doit contenir au moins 5 caractères" }),
  message: z
    .string()
    .min(160, {
      message: "Le message doit contenir au moins 160 caractères",
    })
    .max(500, {
      message: "Le message ne doit pas depasser 500 caractères",
    })
})

export default function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      subject: "",
    }
  })

  const [ isDisabled, setIsDisabled ] = useState(false)

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    formData.append("subject", data.subject);

    try {
      const response = await fetch(
        `/api/send`,
        {
          method: "POST",
          body: formData
        }
      );
      if (response.ok) {
        toast({
          title: "Votre message a bien été envoyé.",
        })
        form.reset()
        setIsDisabled(true)
      } else {
        toast({
          title: "Votre message n'a pas pu être envoyé. Veuillez réesayer.",
        })
        form.reset()
      }
    } catch (error) {
        toast({
          title: "Une erreur est survenu lors de l'envoie. Veuillez réesayer plus tard.",
        })
        form.reset()
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-xl">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input {...field} disabled={isDisabled}  type="text" id="name" placeholder="Nom et Prénom" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input disabled={isDisabled} type="email" id="email" placeholder="Email" {...field} />
            </FormControl>
            <FormDescription>
              Cette adresse email sera utilisée pour répondre à votre message
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
        />
      <FormField
        control={form.control}
        name="subject"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input disabled={isDisabled} type="text" id="subject" placeholder="Sujet" {...field} />
            </FormControl>
            <FormDescription>
              Veuillez renseigner la raison pour laquelle vous souhaitez nous contacter
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  disabled={isDisabled}
                  placeholder="Tapez votre message ici"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Entrez votre message
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Envoyer </Button>
      </form>
    </Form>
  )
}

