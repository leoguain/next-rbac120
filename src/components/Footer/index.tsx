import React from "react";
import { Flex, Box } from "@chakra-ui/react";

import { Card } from "../Card";
import { Certificates } from "../Certificates";
import { BottomBar } from "../BottomBar";
import { Pardini } from "../Pardini";

export const Footer = () => {
  return (
    <React.Fragment>
      <Box bg={"#fff"} mx="auto" my={4} px={[4]} w="100%" maxWidth={"7xl"}>
        <Flex
          justifyContent="space-between"
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
    </React.Fragment>
  );
};
