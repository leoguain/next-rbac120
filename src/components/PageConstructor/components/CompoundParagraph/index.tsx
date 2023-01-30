import React from "react";
import { When } from "../../../../components/shared/When";
import { Link, Text } from "@chakra-ui/react";

import { CPProps } from "../../types";

export const CompoundParagraph = ({ paragraphs }: CPProps) => {
  return (
    <>
      {paragraphs.map(({ id, type, text, path }) => (
        <React.Fragment key={id}>
          <When value={type === "paragraph"}>
            <Text as="span" color={"#000"} fontSize={["md"]}>
              {text}
            </Text>
          </When>

          <When value={type === "paragraphN"}>
            <Text as="b" color={"#000"} fontSize={["md"]}>
              {text}
            </Text>
          </When>

          <When value={type === "paragraphI"}>
            <Text as="i" color={"#000"} fontSize={["md"]}>
              {text}
            </Text>
          </When>

          <When value={type === "paragraphU"}>
            <Text as="u" color={"#000"} fontSize={["md"]}>
              {text}
            </Text>
          </When>

          <When value={type === "link"}>
            <Link color="secondary.500" fontWeight="normal" href={path}>
              {text}
            </Link>
          </When>

          <When value={type === "linkEx"}>
            <Link
              color="secondary.500"
              fontWeight="normal"
              href={path}
              isExternal
            >
              {text}
            </Link>
          </When>
        </React.Fragment>
      ))}
    </>
  );
};

/*

let compoundParagraph = "";

  paragraphs.map(({ id, type, text }) => (
    <React.Fragment key={id}>
      {!!(compoundParagraph = compoundParagraph + text)}

      <When value={type === "paragraphN"}>
        <span>{text}</span>
      </When>
    </React.Fragment>
  ));

  console.log(compoundParagraph);

  return (
    <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
      {compoundParagraph}
    </Text>
  );

  */
