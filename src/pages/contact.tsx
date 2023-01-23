import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "src/components/Page";
import { Content } from "src/components/Content";
import { PageTitle } from "src/components/PageTitle";
import { ContactForm } from "src/components/ContactForm";

import GetUrlTitle from "src/components/Breadcrumb/GetUrlTitle";

const Contact = ({
  pageTitle,
  description,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { asPath } = useRouter();

  //GetUrlTitle(asPath);

  return (
    <>
      <Head>
        <title>Fale conosco - RBAC120</title>
        <meta name={pageTitle} content={description} />
      </Head>

      <Page title={pageTitle} description={description}>
        <Content>
          <PageTitle pageTitle={pageTitle} pageUrl={asPath} />
          <ContactForm />
        </Content>
      </Page>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "Fale conosco";
  const description = "";

  return {
    props: {
      pageTitle,
      description,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default Contact;
