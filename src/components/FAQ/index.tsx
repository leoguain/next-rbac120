import { Text, Box } from "@chakra-ui/react";
import React from "react";

import NextLink from "next/link";
import { FAQProps } from "./types";

export const FAQ = ({ faq }: FAQProps) => {
  return (
    <Box w="100%" maxWidth={"7xl"} mx="auto" my="16" px={[4]}>
      <Text
        color={"primary.500"}
        fontSize={["xl", "2xl"]}
        mt={16}
        mb={6}
        align={["center", "center", "center", "start"]}
      >
        FAQ
      </Text>
      <Box>
        {faq.map(({ id, href }) => (
          <React.Fragment key={id}>
            <NextLink href={href}>
              <Text
                color={"primary.500"}
                fontSize={["xl"]}
                _hover={{ color: "secondary.500" }}
                align={["center", "center", "center", "start"]}
              >
                {id}
              </Text>
            </NextLink>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};
