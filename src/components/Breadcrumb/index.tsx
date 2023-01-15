import { Flex, Link } from "@chakra-ui/react";

import { BreadcrumbItem } from "./BreadCrumbItem";
import { BreadcrumbProps } from "./types";

export const Breadcrumb = ({ breadcrumbItems }: BreadcrumbProps) => {
  const separator = "/";
  const urlTeste = "http://localhost:3000/faq/qual-a-definicao-de-arso";
  const homeUrl = "http://localhost:3000/";
  const pages = urlTeste.replace(homeUrl, "").split(separator);

  let urlX = homeUrl;

  return (
    <Flex
      mx={[2]}
      flexFlow={["row wrap"]}
      columnGap={2}
      align="center"
      justifyContent={["center", "center", "center", "end"]}
    >
      <>
        <Link href={urlX} color="gray.400">
          Home /
        </Link>
        {pages.map((page, index) => (
          <>
            {!!(urlX = urlX.concat(page.toString() + "/"))}
            <Link color="gray.400" key={index} href={urlX}>
              {page}
              {pages.length - 1 === index ? "" : "/"}
            </Link>
          </>
        ))}
      </>
    </Flex>
  );
};

/*
return (
    <Flex
      mx={[2]}
      flexFlow={["row wrap"]}
      rowGap={0}
      columnGap={7}
      align="center"
      justifyContent={["center", "center", "center", "start"]}
    >
      {breadcrumbItems.map(({ name, url }, index) => (
        <BreadcrumbItem
          url={url}
          name={name}
          index={index + 1}
          isLast={breadcrumbItems.length - 1 === index}
          key={index}
        />
      ))}
    </Flex>
  );

  */
