import { Flex, Stack, Image, Text, Box, Button } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { TopicsProps } from "./types";

export const Topics = ({ topics }: TopicsProps) => {
  return (
    <Flex mx="auto" my={16} px={[4]} justifyContent="center">
      <Stack
        spacing={["20px", "20px", "20px", "15px", "20px"]}
        direction={["column", "column", "column", "row", "row"]}
        align="flex-start"
        flexFlow={["column", "column", "column", "row wrap", "row wrap"]}
      >
        {topics.map(({ id, imgPath, imgAlt, text, href }) => (
          <React.Fragment key={id}>
            <Box w={["350px", "350px", "350px", "300px", "350px"]}>
              <Text
                color={"primary.500"}
                fontSize={["xl", "xl", "xl", "md", "xl"]}
                mb={2}
              >
                {id}
              </Text>
              <Image src={imgPath} alt={imgAlt} />
              <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={3}>
                {text}
              </Text>

              <Button
                as={NextLink}
                href={href}
                bg="secondary.500"
                color="#fff"
                borderRadius="3xl"
                fontSize="sm"
              >
                SAIBA MAIS
              </Button>
            </Box>
          </React.Fragment>
        ))}
      </Stack>
    </Flex>
  );
};
