import { Flex, Text, Image, Box } from "@chakra-ui/react";
import React from "react";

import { CertificatesProps } from "./types";

export const Certificates = ({ certificates }: CertificatesProps) => {
  return (
    <Box mx={6}>
      <Text color={"secondary.500"} fontSize={["xl"]} mb={2}>
        Certificados
      </Text>
      <Flex flexFlow={["row wrap", "row"]} gap={4} align="center">
        {certificates.map(({ id, path, alt, width, height }) => (
          <Image key={id} src={path} alt={alt} width={width} height={height} />
        ))}
      </Flex>
    </Box>
  );
};
