import { Flex, Text, Image, Box, Link, AspectRatio } from "@chakra-ui/react";

import { GetStaticProps } from "next";

import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

import { useCertificates } from "../Certificates/hooks/useCertificates";
import { Certificates } from "../Certificates";

export const Footer = () => {
  const { certificates } = useCertificates();

  return (
    <>
      <Box bg={"#fff"} w="100%" maxWidth={"7xl"} mx="auto" my={4} px={[4]}>
        <Flex
          justifyContent="space-around"
          flexDirection={["column", "column", "row"]}
          gap={7}
          align="center"
        >
          <Box>
            <AspectRatio maxW="213px" ratio={3.55 / 1}>
              <Image src="/rbac_120.png" alt="Logo RBAC" />
            </AspectRatio>

            <Text color={"#000"} fontSize={["sm"]} my={3}>
              RBAC 120 – Norma da ANAC
            </Text>
            <Flex color="primary.500" alignItems="center" gap={2}>
              <FaPhoneAlt />
              <Link href="tel:1130035411" color="secondary.500" fontSize="sm">
                11 3003-5411
              </Link>
            </Flex>
            <Flex color="primary.500" alignItems="center" gap={2}>
              <GrMail />
              <Link
                href="mailto:email@rbac120.com.br"
                color="secondary.500"
                fontSize="sm"
              >
                email@rbac120.com.br
              </Link>
            </Flex>
          </Box>

          <Certificates certificates={certificates} />
        </Flex>

        <Flex
          alignContent="center"
          alignItems="center"
          justifyContent="center"
          alignSelf="center"
          gap={4}
          m={4}
        >
          <Image
            id="teste"
            sizes=""
            src="/toxicologia_pardini.png"
            alt="Toxicologia Pardini"
            width="136"
            height="65"
          />
          <Text color={"#000"} fontSize={["sm"]} my={3} align="center">
            Site operado pela Toxicologia Pardini, entidade privada sem vínculos
            formais com a ANAC.
          </Text>
        </Flex>
      </Box>
      <Box bg="#e5e5e5" w="100%" mx="auto">
        <Text color="primary.500" fontSize={["sm"]} py={4} align="center">
          © 2022 RBAC 120 – Norma da ANAC | Todos os direitos reservados
        </Text>
      </Box>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const texts = {
    rbacFooterText: "RBAC 120 – Norma da ANAC",
    pardiniFooterText:
      "Site operado pela Toxicologia Pardini, entidade privada sem vínculos formais com a ANAC.",
    copyrightFooterText:
      "© 2022 RBAC 120 – Norma da ANAC | Todos os direitos reservados",
  };

  return {
    props: {
      texts,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default Footer;
