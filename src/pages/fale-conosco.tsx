import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "src/components/Page";
import { Content } from "src/components/Content";
import { PageTitle } from "src/components/PageTitle";
import { ContactForm } from "src/components/ContactForm";

const Contact = ({
  pageTitle,
  title,
  description,
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
          <ContactForm />
        </Content>
      </Page>
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "Fale conosco - RBAC 120";
  const title = "Fale conosco";
  const description = "Fale conosco.";

  return {
    props: {
      pageTitle,
      title,
      description,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default Contact;
