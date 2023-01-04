import Head from "next/head";

import { Text, Box, Link, Flex } from "@chakra-ui/react";

export const Norma = () => {
  return (
    <>
      <Head>
        <title>Norma RBAC120 explicada</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

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
            Norma ANAC RBAC 120 explicada
          </Text>
          <Text color={"gray.400"} alignSelf="flex-end" fontSize={"sm"}>
            <Link href="">Início</Link> / <Link href="">Norma</Link> / Norma
            ANAC RBAC 120 explicada
          </Text>
        </Flex>

        <Box my={16}>
          <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
            A ANAC, visando aumentar a segurança da aviação civil brasileira e
            adequar a atividade às recomendações internacionais, instituiu a
            RBAC 120, que estabelece a adoção obrigatória de um Programa de
            Prevenção ao Uso Indevido de Substâncias Psicoativas na Aviação
            Civil. Seus objetivos são:
          </Text>
          <Text color={"primary.500"} fontSize={["xl", "2xl"]} my={4} mt={8}>
            Para o Sistema de Aviação Civil:
          </Text>
          <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
            <ul>
              <li>Aumento dos níveis reais de segurança operacional;</li>
              <li>
                Adequação às recomendações de agências internacionais as quais
                somos signatários
              </li>
            </ul>
          </Text>
          <Text color={"primary.500"} fontSize={["xl", "2xl"]} mt={8}>
            Para as empresas:
          </Text>
          <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
            <ul>
              <li>Redução de níveis de absenteísmo e do turnover;</li>
              <li>Aumento na produtividade;</li>
              <li>Redução dos custos associados com a saúde dos empregados;</li>
              <li>
                Melhores condições para celebração de contratos com empresas
                estrangeiras e multinacionais;
              </li>
              <li>Gestão da imagem da empresa no mercado e na comunidade.</li>
            </ul>
          </Text>
          <Text color={"primary.500"} fontSize={["xl", "2xl"]} my={4} mt={8}>
            Para o profissional:
          </Text>
          <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
            <ul>
              <li>
                Benefícios diretos para a saúde, oportunidade para reflexão e
                mudança de estilo de vida;
              </li>
              <li>
                Acesso a informações adequadas e de qualidade sobre o uso de
                substâncias psicoativas, suas consequências e possibilidade de
                busca de apoio profissional, quando necessário.
              </li>
            </ul>
          </Text>
          <Text color={"primary.500"} fontSize={["xl", "2xl"]} my={4} mt={8}>
            Empresas que devem adotar a Norma ANAC RBAC 120
          </Text>
          <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
            <ul>
              <li>
                Serviços públicos especializados e infraestrutura aeroportuária;
              </li>
              <li>Detentoras do RBAC 145 e 139;</li>
              <li>Transportes aéreos e serviços especializados;</li>
              <li>Despachantes operacionais de voo;</li>
              <li>Combate a incêndios nos aeroportos;</li>
              <li>Segurança aeroportuária e Raio X;</li>
              <li>Que desempenhem atividade com acesso ao aeródromo;</li>
              <li>
                Que realizam manutenção preventiva e corretiva de aeronaves;
              </li>
              <li>
                Transporte, carga e descarga de bagagens e operação de trolleys;
              </li>
              <li>Outras empresas e organizações.</li>
            </ul>
          </Text>
          <Text color={"primary.500"} fontSize={["xl", "2xl"]} my={4} mt={8}>
            Definição de ARSO
          </Text>
          <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
            O Programa de Prevenção do Uso Indevido de Substâncias Psicoativas
            na Aviação Civil se aplica a qualquer pessoa que desempenhe
            atividade de risco a segurança operacional na aviação civil ou ARSO.
          </Text>
          <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
            Diante do RBAC 120 são considerados profissionais ARSO, qualquer um
            que realiza atividades na área restrita de segurança do aeródromo e
            também os responsáveis pelo cálculo das posições de carga, bagagem,
            passageiros e combustível, que atuam na manutenção preventiva e de
            modificações, carga e descarga do veículo de bagagem, agentes de
            segurança e operadores de raio- X, membros da tripulação, etc.
          </Text>
          <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={3}>
            <Link color="secondary.500" fontWeight="normal" href="/">
              Consulte-nos em caso de dúvidas.
            </Link>
          </Text>
          <Text color={"primary.500"} fontSize={["xl", "2xl"]} my={4} mt={8}>
            O RBAC 120 estabelece a obrigatoriedade da implementação até:
          </Text>
          <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
            <ul>
              <li>JUNHO / 2012:</li>
              <li>
                Programa de Prevenção ao Abuso de Substâncias Psicoativas
                formalizado junto à ANAC;
              </li>
              <li>
                Educação e treinamento dos funcionários envolvidos com áreas de
                risco (ARSO).
              </li>
              <li>JUNHO / 2013:</li>
              <li>
                Prazo limite para o início dos exames toxicológicos
                admissionais;
              </li>
              <li>
                Prazo limite para o início dos exames toxicológicos por
                amostragem;
              </li>
              <li>
                Os exames toxicológicos devem atender às normas técnicas
                exigidas pela ANAC.
              </li>
            </ul>
          </Text>
          <Text color={"primary.500"} fontSize={["xl", "2xl"]} my={4} mt={8}>
            Momentos de aplicação de exames toxicológicos ou ETSP
          </Text>

          <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
            Esse programa determina a aplicação de exames toxicológicos em
            momentos distintos:
          </Text>

          <Text color={"#000"} fontSize={["md"]} textAlign="justify" my={4}>
            <ul>
              <li>
                ETSP prévio: A ser aplicado antes da contratação ou designação
                para atividades de risco; Para esse caso é recomendável a adoção
                de exames toxicológicos de cabelo pela sua grande janela de
                detecção e eficiência nos processos admissionais;
              </li>
              <li>
                ETSP aleatórios: A serem aplicados randomicamente, com número
                definido pela norma;
              </li>
              <li>
                ETSP pós acidente: Para verificação do consumo de substâncias
                psicoativas após situações anormais;
              </li>
              <li>
                ETSP de suspeita: A ser aplicado no caso de suspeita do abuso de
                substâncias psicoativas pelo Supervisor treinado;
              </li>
              <li>
                ETSP de retorno ou acompanhamento: Usado para acompanhamento e
                reinserção de ARSO vindos de evento impeditivo.
              </li>
            </ul>
          </Text>
        </Box>
      </Box>
    </>
  );
};
