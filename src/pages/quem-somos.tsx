import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "src/components/Page";
import { Content } from "src/components/Content";
import { PageTitle } from "src/components/PageTitle";
import { PageConstructor } from "src/components/PageConstructor";

const About = ({
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
  const pageTitle = "Quem somos - RBAC 120";
  const title = "Quem somos";
  const description = "Conheça a empresa.";
  const texts = [
    {
      id: "paragraph_01",
      type: "paragraph",
      text: "Presentes no Brasil desde 1999 a Toxicologia Pardini é líder de exames toxicológicos de larga janela de detecção.",
    },
    {
      id: "paragraph_02",
      type: "paragraph",
      text: "Nossa tecnologia permite avaliar o consumo de drogas mesmo em vários meses por amostras de pelos ou cabelos, avaliando seu padrão de consumo podendo qualificá-lo de levíssimo a pesadíssimo.",
    },
    {
      id: "paragraph_03",
      type: "paragraph",
      text: "Tecnologia superior em detecção do consumo de drogas, baseadas em Radioimunoensaio, associado a tratamento enzimático.",
    },
    {
      id: "paragraph_04",
      type: "paragraph",
      text: "Podendo ser avaliado o consumo de 14 drogas de uma só vez, entre elas:",
    },
    {
      id: "list_01",
      type: "iconlist",
      texts: [
        {
          id: "listItem_01",
          type: "paragraph",
          text: "Maconha e derivados (skunk, haxixe…);",
        },
        {
          id: "listItem_02",
          type: "paragraph",
          text: "Cocaína e derivados (crack, merla…);",
        },
        {
          id: "listItem_03",
          type: "paragraph",
          text: "Ecstasy (MDMA, MDA, MDE);",
        },
        {
          id: "listItem_04",
          type: "paragraph",
          text: "Anfetaminas e Metanfetaminas (speed, ice..);",
        },
        {
          id: "listItem_05",
          type: "paragraph",
          text: "Heroína, morfina, codeína;",
        },
        {
          id: "listItem_06",
          type: "paragraph",
          text: "Oxicodine;",
        },
        {
          id: "listItem_07",
          type: "paragraph",
          text: "Hidrocodona;",
        },
        {
          id: "listItem_08",
          type: "paragraph",
          text: "Hidromorfina;",
        },
        {
          id: "listItem_09",
          type: "paragraph",
          text: "PCP;",
        },
        {
          id: "listItem_10",
          type: "paragraph",
          text: "etc.",
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

export default About;
