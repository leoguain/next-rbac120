import Head from "next/head";
import { Page } from "src/components/Page";

import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { HiChevronRight } from "react-icons/hi";

import { When } from "../components/shared/When";

import {
  Text,
  Box,
  Link,
  Flex,
  Image,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

/*
{textos.map(({id, type, text})=> (
        <>
        <When {type}="mainTitle">

        </When>
        <When {type}="subTitle">
          
        </When>
        <When {type}="paragraph">
          
        </When>
        <When {type}="list">
          
        </When>
        </>
        
      ))}

      */

const Implantacao = ({
  textos,
  textsPage,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Como implantar a norma RBAC?</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Page title="Implantação" description="Teste1">
        <Box
          bg={"#fff"}
          w="100%"
          h="auto"
          maxWidth={"7xl"}
          mx="auto"
          my={4}
          px={[4]}
        >
          <Flex
            borderBottom="2px solid"
            borderColor="gray.200"
            alignItems={"center"}
            justifyContent={["center", "center", "space-between"]}
            flexDirection={["column-reverse", "column-reverse", "row"]}
          >
            <Text color={"primary.500"} fontSize={["xl", "2xl"]} my={4}>
              {textsPage?.pageTitle}
            </Text>
            <Text color={"gray.400"} alignSelf="flex-end" fontSize={"sm"}>
              <Link href="">Início</Link> / <Link href="">Norma</Link> / Norma
              Como implantar a norma RBAC?
            </Text>
          </Flex>

          <Box my={16}>
            <Text color={"primary.500"} fontSize={["xl", "2xl"]} my={4} mt={8}>
              {textsPage?.subTitle1}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              {textsPage?.paragraph1}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              <Box>
                <List>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph2_1}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph2_2}
                  </ListItem>
                </List>
              </Box>
            </Text>
            <Text color={"primary.500"} fontSize={["xl", "2xl"]} my={4} mt={8}>
              {textsPage?.subTitle2}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              {textsPage?.paragraph3}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              {textsPage?.paragraph4}
            </Text>
            <Text color={"primary.500"} fontSize={["xl", "2xl"]} my={4} mt={8}>
              {textsPage?.subTitle3}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              {textsPage?.paragraph5}
            </Text>

            <Text color={"primary.500"} fontSize={["xl", "2xl"]} my={4} mt={8}>
              {textsPage?.subTitle4}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              {textsPage?.paragraph6}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              <Box>
                <List>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph7_1}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph7_2}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph7_3}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph7_4}
                  </ListItem>
                </List>
              </Box>
            </Text>

            <Text color={"primary.500"} fontSize={["xl", "2xl"]} my={4} mt={8}>
              {textsPage?.subTitle5}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              {textsPage?.paragraph8}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              <Box>
                <List>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph9_1}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph9_2}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph9_3}
                  </ListItem>
                </List>
              </Box>
            </Text>

            <Text color={"primary.500"} fontSize={["xl", "2xl"]} my={4} mt={8}>
              {textsPage?.subTitle6}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              {textsPage?.paragraph10}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              <Box>
                <List>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph11_1}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph11_2}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph11_3}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph11_4}
                  </ListItem>
                </List>
              </Box>
            </Text>

            <Text color={"primary.500"} fontSize={["xl", "2xl"]} my={4} mt={8}>
              {textsPage?.subTitle7}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              {textsPage?.paragraph12}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              <Box>
                <List>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph13_1}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph13_2}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph13_3}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph13_4}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph13_5}
                  </ListItem>
                </List>
              </Box>
            </Text>

            <Text color={"primary.500"} fontSize={["xl", "2xl"]} my={4} mt={8}>
              {textsPage?.subTitle8}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              {textsPage?.paragraph14}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              <Box>
                <List>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph15_1}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph15_2}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph15_3}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph15_4}
                  </ListItem>
                </List>
              </Box>
            </Text>

            <Text color={"primary.500"} fontSize={["xl", "2xl"]} my={4} mt={8}>
              {textsPage?.subTitle9}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              {textsPage?.paragraph16}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              <Box>
                <List>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph17_1}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph17_2}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph17_3}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph17_4}
                  </ListItem>
                </List>
              </Box>
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              {textsPage?.paragraph18}
            </Text>

            <Text color={"primary.500"} fontSize={["xl", "2xl"]} my={4} mt={8}>
              {textsPage?.subTitle10}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              {textsPage?.paragraph19}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              {textsPage?.paragraph20}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              {textsPage?.paragraph21}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              <Box>
                <List>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph22_1}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph22_2}
                  </ListItem>
                </List>
              </Box>
            </Text>
            <Image
              src="/images/infografico_janela_deteccao_exame_toxicologico.jpg"
              alt="Infográfico da Janela de Detecção do exame toxicológico."
              objectFit="cover"
            />

            <Text color={"#000"} fontSize={["sm"]} textAlign="center" my={4}>
              {textsPage?.paragraph23}
            </Text>

            <Text color={"primary.500"} fontSize={["xl", "2xl"]} my={4} mt={8}>
              {textsPage?.subTitle11}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              {textsPage?.paragraph24}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              {textsPage?.paragraph25}
            </Text>

            <Text color={"primary.500"} fontSize={["xl", "2xl"]} my={4} mt={8}>
              {textsPage?.subTitle12}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              {textsPage?.paragraph26}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              {textsPage?.paragraph27}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              <Box>
                <List>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph28_1}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph28_2}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph28_3}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph28_4}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph28_5}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph28_6}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph28_7}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph28_8}
                  </ListItem>
                </List>
              </Box>
            </Text>
            <Box>
              <Image
                src="/images/software_sorteio.jpg"
                alt="Softare de sorteio."
                objectFit="cover"
              />
            </Box>

            <Text color={"primary.500"} fontSize={["xl", "2xl"]} my={4} mt={8}>
              {textsPage?.subTitle13}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              {textsPage?.paragraph29}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              {textsPage?.paragraph30}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              {textsPage?.paragraph31}
            </Text>
            <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
              <Box>
                <List>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph32_1}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph32_2}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph32_3}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph32_4}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph32_5}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={HiChevronRight} />
                    {textsPage?.paragraph32_6}
                  </ListItem>
                </List>
              </Box>
            </Text>
          </Box>
        </Box>
      </Page>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const textos = [
    {
      id: "mainTitle_01",
      type: "mainTitle",
      text: "Como implantar a norma RBAC?",
    },
    {
      id: "subTitle_01",
      type: "subTitle",
      text: "A Toxicologia Pardini está preparada para atender todos os aspectos da norma",
    },
    {
      id: "paragraph_01",
      type: "paragraph",
      text: "De acordo com o RBAC 120, todos os funcionários ARSO ou que venham a ser admitidos para funções ARSO deverão – obrigatoriamente – passar por treinamento e programa educativo. Nosso programa atende as exigências e apresenta soluções completas com excelente relação custo x benefício.",
    },
    {
      type: "list",
      texts: [
        {
          id: "listItem_01",
          type: "listItem",
          text: "E-learning: O Sistema de aprendizagem à distância que possibilita o treinamento eficaz de acordo com as necessidades da empresa seja ela de qualquer tamanho;",
        },
        {
          id: "listItem_02",
          type: "listItem",
          text: "Tutor online: Plantão especializado disponível para apoiar o funcionário ARSO, nos casos de necessidade.",
        },
      ],
    },
  ];

  const textsPage = {
    pageTitle: "Como implantar a norma RBAC?",

    subTitle1:
      "A Toxicologia Pardini está preparada para atender todos os aspectos da norma",
    paragraph1:
      "De acordo com o RBAC 120, todos os funcionários ARSO ou que venham a ser admitidos para funções ARSO deverão – obrigatoriamente – passar por treinamento e programa educativo. Nosso programa atende as exigências e apresenta soluções completas com excelente relação custo x benefício.",
    paragraph2_1:
      "E-learning: O Sistema de aprendizagem à distância que possibilita o treinamento eficaz de acordo com as necessidades da empresa seja ela de qualquer tamanho;",
    paragraph2_2:
      "Tutor online: Plantão especializado disponível para apoiar o funcionário ARSO, nos casos de necessidade.",

    subTitle2:
      "Programa educativo com serviços integrados de treinamento e avaliação",
    paragraph3:
      "E-Learning para profissionais ARSO e supervisores: O Sistema de Ensino à Distância (EAD) é formado por 6 módulos que podem ser acessados online, por qualquer computador, tanto na empresa como em casa com tutor online para apoiar toda a rede de aprendizado. Isso possibilita treinamentos de qualidade, a qualquer momento e em qualquer número com racionalização dos custos.",
    paragraph4:
      "Todos os módulos utilizam recursos multimídia com histórias e exemplos lúdicos para facilitar a fixação dos pontos de educação obrigatória, sem perder a seriedade que o tema exige. O curso foi criado por especialistas seguindo os requisitos da Norma ANAC.",

    subTitle3: "Educação e treinamento ARSO",
    paragraph5:
      "Educação a distância dos funcionários em áreas de risco através de E-learning, material didático e tutor online.",

    subTitle4: "Módulo 1 (Duração: 8 minutos)",
    paragraph6: "Esclarecimentos sobre a Norma ANAC RBAC 120.",
    paragraph7_1: "O que é a RBAC 120 e por que foi criada a norma;",
    paragraph7_2: "Quais empresas e funcionários devem adotá-la;",
    paragraph7_3: "Quais são os prazos para adoção;",
    paragraph7_4: "Qual a nomenclatura da norma.",

    subTitle5: "Módulo 2 (Duração: 14 minutos)",
    paragraph8:
      "Programa de prevenção do uso indevido de substâncias psicoativas.",
    paragraph9_1: "Quem está sujeito ao programa?",
    paragraph9_2: "O que estabelece a norma em relação ao programa?",
    paragraph9_3: "Como ele afeta o funcionário ARSO?",

    subTitle6: "Módulo 3 (Duração: 22 minutos)",
    paragraph10:
      "As substâncias psicoativas e suas consequências para a saúde e atividades de risco.",
    paragraph11_1: "O que são substâncias psicoativas?",
    paragraph11_2:
      "Quais são as substâncias psicoativas de uso restrito pela norma?",
    paragraph11_3:
      "Como cada uma delas afeta a saúde, as relações sociais e, em particular, o cérebro?",
    paragraph11_4: "Como elas afetam o desempenho em funções de risco?",

    subTitle7: "Módulo 4 (Duração: 12 minutos)",
    paragraph12: "Exame toxicológico de substâncias psicoativas.",
    paragraph13_1:
      "O que são exames toxicológicos de substancias psicoativas (ETSP);",
    paragraph13_2:
      "Quando e para quem eles devem ser adotados, segundo a norma;",
    paragraph13_3: "Quais as tecnologias e como eles funcionam;",
    paragraph13_4: "Como deve ser feita a coleta, análise e armazenagem;",
    paragraph13_5: "Quais as conseqüências de um exame positivo ou uma recusa.",

    subTitle8: "Módulo 5 (Duração: 4 minutos)",
    paragraph14: "Programa de resposta a evento impeditivo.",
    paragraph15_1: "O que é um evento impeditivo?",
    paragraph15_2: "Quais suas consequências, segundo a norma?",
    paragraph15_3: "Tipos de tratamento;",
    paragraph15_4: "Retorno à função ARSO.",

    subTitle9:
      "Módulo 6 – Módulo adicional para supervisores ARSO (Duração: 11 minutos)",
    paragraph16:
      "Treinamento de supervisores e administração de casos de suspeita.",
    paragraph17_1: "Quais são as responsabilidades de um supervisor?",
    paragraph17_2:
      "Quais são os sinais de um possível uso indevido de substância psicoativa, uma a uma;",
    paragraph17_3: "Limites e deveres do supervisor;",
    paragraph17_4: "Como comunicar um caso suspeito.",
    paragraph18:
      "Caso sua empresa prefira, podemos disponibilizar instrutores especializados para treinamento on-site.",

    subTitle10: "Exames toxicológicos e resposta a evento impeditivo",
    paragraph19:
      "O RBAC 120 estabelece a obrigatoriedade da adoção de um subprograma de Exames Toxicológicos para Substâncias Psicoativas ou ETSP, com regras para garantir a confiabilidade dos exames, sua correta aplicação e sua aleatoriedade.",
    paragraph20:
      "Essa exigência implica na necessidade de uma rede de coleta especializada e logística, ferramentas para sorteio e administração, além de especialistas para interpretação de resultados.",
    paragraph21:
      "Como líder em exames toxicológicos, oferecemos duas modalidades: Toxicológicos – ETSP",
    paragraph22_1:
      "Exames Toxicológicos de Queratina: realizados a partir da análise de cabelos ou pelos, tem a vantagem de serem muito eficazes em decorrência de sua grande janela de detecção (até 180 dias) e sua segurança. Adicionalmente a coleta é fácil e rápida e a logística é simplificada. Muito recomendados para os ETSP prévios;",
    paragraph22_2:
      "Exames Toxicológicos de Urina: com uma janela de detecção de 2 a 5 dias, sua eficiência é restrita, mas seu custo é menor.",
    paragraph23: "Janela de detecção do exame toxicológico",

    subTitle11: "Rede de laboratórios de coleta em todo o Brasil",
    paragraph24:
      "O atendimento do RBAC 120 exige a realização de coletas de material biológico (urina, cabelo ou pelos) para realização dos exames toxicológicos. Dada a natureza sensível dos exames essa coleta e sua logística devem ser realizada de maneira eficaz e segura.",
    paragraph25:
      "A Toxicologia Pardini oferece uma rede de mais de 4.500 postos de coleta especializados, pronto para atender qualquer demanda, até mesmo de forma online, possibilitando resultados rápidos e de completa rastreabilidade, recurso importante dada a capilaridade inerente ao setor aéreo.",

    subTitle12: "Software de sorteio",
    paragraph26:
      "A Norma da ANAC estabelece a obrigatoriedade de sorteios aleatórios entre os funcionários ARSO.",
    paragraph27:
      "A Toxicologia Pardini disponibiliza aos seus clientes o software de sorteio Randon 4.0 para gerenciamento e sorteio online, estritamente dentro das normas da ANAC; O software possibilita ao gestor do programa:",
    paragraph28_1: "Gestão dos funcionários ARSO;",
    paragraph28_2: "Controle dos sorteios;",
    paragraph28_3: "Realização de sorteios futuros automáticos;",
    paragraph28_4: "Testemunho e geração de atas do sorteio;",
    paragraph28_5:
      "Envio de emails automatizados para os sorteados e supervisores;",
    paragraph28_6: "Controle da localização de cada coleta, em qualquer lugar;",
    paragraph28_7:
      "Controle dos resultados, integrado ao nosso banco de dados em tempo real;",
    paragraph28_8: "Completo sigilo e proteção dos dados dos sorteados.",

    subTitle13: "Subprograma de resposta a evento impeditivo",
    paragraph29:
      "O profissional ARSO que tiver um resultado positivo ou se recusar ao exame toxicológico será afastado imediatamente de sua função e incluído no programa de resposta a eventos impeditivos que objetiva apoiar, recuperar e reinserir esse profissional em suas funções.",
    paragraph30:
      "Um profissional qualificado e capacitado para avaliar de maneira abrangente o individuo ARSO que tiver resultado positivo para o exame toxicológico fará as recomendações necessárias de orientação e possível tratamento.",
    paragraph31:
      "As ações a serem tomadas seguem a recomendação da RBAC 120 podem ser:",
    paragraph32_1:
      "Orientação sobre as normas e requisitos de segurança operacional da aviação civil;",
    paragraph32_2: "Aconselhamento terapêutico profissional;",
    paragraph32_3: "Psicoterapia;",
    paragraph32_4: "Farmacoterapia;",
    paragraph32_5: "Programa de Tratamento em regime ambulatorial;",
    paragraph32_6: "Programa de Tratamento em regime internação.",
  };

  return {
    props: {
      textos,
      textsPage,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default Implantacao;