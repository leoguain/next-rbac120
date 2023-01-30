import { useMemo } from "react";

import { MOBILE_BREAKPOINT } from "../../../lib/constants";

import { useWindowSize } from "../../../hooks/useWindowsSize";

export const useHeader = () => {
  const { width } = useWindowSize();

  const menuItems = useMemo(
    () => [
      {
        id: "Quem somos",
        href: "/quem-somos",
        subItems: [],
      },
      {
        id: "Norma",
        href: "#standard",
        subItems: [
          {
            id: "Norma ANAC RBAC 120 explicada",
            href: "/norma/rbac-120-explicado",
          },
          {
            id: "Quem está obrigado a adotar a RBAC?",
            href: "/norma/empresas-obrigadas-a-adocao-da-rbac",
          },
          {
            id: "Como implantar a norma RBAC?",
            href: "/norma/consultoria-norma-rbac-120",
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
        href: "/fale-conosco",
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
