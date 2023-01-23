import { Flex, Box } from "@chakra-ui/react";

import { Card } from "../Card";
import { Certificates } from "../Certificates";
import { BottomBar } from "../BottomBar";
import { Pardini } from "../Pardini";

export const Footer = () => {
  return (
    <>
      <Box mx="auto" my={4} px={[4]}>
        <Flex
          justifyContent="space-around"
          flexDirection={["column", "column", "row"]}
          gap={7}
          align="center"
        >
          <Card />
          <Certificates />
        </Flex>
        <Pardini />
      </Box>
      <BottomBar />
    </>
  );
};
