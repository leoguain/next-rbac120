import { useMemo } from "react";

export const useFAQ = () => {
  const faq = useMemo(
    () => [
      {
        id: "Quando aplicar exames toxicológicos?",
        href: "/faq/quando-aplicar-exames-toxicologicos",
      },
      {
        id: "Qual a definição de ARSO?",
        href: "/faq/qual-a-definicao-de-arso/",
      },
      {
        id: "Quais são as datas limites para implantação?",
        href: "/faq/quais-sao-as-datas-limites-para-implantacao",
      },
      {
        id: "Onde encontro a norma oficial?",
        href: "faq/onde-encontro-a-norma-oficial",
      },
    ],
    []
  );

  return {
    faq,
  };
};
