import { Flex, Text, Image, Box, Link, AspectRatio } from "@chakra-ui/react";

import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

export const Card = () => {
  return (
    <>
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
    </>
  );
};
