import React from "react";

import { Link, Flex } from "@chakra-ui/react";

import { LinkBoxProps } from "../../types";

export const LinkBox = ({ links }: LinkBoxProps) => {
  return (
    <Flex alignItems={["start"]} flexDirection={"column"}>
      {links.map(({ id, text, path }) => (
        <React.Fragment key={id}>
          <Link
            color="primary.500"
            fontSize={"lg"}
            fontWeight="normal"
            href={path}
          >
            {text}
          </Link>
        </React.Fragment>
      ))}
    </Flex>
  );
};
