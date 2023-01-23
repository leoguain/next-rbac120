import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";

export const Banner = () => {
  return (
    <Flex bg="secondary.500" gap={[0, 2, 4]} justifyContent="center">
      <Flex
        w="100%"
        h="auto"
        maxWidth={"7xl"}
        mx="auto"
        px={[0, 0, 4]}
        direction={["column-reverse", "column-reverse", "row"]}
        align={["center", "center", "start"]}
        justifyContent="center"
      >
        <Image
          src="/images/destaque_rbac_120.jpg"
          alt="Destaque RBAC 120."
          objectFit="cover"
          w={["100%", "100%", "auto"]}
          h="100%"
        />

        <Text
          color="#fff"
          fontSize={["xl", "xl", "xl", "3xl"]}
          align={["center", "center", "left"]}
          my={2}
          mx={4}
        >
          Assessoria especializada na implementação da RBAC 120
        </Text>
      </Flex>
    </Flex>
  );
};
