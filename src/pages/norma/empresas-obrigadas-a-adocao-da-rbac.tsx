import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

import { Page } from "src/components/Page";
import { Content } from "src/components/Content";
import { PageTitle } from "src/components/PageTitle";
import { PageConstructor } from "src/components/PageConstructor";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

const Obligation = ({
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
  const pageTitle = "Quem está obrigado a adotar a RBAC? - RBAC 120";
  const title = "Quem está obrigado a adotar a RBAC?";
  const description = "Veja quem é obrigado a adotar a RBAC.";
  const texts = [
    {
      id: "paragraph_01",
      type: "paragraph",
      text: "Segundo a regulamentação da ANAC (RBAC120), estas medidas se estendem a todas as empresas que possuem alguma Atividade de Risco à Segurança Operacional (ARSO).",
    },
    {
      id: "paragraph_02",
      type: "paragraph",
      text: "Sendo de responsabilidade de todas as empresas aéreas e prestadoras de serviços, a realização de programas explicativos sobre os malefícios das drogas, programa de inclusão dos exames nos processos admissionais e programa de acompanhamento no caso de um resultado positivo.",
    },
    {
      id: "subtitle_01",
      type: "subtitle",
      text: "Empresas que se enquadram neste perfil:",
    },
    {
      id: "list_01",
      type: "iconlist",
      texts: [
        {
          id: "listItem_01",
          type: "listItem",
          text: "serviços públicos especializados;",
        },
        {
          id: "listItem_02",
          type: "listItem",
          text: "empresas de transportes aéreos e serviços especializados;",
        },
        {
          id: "listItem_03",
          type: "listItem",
          text: "empresas despachantes operacionais de voo;",
        },
        {
          id: "listItem_04",
          type: "listItem",
          text: "empresas de combate a incêndios nos aeroportos;",
        },
        {
          id: "listItem_05",
          type: "listItem",
          text: "empresas de segurança aeroportuária;",
        },
        {
          id: "listItem_06",
          type: "listItem",
          text: "empresas que desempenhem qualquer atividade que realizada por pessoas com acesso ao aeródromo;",
        },
        {
          id: "listItem_07",
          type: "listItem",
          text: "empresas que realizam manutenção preventiva e corretivas de aeronaves, manutenção de produtos de aeronáutica, rádio navegação e telecomunicações aeronáuticas;",
        },
        {
          id: "listItem_08",
          type: "listItem",
          text: "empresas de transporte de cargas e descargas de bagagens;",
        },
        {
          id: "listItem_09",
          type: "listItem",
          text: "entre outras (…)",
        },
      ],
    },
    {
      id: "subtitle_02",
      type: "subtitle",
      text: "Referência ao Regulamento Brasileiro da Aviação Civil RBAC 120",
    },
    {
      id: "paragraph_03",
      type: "paragraphN",
      text: "120.1 Aplicabilidade",
    },
    {
      id: "paragraph_04",
      type: "paragraph",
      text: "(a) Este Regulamento se aplica a qualquer pessoa que desempenhe Atividade de Risco à Segurança Operacional na Aviação Civil (ARSO), incluindo:",
    },
    {
      id: "list_02",
      type: "list",
      texts: [
        {
          id: "listItem_01",
          type: "listItem",
          text: "(1) exploradores de serviços aéreos:",
        },
        {
          id: "listItem_0101",
          type: "listItem-1",
          text: "(i) empresas de transporte aéreo;",
        },
        {
          id: "listItem_0102",
          type: "listItem-1",
          text: "(ii) serviços aéreos especializados públicos;",
        },
        {
          id: "listItem_02",
          type: "listItem",
          text: "(2) detentores de certificado sob o RBHA 145, ou RBAC que venha a substituí-lo;",
        },
        {
          id: "listItem_03",
          type: "listItem",
          text: "(3) detentores de certificado sob o RBAC 139;",
        },
        {
          id: "listItem_04",
          type: "listItem",
          text: "(4) empresas subcontratadas, direta ou indiretamente, por qualquer dos anteriores para desempenhar ARSO.",
        },
      ],
    },
    {
      id: "paragraph_05",
      type: "paragraph",
      text: "(b) Para os propósitos deste Regulamento, são consideradas ARSO:",
    },
    {
      id: "list_03",
      type: "list",
      texts: [
        {
          id: "listItem_01",
          type: "listItem",
          text: "(1) qualquer atividade realizada por uma pessoa, exceto passageiro, na área restrita de segurança do aeródromo (ARS);",
        },
        {
          id: "listItem_02",
          type: "listItem",
          text: "(2) cálculo das posições de carga, bagagem, passageiros e combustível nas aeronaves;",
        },
        {
          id: "listItem_03",
          type: "listItem",
          text: "(3) manutenção, manutenção preventiva e modificações, incluindo reparos e inspeções obrigatórias de qualquer dos seguintes itens:",
        },
        {
          id: "listItem_0301",
          type: "listItem-1",
          text: "(i) aeronave;",
        },
        {
          id: "listItem_0302",
          type: "listItem-1",
          text: "(ii) produtos aeronáuticos;",
        },
        {
          id: "listItem_0303",
          type: "listItem-1",
          text: "(iii) produtos de radionavegação aeronáutica;",
        },
        {
          id: "listItem_0304",
          type: "listItem-1",
          text: "(iv) produtos de telecomunicações aeronáuticas.",
        },
        {
          id: "listItem_04",
          type: "listItem",
          text: "(4) inspeção e certificação da manutenção de um produto mencionado no parágrafo 120.1(b)(3);",
        },
        {
          id: "listItem_05",
          type: "listItem",
          text: "(5) abastecimento e manutenção dos veículos que serão utilizados para o abastecimento das aeronaves na ARS;",
        },
        {
          id: "listItem_06",
          type: "listItem",
          text: "(6) atividades realizadas por um agente de segurança do aeródromo ou um operador de raio-x;",
        },
        {
          id: "listItem_07",
          type: "listItem",
          text: "(7) atividades realizadas por um membro da tripulação de uma aeronave;",
        },
        {
          id: "listItem_08",
          type: "listItem",
          text: "(8) carga e descarga de veículos de transporte de bagagem (trolleys) para carregamento e descarregamento da aeronave e a condução destes veículos;",
        },
        {
          id: "listItem_09",
          type: "listItem",
          text: "(9) atividades de prevenção, salvamento e combate a incêndio.",
        },
      ],
    },
    {
      id: "paragraph_06",
      type: "paragraph",
      text: "(c) Este Regulamento se aplica a pessoas responsáveis por desempenho das ARSO especificadas nos parágrafos 120.1(b)(2) a 120.1(b)(9) mesmo que essas atividades não ocorram na ARS.",
    },
    {
      id: "paragraph_07",
      type: "paragraphN",
      text: "120.3 Obrigatoriedades",
    },
    {
      id: "paragraph_08",
      type: "paragraph",
      text: "(a) É obrigatória a todas as empresas mencionadas na seção 120.1, (Aplicabilidade – exposto acima) à exceção daquelas mencionadas no parágrafo 120.1(a)(4), a elaboração, execução e manutenção de um Programa de Prevenção do Uso Indevido de Substâncias Psicoativas na Aviação Civil (PPSP), bem como de seus subprogramas, todos válidos perante a ANAC.",
    },
    {
      id: "paragraph_09",
      type: "paragraph",
      text: "(b) A empresa responsável que seja contratante de outra empresa poderá, a seu critério, incluir essa empresa subcontratada no seu PPSP, conforme disposto no parágrafo 120.1 (a)(4). Caso opte pela não inclusão, deverá exigir que a empresa subcontratada possua seu próprio PPSP, igualmente válido perante a ANAC.",
    },
    {
      id: "paragraph_10",
      type: "paragraph",
      text: "(c) Cada empresa responsável deverá apresentar uma declaração de conformidade, acompanhada por uma listagem completa de todas as seções e requisitos deste Regulamento com o correspondente método de conformidade a ser adotado, o que deverá ser entregue à ANAC antes da implementação do PPSP proposto.",
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

export default Obligation;
