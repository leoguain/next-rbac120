import { useMemo } from "react";

export const useFAQ = () => {
  const faq = useMemo(
    () => [
      {
        id: "Quando aplicar exames toxicológicos?",
        href: "#faqWhen",
      },
      {
        id: "Qual a definição de ARSO?",
        href: "#faqARSO",
      },
      {
        id: "Quais são as datas limites para implantação?",
        href: "#faqDates",
      },
      {
        id: "Onde encontro a norma oficial?",
        href: "#faqStandard",
      },
    ],
    []
  );

  return {
    faq,
  };
};
