import { Flex, Link } from "@chakra-ui/react";

type TextProps = {
  url: string;
};

export const UrlToTitle = ({ url }: TextProps) => {
  const title = url.charAt(0).toUpperCase() + url.slice(1);

  return title;
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
