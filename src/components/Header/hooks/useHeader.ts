import { useMemo } from "react";

import { MOBILE_BREAKPOINT } from "../../../lib/constants";

import { useWindowSize } from "../../../hooks/useWindowsSize";

export const useHeader = () => {
  const { width } = useWindowSize();

  const menuItems = useMemo(
    () => [
      {
        id: "Quem somos",
        href: "/about",
        subItems: [],
      },
      {
        id: "Norma",
        href: "#standard",
        subItems: [
          {
            id: "Norma ANAC RBAC 120 explicada",
            href: "/norma/explanation",
          },
          {
            id: "Quem está obrigado a adotar a RBAC?",
            href: "/norma/obligation",
          },
          {
            id: "Como implantar a norma RBAC?",
            href: "/norma/implantacao",
          },
        ],
      },
      {
        id: "FAQ",
        href: "/faq",
        subItems: [],
      },
      {
        id: "Fale conosco",
        href: "/contact",
        subItems: [],
      },
    ],
    []
  );

  const isMobile = width < MOBILE_BREAKPOINT;

  return {
    menuItems,
    isMobile,
  };
};
