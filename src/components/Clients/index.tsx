import { Flex, Text, Image, Box } from "@chakra-ui/react";
import { ClientsProps } from "./types";

export const Clients = ({ clients }: ClientsProps) => {
  return (
    <Box w="100%" maxWidth={"7xl"} mx="auto" my="16" mb="24" px={[4]}>
      <Text
        color={"primary.500"}
        fontSize={["xl", "2xl"]}
        align={["center", "center", "center", "start"]}
      >
        Clientes
      </Text>
      <Flex
        mx={[2]}
        flexFlow={["row wrap"]}
        rowGap={0}
        columnGap={7}
        align="center"
        justifyContent={["center", "center", "center", "start"]}
      >
        {clients.map(({ id, name, path, width, height }) => (
          <Image key={id} src={path} alt={name} width={width} height={height} />
        ))}
      </Flex>
    </Box>
  );
};
