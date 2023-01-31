import React from "react";
import { Flex } from "@chakra-ui/react";

import Link from "next/link";
import Image from "next/image";

import { useHeader } from "./hooks/useHeader";

import { When } from "../shared/When";
import { TopBar } from "./components/Topbar";
import { MobileMenu } from "./components/MobileMenu";
import { DesktopMenu } from "./components/DesktopMenu";

export const Header = () => {
  const { menuItems, isMobile } = useHeader();

  return (
    <React.Fragment>
      <TopBar />
      <Flex
        position="sticky"
        top="0"
        left="0"
        right="0"
        zIndex="5"
        bg={"#fff"}
        w="100%"
        mx="auto"
        px={[4, 6, 6, 6, 14]}
        py={6}
        gap={[0, 2, 8]}
        justifyContent={["space-between", "space-between", "start"]}
        align="center"
        opacity={"0.8"}
        _hover={{ opacity: "1" }}
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
    </React.Fragment>
  );
};
