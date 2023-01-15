import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Box } from "@chakra-ui/react";

import { Page } from "src/components/Page";
import { PageTitle } from "src/components/PageTitle";
import { PageConstructor } from "src/components/PageConstructor";

const Norma = ({
  pageTitle,
  description,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { asPath } = useRouter();

  return (
    <>
      <Head>
        <title>Quem somos - RBAC120</title>
        <meta name={pageTitle} content={description} />
      </Head>

      <Page title={pageTitle} description={description}>
        <Box
          bg={"#fff"}
          w="100%"
          h="auto"
          maxWidth={"7xl"}
          mx="auto"
          my={4}
          px={[4]}
        >
          <PageTitle pageTitle={pageTitle} pageUrl={asPath} />
        </Box>
      </Page>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "Norma";
  const description = "";

  return {
    props: {
      pageTitle,
      description,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default Norma;
