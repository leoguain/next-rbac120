import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

import { Page } from "src/components/Page";
import { Content } from "src/components/Content";
import { PageTitle } from "src/components/PageTitle";
import { PageConstructor } from "src/components/PageConstructor";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

const Implantacao = ({
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
  const pageTitle = "Como implantar a norma RBAC? - RBAC 120";
  const title = "Como implantar a norma RBAC?";
  const description = "Saiba como implantar a norma RBAC.";
  const texts = [
    {
      id: "subTitle_01",
      type: "subtitle",
      text: "A Toxicologia Pardini está preparada para atender todos os aspectos da norma",
    },
    {
      id: "paragraph_01",
      type: "paragraph",
      text: "De acordo com o RBAC 120, todos os funcionários ARSO ou que venham a ser admitidos para funções ARSO deverão – obrigatoriamente – passar por treinamento e programa educativo. Nosso programa atende as exigências e apresenta soluções completas com excelente relação custo x benefício.",
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
              text: "E-learning: ",
            },
            {
              id: "text_02",
              type: "paragraph",
              text: "O Sistema de aprendizagem à distância que possibilita o treinamento eficaz de acordo com as necessidades da empresa seja ela de qualquer tamanho;",
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
              text: "Tutor online: ",
            },
            {
              id: "text_02",
              type: "paragraph",
              text: "Plantão especializado disponível para apoiar o funcionário ARSO, nos casos de necessidade.",
            },
          ],
        },
      ],
    },
    {
      id: "subtitle_02",
      type: "subtitle",
      text: "Programa educativo com serviços integrados de treinamento e avaliação",
    },
    {
      id: "paragraph_02",
      type: "paragraph",
      text: "E-Learning para profissionais ARSO e supervisores: O Sistema de Ensino à Distância (EAD) é formado por 6 módulos que podem ser acessados online, por qualquer computador, tanto na empresa como em casa com tutor online para apoiar toda a rede de aprendizado. Isso possibilita treinamentos de qualidade, a qualquer momento e em qualquer número com racionalização dos custos.",
    },
    {
      id: "paragraph_03",
      type: "paragraph",
      text: "Todos os módulos utilizam recursos multimídia com histórias e exemplos lúdicos para facilitar a fixação dos pontos de educação obrigatória, sem perder a seriedade que o tema exige. O curso foi criado por especialistas seguindo os requisitos da Norma ANAC.",
    },
    {
      id: "subtitle_03",
      type: "subtitle",
      text: "Educação e treinamento ARSO",
    },
    {
      id: "paragraph_04",
      type: "paragraph",
      text: "Educação a distância dos funcionários em áreas de risco através de E-learning, material didático e tutor online.",
    },
    {
      id: "subtitle_04",
      type: "subtitle",
      text: "Módulo 1 (Duração: 8 minutos)",
    },
    {
      id: "paragraph_05",
      type: "paragraph",
      text: "Esclarecimentos sobre a Norma ANAC RBAC 120.",
    },
    {
      id: "list_02",
      type: "iconlist",
      texts: [
        {
          id: "listItem_01",
          type: "listItem",
          text: "O que é a RBAC 120 e por que foi criada a norma;",
        },
        {
          id: "listItem_02",
          type: "listItem",
          text: "Quais empresas e funcionários devem adotá-la;",
        },
        {
          id: "listItem_03",
          type: "listItem",
          text: "Quais são os prazos para adoção;",
        },
        {
          id: "listItem_04",
          type: "listItem",
          text: "Qual a nomenclatura da norma.",
        },
      ],
    },
    {
      id: "subtitle_05",
      type: "subtitle",
      text: "Módulo 2 (Duração: 14 minutos)",
    },
    {
      id: "paragraph_06",
      type: "paragraph",
      text: "Programa de prevenção do uso indevido de substâncias psicoativas.",
    },
    {
      id: "list_03",
      type: "iconlist",
      texts: [
        {
          id: "listItem_01",
          type: "listItem",
          text: "Quem está sujeito ao programa?",
        },
        {
          id: "listItem_02",
          type: "listItem",
          text: "O que estabelece a norma em relação ao programa?",
        },
        {
          id: "listItem_03",
          type: "listItem",
          text: "Como ele afeta o funcionário ARSO?",
        },
      ],
    },
    {
      id: "subtitle_06",
      type: "subtitle",
      text: "Módulo 3 (Duração: 22 minutos)",
    },
    {
      id: "paragraph_07",
      type: "paragraph",
      text: "As substâncias psicoativas e suas consequências para a saúde e atividades de risco.",
    },
    {
      id: "list_04",
      type: "iconlist",
      texts: [
        {
          id: "listItem_01",
          type: "listItem",
          text: "O que são substâncias psicoativas?",
        },
        {
          id: "listItem_02",
          type: "listItem",
          text: "Quais são as substâncias psicoativas de uso restrito pela norma?",
        },
        {
          id: "listItem_03",
          type: "listItem",
          text: "Como cada uma delas afeta a saúde, as relações sociais e, em particular, o cérebro?",
        },
        {
          id: "listItem_04",
          type: "listItem",
          text: "Como elas afetam o desempenho em funções de risco?",
        },
      ],
    },
    {
      id: "subtitle_07",
      type: "subtitle",
      text: "Módulo 4 (Duração: 12 minutos)",
    },
    {
      id: "paragraph_08",
      type: "paragraph",
      text: "Exame toxicológico de substâncias psicoativas.",
    },
    {
      id: "list_05",
      type: "iconlist",
      texts: [
        {
          id: "listItem_01",
          type: "listItem",
          text: "O que são exames toxicológicos de substancias psicoativas (ETSP);",
        },
        {
          id: "listItem_02",
          type: "listItem",
          text: "Quando e para quem eles devem ser adotados, segundo a norma;",
        },
        {
          id: "listItem_03",
          type: "listItem",
          text: "Quais as tecnologias e como eles funcionam;",
        },
        {
          id: "listItem_04",
          type: "listItem",
          text: "Como deve ser feita a coleta, análise e armazenagem;",
        },
        {
          id: "listItem_05",
          type: "listItem",
          text: "Quais as conseqüências de um exame positivo ou uma recusa.",
        },
      ],
    },
    {
      id: "subtitle_08",
      type: "subtitle",
      text: "Módulo 5 (Duração: 4 minutos)",
    },
    {
      id: "paragraph_09",
      type: "paragraph",
      text: "Programa de resposta a evento impeditivo.",
    },
    {
      id: "list_06",
      type: "iconlist",
      texts: [
        {
          id: "listItem_01",
          type: "listItem",
          text: "O que é um evento impeditivo?",
        },
        {
          id: "listItem_02",
          type: "listItem",
          text: "Quais suas consequências, segundo a norma?",
        },
        {
          id: "listItem_03",
          type: "listItem",
          text: "Tipos de tratamento;",
        },
        {
          id: "listItem_04",
          type: "listItem",
          text: "Retorno à função ARSO.",
        },
      ],
    },
    {
      id: "subtitle_09",
      type: "subtitle",
      text: "Módulo 6 – Módulo adicional para supervisores ARSO (Duração: 11 minutos)",
    },
    {
      id: "paragraph_10",
      type: "paragraph",
      text: "Treinamento de supervisores e administração de casos de suspeita.",
    },
    {
      id: "list_07",
      type: "iconlist",
      texts: [
        {
          id: "listItem_01",
          type: "listItem",
          text: "Quais são as responsabilidades de um supervisor?",
        },
        {
          id: "listItem_02",
          type: "listItem",
          text: "Quais são os sinais de um possível uso indevido de substância psicoativa, uma a uma;",
        },
        {
          id: "listItem_03",
          type: "listItem",
          text: "Limites e deveres do supervisor;",
        },
        {
          id: "listItem_04",
          type: "listItem",
          text: "Como comunicar um caso suspeito.",
        },
      ],
    },
    {
      id: "paragraph_11",
      type: "paragraph",
      text: "Caso sua empresa prefira, podemos disponibilizar instrutores especializados para treinamento on-site.",
    },
    {
      id: "subtitle_10",
      type: "subtitle",
      text: "Exames toxicológicos e resposta a evento impeditivo",
    },
    {
      id: "paragraph_12",
      type: "paragraph",
      text: "O RBAC 120 estabelece a obrigatoriedade da adoção de um subprograma de Exames Toxicológicos para Substâncias Psicoativas ou ETSP, com regras para garantir a confiabilidade dos exames, sua correta aplicação e sua aleatoriedade.",
    },
    {
      id: "paragraph_13",
      type: "paragraph",
      text: "Essa exigência implica na necessidade de uma rede de coleta especializada e logística, ferramentas para sorteio e administração, além de especialistas para interpretação de resultados.",
    },
    {
      id: "paragraph_14",
      type: "paragraph",
      text: "Como líder em exames toxicológicos, oferecemos duas modalidades: Toxicológicos – ETSP",
    },
    {
      id: "list_08",
      type: "iconlist",
      texts: [
        {
          id: "listItem_01",
          type: "cParagraph",
          texts: [
            {
              id: "text_01",
              type: "paragraphN",
              text: "Exames Toxicológicos de Queratina: ",
            },
            {
              id: "text_02",
              type: "paragraph",
              text: "realizados a partir da análise de cabelos ou pelos, tem a vantagem de serem muito eficazes em decorrência de sua grande janela de detecção (até 180 dias) e sua segurança. Adicionalmente a coleta é fácil e rápida e a logística é simplificada. Muito recomendados para os ETSP prévios;",
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
              text: "Exames Toxicológicos de Urina: ",
            },
            {
              id: "text_02",
              type: "paragraph",
              text: "com uma janela de detecção de 2 a 5 dias, sua eficiência é restrita, mas seu custo é menor.",
            },
          ],
        },
      ],
    },
    {
      id: "image_01",
      type: "imageC",
      text: "Janela de detecção do exame toxicológico",
      path: "/images/infografico_janela_deteccao_exame_toxicologico.jpg",
    },
    {
      id: "note_01",
      type: "noteC",
      text: "Janela de detecção do exame toxicológico",
    },
    {
      id: "subtitle_11",
      type: "subtitle",
      text: "Rede de laboratórios de coleta em todo o Brasil",
    },
    {
      id: "paragraph_15",
      type: "paragraph",
      text: "O atendimento do RBAC 120 exige a realização de coletas de material biológico (urina, cabelo ou pelos) para realização dos exames toxicológicos. Dada a natureza sensível dos exames essa coleta e sua logística devem ser realizada de maneira eficaz e segura.",
    },
    {
      id: "paragraph_16",
      type: "paragraph",
      text: "A Toxicologia Pardini oferece uma rede de mais de 4.500 postos de coleta especializados, pronto para atender qualquer demanda, até mesmo de forma online, possibilitando resultados rápidos e de completa rastreabilidade, recurso importante dada a capilaridade inerente ao setor aéreo.",
    },
    {
      id: "subtitle_12",
      type: "subtitle",
      text: "Software de sorteio",
    },
    {
      id: "paragraph_17",
      type: "paragraph",
      text: "A Norma da ANAC estabelece a obrigatoriedade de sorteios aleatórios entre os funcionários ARSO.",
    },
    {
      id: "paragraph_18",
      type: "paragraph",
      text: "A Toxicologia Pardini disponibiliza aos seus clientes o software de sorteio Randon 4.0 para gerenciamento e sorteio online, estritamente dentro das normas da ANAC; O software possibilita ao gestor do programa:",
    },
    {
      id: "list_09",
      type: "iconlist",
      texts: [
        {
          id: "listItem_01",
          type: "listItem",
          text: "Gestão dos funcionários ARSO;",
        },
        {
          id: "listItem_02",
          type: "listItem",
          text: "Controle dos sorteios;",
        },
        {
          id: "listItem_03",
          type: "listItem",
          text: "Realização de sorteios futuros automáticos;",
        },
        {
          id: "listItem_04",
          type: "listItem",
          text: "Testemunho e geração de atas do sorteio;",
        },
        {
          id: "listItem_05",
          type: "listItem",
          text: "Envio de emails automatizados para os sorteados e supervisores;",
        },
        {
          id: "listItem_06",
          type: "listItem",
          text: "Controle da localização de cada coleta, em qualquer lugar;",
        },
        {
          id: "listItem_07",
          type: "listItem",
          text: "Controle dos resultados, integrado ao nosso banco de dados em tempo real;",
        },
        {
          id: "listItem_08",
          type: "listItem",
          text: "Completo sigilo e proteção dos dados dos sorteados.",
        },
      ],
    },
    {
      id: "image_02",
      type: "imageC",
      text: "Software de sorteio.",
      path: "/images/software_sorteio.jpg",
    },

    {
      id: "subtitle_13",
      type: "subtitle",
      text: "Subprograma de resposta a evento impeditivo",
    },
    {
      id: "paragraph_19",
      type: "paragraph",
      text: "O profissional ARSO que tiver um resultado positivo ou se recusar ao exame toxicológico será afastado imediatamente de sua função e incluído no programa de resposta a eventos impeditivos que objetiva apoiar, recuperar e reinserir esse profissional em suas funções.",
    },
    {
      id: "paragraph_20",
      type: "paragraph",
      text: "Um profissional qualificado e capacitado para avaliar de maneira abrangente o individuo ARSO que tiver resultado positivo para o exame toxicológico fará as recomendações necessárias de orientação e possível tratamento.",
    },
    {
      id: "paragraph_21",
      type: "paragraph",
      text: "As ações a serem tomadas seguem a recomendação da RBAC 120 podem ser:",
    },
    {
      id: "list_10",
      type: "iconlist",
      texts: [
        {
          id: "listItem_01",
          type: "listItem",
          text: "Orientação sobre as normas e requisitos de segurança operacional da aviação civil;",
        },
        {
          id: "listItem_02",
          type: "listItem",
          text: "Aconselhamento terapêutico profissional;",
        },
        {
          id: "listItem_03",
          type: "listItem",
          text: "Psicoterapia;",
        },
        {
          id: "listItem_04",
          type: "listItem",
          text: "Farmacoterapia;",
        },
        {
          id: "listItem_05",
          type: "listItem",
          text: "Programa de Tratamento em regime ambulatorial;",
        },
        {
          id: "listItem_06",
          type: "listItem",
          text: "Programa de Tratamento em regime internação.",
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

export default Implantacao;
