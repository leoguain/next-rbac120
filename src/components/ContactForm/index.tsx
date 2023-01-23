import React from "react";
import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { FormControl, Box, Button, Input, Textarea } from "@chakra-ui/react";

import { useState } from "react";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const form: React.RefObject<HTMLFormElement> = useRef(null);

  //const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const onSubmit: SubmitHandler<Inputs> = () =>
    emailjs
      .sendForm(
        "service_g91esj1",
        "template_j5o5jic",
        form.current || "",
        "0qmtdfR_V38wbMh0q"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensagem enviada com sucesso");
          reset();
        },
        (error) => {
          alert("Houve um erro ao enviar sua mensagem. Tente novamente.");
          console.log(error.text);
        }
      );

  return (
    <Box
      maxW={"xl"}
      bg="gray.100"
      flexDirection="column"
      border="1px solid #e5e5e5"
      borderRadius="2xl"
      my={12}
      mx="auto"
      p={4}
    >
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Input
            id="name"
            type="text"
            placeholder="Nome*"
            bg="#fff"
            size="md"
            mb={4}
            {...register("name", { required: true })}
          />
          {errors.name && <span>O campo nome é obrigatório</span>}
          <Input
            id="email"
            type="email"
            placeholder="E-mail*"
            bg="#fff"
            size="md"
            mb={4}
            {...register("email", { required: true })}
          />
          {errors.email && <span>O campo e-mail é obrigatório</span>}

          <Input
            id="subject"
            type="text"
            placeholder="Assunto"
            bg="#fff"
            size="md"
            mb={4}
            {...register("subject")}
          />
          <Textarea
            id="message"
            placeholder="Mensagem"
            bg="#fff"
            size="md"
            mb={4}
            {...register("message")}
          />
        </FormControl>
        <Button
          type="submit"
          bg="primary.500"
          _hover={{ bg: "secondary.500" }}
          w="24"
          color="#fff"
          borderRadius="3xl"
          fontSize="sm"
          mb={4}
        >
          ENVIAR
        </Button>
      </form>
    </Box>
  );
};
