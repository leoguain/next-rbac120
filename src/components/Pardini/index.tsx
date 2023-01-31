import { Flex, Text, Image } from "@chakra-ui/react";

export const Pardini = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      gap={4}
      m={4}
      flexDirection={["column", "row"]}
    >
      <Image
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
  );
};
