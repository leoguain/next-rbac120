import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "src/components/Page";
import { Content } from "src/components/Content";
import { PageTitle } from "src/components/PageTitle";
import { PageConstructor } from "src/components/PageConstructor";

const Explicacao = ({
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
  const pageTitle = "Norma ANAC RBAC 120 explicada - RBAC 120";
  const title = "Norma ANAC RBAC 120 explicada";
  const description = "Entenda a RBAC 120.";
  const texts = [
    {
      id: "paragraph_01",
      type: "paragraph",
      text: "A ANAC, visando aumentar a segurança da aviação civil brasileira e adequar a atividade às recomendações internacionais, instituiu a RBAC 120, que estabelece a adoção obrigatória de um Programa de Prevenção ao Uso Indevido de Substâncias Psicoativas na Aviação Civil. Seus objetivos são:",
    },
    {
      id: "subtitle_01",
      type: "subtitle",
      text: "Para o Sistema de Aviação Civil:",
    },
    {
      id: "list_01",
      type: "iconlist",
      texts: [
        {
          id: "listItem_01",
          type: "listItem",
          text: "Aumento dos níveis reais de segurança operacional;",
        },
        {
          id: "listItem_02",
          type: "listItem",
          text: "Adequação às recomendações de agências internacionais as quais somos signatários",
        },
      ],
    },
    {
      id: "subtitle_02",
      type: "subtitle",
      text: "Para as empresas:",
    },
    {
      id: "list_02",
      type: "iconlist",
      texts: [
        {
          id: "listItem_01",
          type: "listItem",
          text: "Redução de níveis de absenteísmo e do turnover;",
        },
        {
          id: "listItem_02",
          type: "listItem",
          text: "Aumento na produtividade;",
        },
        {
          id: "listItem_03",
          type: "listItem",
          text: "Redução dos custos associados com a saúde dos empregados;",
        },
        {
          id: "listItem_04",
          type: "listItem",
          text: "Melhores condições para celebração de contratos com empresas estrangeiras e multinacionais;",
        },
        {
          id: "listItem_05",
          type: "listItem",
          text: "Gestão da imagem da empresa no mercado e na comunidade.",
        },
      ],
    },
    {
      id: "subtitle_03",
      type: "subtitle",
      text: "Para o profissional:",
    },
    {
      id: "list_03",
      type: "iconlist",
      texts: [
        {
          id: "listItem_01",
          type: "listItem",
          text: "Benefícios diretos para a saúde, oportunidade para reflexão e mudança de estilo de vida;",
        },
        {
          id: "listItem_02",
          type: "listItem",
          text: "Acesso a informações adequadas e de qualidade sobre o uso de substâncias psicoativas, suas consequências e possibilidade de busca de apoio profissional, quando necessário.",
        },
      ],
    },
    {
      id: "subtitle_04",
      type: "subtitle",
      text: "Empresas que devem adotar a Norma ANAC RBAC 120",
    },
    {
      id: "list_04",
      type: "iconlist",
      texts: [
        {
          id: "listItem_01",
          type: "listItem",
          text: "Serviços públicos especializados e infraestrutura aeroportuária;",
        },
        {
          id: "listItem_02",
          type: "listItem",
          text: "Detentoras do RBAC 145 e 139;",
        },
        {
          id: "listItem_03",
          type: "listItem",
          text: "Transportes aéreos e serviços especializados;",
        },
        {
          id: "listItem_04",
          type: "listItem",
          text: "Despachantes operacionais de voo;",
        },
        {
          id: "listItem_05",
          type: "listItem",
          text: "Combate a incêndios nos aeroportos;",
        },
        {
          id: "listItem_06",
          type: "listItem",
          text: "Segurança aeroportuária e Raio X;",
        },
        {
          id: "listItem_07",
          type: "listItem",
          text: "Que desempenhem atividade com acesso ao aeródromo;",
        },
        {
          id: "listItem_08",
          type: "listItem",
          text: "Que realizam manutenção preventiva e corretiva de aeronaves;",
        },
        {
          id: "listItem_09",
          type: "listItem",
          text: "Transporte, carga e descarga de bagagens e operação de trolleys;",
        },
        {
          id: "listItem_10",
          type: "listItem",
          text: "Outras empresas e organizações.",
        },
      ],
    },
    {
      id: "subtitle_05",
      type: "subtitle",
      text: "Definição de ARSO",
    },
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
      id: "link_01",
      type: "link",
      text: "Consulte-nos em caso de dúvidas.",
      path: "/fale-conosco",
    },
    {
      id: "subtitle_06",
      type: "subtitle",
      text: "O RBAC 120 estabelece a obrigatoriedade da implementação até:",
    },
    {
      id: "list_05",
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

    {
      id: "subtitle_07",
      type: "subtitle",
      text: "Momentos de aplicação de exames toxicológicos ou ETSP",
    },
    {
      id: "paragraph_04",
      type: "paragraph",
      text: "Esse programa determina a aplicação de exames toxicológicos em momentos distintos:",
    },
    {
      id: "list_06",
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
  ];

  return {
    props: {
      pageTitle,
      title,
      description,
      texts,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default Explicacao;
