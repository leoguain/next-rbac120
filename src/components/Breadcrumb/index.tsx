import React from "react";
import { useRouter } from "next/router";

import { Flex, Link } from "@chakra-ui/react";

import { BreadcrumbProps } from "./types";

export const Breadcrumb = ({
  url,
  oldSeparator,
  newSeparator,
}: BreadcrumbProps) => {
  const { asPath } = useRouter();
  const urlSeparator = "/";
  const breadcrumbSeparator = " >";
  const pages = url.replaceAll(oldSeparator, newSeparator).split(urlSeparator);

  let urlFlex = "http://localhost:3000/";

  return (
    <Flex mx={[2]} flexFlow={["row wrap"]} columnGap={2} align={"end"}>
      <Link href={urlFlex} key={0} color="gray.500">
        Início
      </Link>

      {pages.map((page, index) => (
        <React.Fragment key={index}>
          {!!(urlFlex = urlFlex.concat(page.toString() + urlSeparator))}
          <Link color="gray.500" key={index + 1} href={urlFlex}>
            {page.charAt(0).toUpperCase() + page.slice(1)}
            {pages.length - 1 === index ? "" : breadcrumbSeparator}
          </Link>
        </React.Fragment>
      ))}
    </Flex>
  );
};
