import { Text, Box } from "@chakra-ui/react";

export const BottomBar = () => {
  return (
    <>
      <Box bg="#e5e5e5" w="100%" mx="auto">
        <Text color="primary.500" fontSize={["sm"]} py={4} align="center">
          © 2023 RBAC 120 – Norma da ANAC | Todos os direitos reservados
        </Text>
      </Box>
    </>
  );
};
