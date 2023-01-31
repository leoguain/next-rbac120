import React, { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";

import {
  FormControl,
  Box,
  Button,
  Input,
  Textarea,
  useToast,
  Spinner,
} from "@chakra-ui/react";

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
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const toast = useToast();
  const form: React.RefObject<HTMLFormElement> = useRef(null);

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
          toast({
            title: "Mensagem enviada.",
            description: "Sua mensagem foi enviada com sucesso.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });

          reset();
        },
        (error) => {
          toast({
            title: "Erro ao enviar mensagem.",
            description:
              "Houve um problema ao enviar sua mensagem. Tente novamente.",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
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
          disabled={isSubmitting}
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
        {isSubmitting && (
          <Spinner
            ml={4}
            color="secondary.500"
            thickness="4px"
            visibility="visible"
          />
        )}
      </form>
    </Box>
  );
};
