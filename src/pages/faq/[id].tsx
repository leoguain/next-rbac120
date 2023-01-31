import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";

import { Page } from "src/components/Page";
import { Content } from "src/components/Content";
import { PageTitle } from "src/components/PageTitle";
import { PageConstructor } from "src/components/PageConstructor";

const Question = ({
  title,
  description,
  texts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { asPath } = useRouter();

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name={title} content={description} />
      </Head>

      <Page title={title} description={description}>
        <Content mb={16}>
          <PageTitle pageTitle={title} pageUrl={asPath} />
          <PageConstructor text={texts} />
        </Content>
      </Page>
    </React.Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    { params: { id: "quando-aplicar-exames-toxicologicos" } },
    { params: { id: "qual-a-definicao-de-arso" } },
    { params: { id: "quais-sao-as-datas-limites-para-implantacao" } },
    { params: { id: "onde-encontro-a-norma-oficial" } },
  ];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pages = [
    {
      id: "quando-aplicar-exames-toxicologicos",
      title: "Quando aplicar exames toxicológicos?",
      description: "Quando aplicar os exames toxicológicos.",
      texts: [
        {
          id: "paragraph_01",
          type: "paragraph",
          text: "Esse programa determina a aplicação de exames toxicológicos em momentos distintos:",
        },

        {
          id: "list_01",
          type: "iconlist",
          texts: [
            {
              id: "listItem_01",
              type: "cParagraph",
              texts: [
                {
                  id: "text_01",
                  type: "paragraphN",
                  text: "ETSP prévio: ",
                },
                {
                  id: "text_02",
                  type: "paragraph",
                  text: "A ser aplicado antes da contratação ou designação para atividades de risco; Para esse caso é recomendável a adoção de exames toxicológicos de cabelo pela sua grande janela de detecção e eficiência nos processos admissionais;",
                },
              ],
            },
            {
              id: "listItem_02",
              type: "cParagraph",
              texts: [
                {
                  id: "text_01",
                  type: "paragraphN",
                  text: "ETSP aleatórios: ",
                },
                {
                  id: "text_02",
                  type: "paragraph",
                  text: "A serem aplicados randomicamente, com número definido pela norma;",
                },
              ],
            },
            {
              id: "listItem_03",
              type: "cParagraph",
              texts: [
                {
                  id: "text_01",
                  type: "paragraphN",
                  text: "ETSP pós acidente: ",
                },
                {
                  id: "text_02",
                  type: "paragraph",
                  text: "Para verificação do consumo de substâncias psicoativas após situações anormais;",
                },
              ],
            },
            {
              id: "listItem_04",
              type: "cParagraph",
              texts: [
                {
                  id: "text_01",
                  type: "paragraphN",
                  text: "ETSP de suspeita: ",
                },
                {
                  id: "text_02",
                  type: "paragraph",
                  text: "A ser aplicado no caso de suspeita do abuso de substâncias psicoativas pelo Supervisor treinado;",
                },
              ],
            },
            {
              id: "listItem_05",
              type: "cParagraph",
              texts: [
                {
                  id: "text_01",
                  type: "paragraphN",
                  text: "ETSP de retorno ou acompanhamento: ",
                },
                {
                  id: "text_02",
                  type: "paragraph",
                  text: "Usado para acompanhamento e reinserção de ARSO vindos de evento impeditivo.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "qual-a-definicao-de-arso",
      title: "Qual a definição de ARSO?",
      description: "Qual a definição de ARSO?",
      texts: [
        {
          id: "paragraph_02",
          type: "paragraph",
          text: "O Programa de Prevenção do Uso Indevido de Substâncias Psicoativas na Aviação Civil se aplica a qualquer pessoa que desempenhe atividade de risco a segurança operacional na aviação civil ou ARSO.",
        },
        {
          id: "paragraph_03",
          type: "paragraph",
          text: "Diante do RBAC 120 são considerados profissionais ARSO, qualquer um que realiza atividades na área restrita de segurança do aeródromo e também os responsáveis pelo cálculo das posições de carga, bagagem, passageiros e combustível, que atuam na manutenção preventiva e de modificações, carga e descarga do veículo de bagagem, agentes de segurança e operadores de raio- X, membros da tripulação, etc.",
        },
        {
          id: "link_0201",
          type: "link",
          text: "Consulte-nos em caso de dúvidas.",
          path: "/fale-conosco",
        },
      ],
    },
    {
      id: "quais-sao-as-datas-limites-para-implantacao",
      title: "Quais são as datas limites para implantação?",
      description: "Quais são as datas limites para a implantação?",
      texts: [
        {
          id: "paragraph_04",
          type: "paragraph",
          text: "O RBAC 120 estabelece a obrigatoriedade da implementação até:",
        },
        {
          id: "list_02",
          type: "iconlist",
          texts: [
            {
              id: "listItem_01",
              type: "paragraphN",
              text: "JUNHO / 2012:",
            },
            {
              id: "listItem_0101",
              type: "paragraph-1",
              text: "Programa de Prevenção ao Abuso de Substâncias Psicoativas formalizado junto à ANAC;",
            },
            {
              id: "listItem_0102",
              type: "paragraph-1",
              text: "Educação e treinamento dos funcionários envolvidos com áreas de risco (ARSO).",
            },
            {
              id: "listItem_02",
              type: "paragraphN",
              text: "JUNHO / 2013:",
            },
            {
              id: "listItem_0201",
              type: "paragraph-1",
              text: "Prazo limite para o início dos exames toxicológicos admissionais;",
            },
            {
              id: "listItem_0202",
              type: "paragraph-1",
              text: "Prazo limite para o início dos exames toxicológicos por amostragem;",
            },
            {
              id: "listItem_0203",
              type: "paragraph-1",
              text: "Os exames toxicológicos devem atender às normas técnicas exigidas pela ANAC.",
            },
          ],
        },
      ],
    },
    {
      id: "onde-encontro-a-norma-oficial",
      title: "Onde encontro a norma oficial?",
      description: "Onde encontrar a norma oficial.",
      texts: [
        {
          id: "cParagraph_01",
          type: "cParagraph",
          texts: [
            {
              id: "text_01",
              type: "paragraph",
              text: "A norma RBAC 120 na integra está disponível na página da ANAC. Veja a ",
            },
            {
              id: "text_02",
              type: "linkEx",
              text: " norma RBAC 120",
              path: "https://www.anac.gov.br/assuntos/legislacao/legislacao-1/boletim-de-pessoal/2011/21s1/rbac-120",
            },
            {
              id: "text_03",
              type: "paragraph",
              text: ".",
            },
          ],
        },
      ],
    },
  ];

  const page = pages.filter((page) => {
    return page.id === params?.id;
  });

  const title = page[0].title;
  const description = page[0].description;
  const texts = page[0].texts;

  return {
    props: {
      title,
      description,
      texts,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default Question;
