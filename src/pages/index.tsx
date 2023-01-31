import React from "react";
import Head from "next/head";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "src/components/Page";
import { Banner } from "src/components/Banner";
import { Content } from "src/components/Content";
import { PageConstructor } from "src/components/PageConstructor";

import { FAQ } from "src/components/FAQ";
import { Clients } from "src/components/Clients";

import { Box } from "@chakra-ui/react";

function Home({
  pageTitle,
  description,
  texts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle}</title>
        <meta name={pageTitle} content={description} />
      </Head>

      <Page title={pageTitle} description={description}>
        <Box bg={"#fff"} w="100%" h="auto">
          <Banner />
          <Content>
            <PageConstructor text={texts} />
            <FAQ />
            <Clients />
          </Content>
        </Box>
      </Page>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "RBAC 120 - Norma da ANAC";
  const description = "Principal.";
  const texts = [
    {
      id: "subTitle_01",
      type: "subtitle",
      text: "Programa de prevenção do uso indevido de substâncias psicoativas",
    },
    {
      id: "subTitle_02",
      type: "subtitle",
      text: "Subprograma de educação",
    },
    {
      id: "paragraph_01",
      type: "cParagraph",
      texts: [
        {
          id: "text_01",
          type: "paragraph",
          text: "De acordo com o RBAC120, ",
        },
        {
          id: "text_02",
          type: "paragraphN",
          text: "todos os funcionários ARSO  ",
        },
        {
          id: "text_03",
          type: "paragraph",
          text: " ou que venham a ser admitidos para funções ARSO deverão – obrigatoriamente – passar por treinamento e programa educativo. Nosso sistema de aprendizagem à distância, e-Learning, atende as exigências e apresenta soluções completas com excelente relação custo x benefício.",
        },
      ],
    },
    {
      id: "paragraph_02",
      type: "paragraph",
      text: "O Sistema de Ensino a Distância (EAD) é formado por 6 módulos que podem ser acessados online, por qualquer computador. O curso foi criado por especialistas seguindo os requisitos da Norma ANAC.",
    },
    {
      id: "paragraph_03",
      type: "paragraph",
      text: "Assista um clipe representativo de seu conteúdo:",
    },

    {
      id: "columns_01",
      type: "columns",
      texts: [
        {
          id: "column_01",
          type: "column",
          texts: [
            {
              id: "video_01",
              type: "video",
              text: "ARSO",
              path: "https://www.youtube.com/embed/W2KIYr2pk7I",
            },
          ],
        },
        {
          id: "column_02",
          type: "column",
          texts: [
            {
              id: "paragraph_04",
              type: "paragraph",
              text: "Realizamos o programa necessário para implantação das normas exigidas pela RBAC 120.",
            },
            {
              id: "subTitle_03",
              type: "subtitle",
              text: "Subprograma de exames toxicológicos",
            },
            {
              id: "paragraph_05",
              type: "paragraph",
              text: "O RBAC 120 estabelece a obrigatoriedade da adoção de um subprograma de exames Toxicológicos para Substâncias Psicoativas ou ETSP, com regras para garantir a confiabilidade dos exames, sua correta aplicação e sua aleatoriedade.",
            },

            {
              id: "paragraph_06",
              type: "paragraph",
              text: "Essa exigência implica na necessidade de uma rede de coleta especializada e logística, ferramentas para sorteio e administração. Como líderes brasileiros no mercado oferecemos todos esses serviços com capilaridade em todo o Brasil.",
            },

            {
              id: "link_01",
              type: "link",
              text: "Saiba mais sobre nossa consultoria de implantação da norma.",
              path: "/norma/consultoria-norma-rbac-120",
            },
          ],
        },
      ],
    },

    {
      id: "columns_02",
      type: "columns",
      texts: [
        {
          id: "column_01",
          type: "column",
          texts: [
            {
              id: "subTitle2_01",
              type: "subtitle2",
              text: "Quem está obrigado a adotar a RBAC?",
            },
            {
              id: "image_01",
              type: "imageC",
              text: "Quem está obrigado a adotar RBAC?",
              path: "/images/quem_esta_obrigado_adotar_rbac.jpg",
            },
            {
              id: "paragraph_07",
              type: "paragraph",
              text: "A proposta do regulamento não é apenas aumentar a fiscalização e aplicar punições, mas principalmente trabalhar na recuperação e prevenção ao uso de substâncias.",
            },
            {
              id: "button_01",
              type: "button",
              text: "SAIBA MAIS",
              path: "/norma/empresas-obrigadas-a-adocao-da-rbac",
            },
          ],
        },
        {
          id: "column_02",
          type: "column",
          texts: [
            {
              id: "subTitle2_02",
              type: "subtitle2",
              text: "Como implantar a norma?",
            },
            {
              id: "image_01",
              type: "imageC",
              text: "Como podemos ajudar a implementar a norma?",
              path: "/images/como_podemos_ajudar_implementar_norma.jpg",
            },
            {
              id: "paragraph_08",
              type: "paragraph",
              text: "A intenção da ANAC é acrescentar os pedidos de exames toxicológicos que possam identificar o uso de substâncias psicoativas na contratação e transferência de funcionários.",
            },
            {
              id: "button_02",
              type: "button",
              text: "SAIBA MAIS",
              path: "/norma/consultoria-norma-rbac-120",
            },
          ],
        },
        {
          id: "column_03",
          type: "column",
          texts: [
            {
              id: "subTitle2_03",
              type: "subtitle2",
              text: "Saiba mais sobre a Toxicologia Pardini",
            },
            {
              id: "image_01",
              type: "imageC",
              text: "Saiba mais sobre a Toxicologia Pardini.",
              path: "/images/saiba_mais_toxicologia_pardini.jpg",
            },
            {
              id: "paragraph_09",
              type: "paragraph",
              text: "A Toxicologia Pardini tem 10 anos de experiência no mercado da Aviação Civil brasileira, compreendendo as particularidades deste mercado. Fomos atuantes nas audições públicas da ANAC e junto a Sociedade Brasileira de Medicina Aeroespacial e reunimos todas as condições para atendê-los integralmente na implementação da norma, com excelente custo benefício, seja qual for o tamanho de sua empresa.",
            },
            {
              id: "button_03",
              type: "button",
              text: "SAIBA MAIS",
              path: "/quem-somos",
            },
          ],
        },
      ],
    },
  ];

  return {
    props: {
      pageTitle,
      description,
      texts,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default Home;
