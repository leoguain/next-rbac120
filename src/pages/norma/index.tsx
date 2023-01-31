import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "src/components/Page";
import { Content } from "src/components/Content";
import { PageTitle } from "src/components/PageTitle";
import { PageConstructor } from "src/components/PageConstructor";

const Norma = ({
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
  const pageTitle = "Norma - RBAC 120";
  const title = "Norma";
  const description = "Saiba mais sobre a Norma RBAC 120.";
  const texts = [
    {
      id: "linkbox_01",
      type: "linkbox",
      texts: [
        {
          id: "link_01",
          type: "link",
          text: "Norma ANAC RBAC 120 explicada",
          path: "/norma/rbac-120-explicado",
        },
        {
          id: "link_02",
          type: "link",
          text: "Quem está obrigado a adotar a RBAC?",
          path: "/norma/empresas-obrigadas-a-adocao-da-rbac",
        },
        {
          id: "link_03",
          type: "link",
          text: "Como implantar a norma RBAC?",
          path: "/norma/consultoria-norma-rbac-120",
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

export default Norma;
