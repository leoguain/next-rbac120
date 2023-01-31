import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "src/components/Page";
import { Content } from "src/components/Content";
import { PageTitle } from "src/components/PageTitle";
import { PageConstructor } from "src/components/PageConstructor";

const Faq = ({
  pageTitle,
  title,
  description,
  texts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { asPath } = useRouter();

  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle}</title>
        <meta name={pageTitle} content={description} />
      </Head>

      <Page title={pageTitle} description={description}>
        <Content>
          <PageTitle pageTitle={title} pageUrl={asPath} />
          <PageConstructor text={texts} />
        </Content>
      </Page>
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "FAQ - RBAC 120";
  const title = "FAQ";
  const description = "FAQ sobre a RBAC 120.";
  const texts = [
    {
      id: "linkbox_01",
      type: "linkbox",
      texts: [
        {
          id: "link_01",
          type: "link",
          text: "Quando aplicar exames toxicológicos?",
          path: "/faq/quando-aplicar-exames-toxicologicos",
          content: [
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
                  type: "listItem",
                  text: "ETSP prévio: A ser aplicado antes da contratação ou designação para atividades de risco; Para esse caso é recomendável a adoção de exames toxicológicos de cabelo pela sua grande janela de detecção e eficiência nos processos admissionais;",
                },
                {
                  id: "listItem_02",
                  type: "listItem",
                  text: "ETSP aleatórios: A serem aplicados randomicamente, com número definido pela norma;",
                },
                {
                  id: "listItem_03",
                  type: "listItem",
                  text: "ETSP pós acidente: Para verificação do consumo de substâncias psicoativas após situações anormais;",
                },
                {
                  id: "listItem_04",
                  type: "listItem",
                  text: "ETSP de suspeita: A ser aplicado no caso de suspeita do abuso de substâncias psicoativas pelo Supervisor treinado;",
                },
                {
                  id: "listItem_05",
                  type: "listItem",
                  text: "ETSP de retorno ou acompanhamento: Usado para acompanhamento e reinserção de ARSO vindos de evento impeditivo.",
                },
              ],
            },
          ],
        },
        {
          id: "link_02",
          type: "link",
          text: "Qual a definição de ARSO?",
          path: "/faq/qual-a-definicao-de-arso",
          content: [
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
              path: "/contact",
            },
            ,
          ],
        },
        {
          id: "link_03",
          type: "link",
          text: "Quais são as datas limites para implantação?",
          path: "/faq/quais-sao-as-datas-limites-para-implantacao",
          content: [
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
                  type: "listItem",
                  text: "JUNHO / 2012:",
                },
                {
                  id: "listItem_0101",
                  type: "listItem-1",
                  text: "Programa de Prevenção ao Abuso de Substâncias Psicoativas formalizado junto à ANAC;",
                },
                {
                  id: "listItem_0102",
                  type: "listItem-1",
                  text: "Educação e treinamento dos funcionários envolvidos com áreas de risco (ARSO).",
                },
                {
                  id: "listItem_02",
                  type: "listItem",
                  text: "JUNHO / 2013:",
                },
                {
                  id: "listItem_0201",
                  type: "listItem-1",
                  text: "Prazo limite para o início dos exames toxicológicos admissionais;",
                },
                {
                  id: "listItem_0202",
                  type: "listItem-1",
                  text: "Prazo limite para o início dos exames toxicológicos por amostragem;",
                },
                {
                  id: "listItem_0203",
                  type: "listItem-1",
                  text: "Os exames toxicológicos devem atender às normas técnicas exigidas pela ANAC.",
                },
              ],
            },
            ,
          ],
        },
        {
          id: "link_04",
          type: "link",
          text: "Onde encontro a norma oficial?",
          path: "/faq/onde-encontro-a-norma-oficial",
          content: [
            {
              id: "paragraph_05",
              type: "paragraph",
              text: "A norma RBAC 120 na integra está disponível na página da ANAC. ",
            },
            {
              id: "link_0401",
              type: "link",
              text: "Veja a norma RBAC 120.",
              path: "https://www.anac.gov.br/assuntos/legislacao/legislacao-1/boletim-de-pessoal/2011/21s1/rbac-120",
            },
          ],
        },
      ],
    },
  ];

  return {
    props: {
      pageTitle,
      title,
      description,
      texts,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default Faq;
