import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

import Link from "next/link";
import Image from "next/image";

import { useHeader } from "./hooks/useHeader";

import { When } from "../shared/When";
import { TopBar } from "./components/Topbar";
import { MobileMenu } from "./components/MobileMenu";
import { DesktopMenu } from "./components/DesktopMenu";

import { Flex } from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  const { menuItems, isMobile } = useHeader();

  return (
    <>
      <TopBar />
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
