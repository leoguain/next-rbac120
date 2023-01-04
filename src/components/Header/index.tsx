import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

import Link from "next/link";
import Image from "next/image";

import { useHeader } from "./hooks/useHeader";

import { When } from "../shared/When";
import { MobileMenu } from "./components/MobileMenu";
import { DesktopMenu } from "./components/DesktopMenu";

import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  const { menuItems, isMobile } = useHeader();

  return (
    <>
      <Flex
        as="main"
        w="100%"
        maxWidth={"7xl"}
        mx="auto"
        px={4}
        direction={["column", "row"]}
        alignItems="center"
        borderBottom="2px solid"
        borderColor="gray.200"
        gap={[0, 2, 4]}
      >
        <Flex alignItems="center" gap={2}>
          <FaPhoneAlt />
          <Link color="primary.500" passHref href="tel:1130035411">
            <Text as="span" color="primary.500" fontSize="sm">
              11 3003-5411
            </Text>
          </Link>
        </Flex>
        <Flex alignItems="center" gap={2}>
          <GrMail />
          <Link passHref href="mailto:email@rbac120.com.br">
            <Text as="span" color="primary.500" fontSize="sm">
              email@rbac120.com.br
            </Text>
          </Link>
        </Flex>
      </Flex>

      <Flex
        w="100%"
        maxWidth={"7xl"}
        mx="auto"
        px={4}
        py={6}
        gap={[0, 2, 8]}
        justifyContent={["space-between", "space-between", "start"]}
        align="center"
      >
        <Link href="/">
          <Image src="/rbac_120.png" alt="logo rbac" width="213" height="60" />
        </Link>

        <Flex alignSelf="right">
          <When value={isMobile}>
            <MobileMenu items={menuItems} />
          </When>
          <When value={!isMobile}>
            <DesktopMenu items={menuItems} />
          </When>
        </Flex>
      </Flex>
    </>
  );
};
