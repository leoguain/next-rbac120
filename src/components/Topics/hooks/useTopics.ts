import { useMemo } from "react";

export const useTopics = () => {
  const pathImages = "/images/";
  const topics = useMemo(
    () => [
      {
        id: "Quem está obrigado a adotar a RBAC?",
        imgPath: pathImages + "quem_esta_obrigado_adotar_rbac.jpg",
        imgAlt: "Quem está obrigado a adotar RBAC?",
        text: "A proposta do regulamento não é apenas aumentar a fiscalização e aplicar punições, mas principalmente trabalhar na recuperação e prevenção ao uso de substâncias.",
        href: "/obligation",
      },
      {
        id: "Como implantar a norma?",
        imgPath: pathImages + "como_podemos_ajudar_implementar_norma.jpg",
        imgAlt: "Como podemos ajudar a implementar a norma?",
        text: "A intenção da ANAC é acrescentar os pedidos de exames toxicológicos que possam identificar o uso de substâncias psicoativas na contratação e transferência de funcionários.",
        href: "/implantation",
      },
      {
        id: "Saiba mais sobre a Toxicologia Pardini",
        imgPath: pathImages + "saiba_mais_toxicologia_pardini.jpg",
        imgAlt: "Saiba mais sobre a Toxicologia Pardini.",
        text: "A Toxicologia Pardini tem 10 anos de experiência no mercado da Aviação Civil brasileira, compreendendo as particularidades deste mercado. Fomos atuantes nas audições públicas da ANAC e junto a Sociedade Brasileira de Medicina Aeroespacial e reunimos todas as condições para atendê-los integralmente na implementação da norma, com excelente custo benefício, seja qual for o tamanho de sua empresa.",
        href: "/about",
      },
    ],
    []
  );

  return {
    topics,
  };
};
