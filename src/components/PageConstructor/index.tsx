import React from "react";
import { When } from "../../components/shared/When";

import { Box, Text } from "@chakra-ui/react";

import { TextsProps } from "./types";

import { TextList } from "./components/TextList";

export const PageConstructor = ({ text }: TextsProps) => {
  return (
    <Box my={12}>
      {text.map(({ id, type, text, texts }) => (
        <React.Fragment key={id}>
          <When value={type === "subtitle"}>
            <Text color={"primary.500"} fontSize={["xl", "2xl"]} my={4} mt={8}>
              {text}
            </Text>
          </When>

          <When value={type === "paragraph"}>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              {text}
            </Text>
          </When>
          <When value={type === "paragraphN"}>
            <Text
              color={"#000"}
              fontSize={["md"]}
              fontWeight="bold"
              textAlign="justify"
              my={4}
            >
              {text}
            </Text>
          </When>

          <When value={type === "list"}>
            <TextList list={texts} />
          </When>
        </React.Fragment>
      ))}
    </Box>
  );
};
