import { Flex, Text, Image, Box } from "@chakra-ui/react";
import { useCertificates } from "../Certificates/hooks/useCertificates";

export const Certificates = () => {
  const { certificates } = useCertificates();

  return (
    <Box mx={6} my={6} alignSelf="center">
      <Text
        color={"secondary.500"}
        fontSize={["xl"]}
        mb={2}
        align={["center", "center", "center", "start"]}
      >
        Certificados
      </Text>
      <Flex flexFlow={["row wrap", "row"]} gap={4} justifyContent="center">
        {certificates.map(({ id, path, alt, width, height }) => (
          <Image key={id} src={path} alt={alt} width={width} height={height} />
        ))}
      </Flex>
    </Box>
  );
};
