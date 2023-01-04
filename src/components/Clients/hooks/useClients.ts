import { useMemo } from "react";

export const useClients = () => {
  const pathClients = "/clients/";
  const clients = useMemo(
    () => [
      {
        id: "Azul",
        name: "Azul - Linhas Aéreas Brasileiras",
        path: pathClients + "cliente_azul.gif",
        width: "100px",
        height: "100px",
      },
      {
        id: "Colt",
        name: "Colt Aviation",
        path: pathClients + "cliente_colt.gif",
        width: "100px",
        height: "100px",
      },
      {
        id: "Falcon",
        name: "Dassault - Falcon Jet",
        path: pathClients + "cliente_falcon.gif",
        width: "100px",
        height: "100px",
      },
      {
        id: "Flex",
        name: "Flex Aero - Táxi Aéreo",
        path: pathClients + "cliente_flex.gif",
        width: "100px",
        height: "100px",
      },
      {
        id: "Global",
        name: "Global Aviation",
        path: pathClients + "cliente_global.gif",
        width: "100px",
        height: "100px",
      },
      {
        id: "Helibarra",
        name: "Helibarra - Táxi Aéreo",
        path: pathClients + "cliente_helibarra.gif",
        width: "100px",
        height: "100px",
      },
      {
        id: "Morro",
        name: "Morro Vermelho",
        path: pathClients + "cliente_morro.gif",
        width: "100px",
        height: "100px",
      },
      {
        id: "Navistar",
        name: "Navistar",
        path: pathClients + "cliente_navistar.gif",
        width: "100px",
        height: "100px",
      },
      {
        id: "Passaredo",
        name: "Passaredo",
        path: pathClients + "cliente_passaredo.gif",
        width: "100px",
        height: "100px",
      },
      {
        id: "QLA",
        name: "QLA - Quick Link Aviation",
        path: pathClients + "cliente_quick.gif",
        width: "100px",
        height: "100px",
      },
      {
        id: "RIO",
        name: "RIO",
        path: pathClients + "cliente_rio.gif",
        width: "100px",
        height: "100px",
      },
      {
        id: "RP",
        name: "RP - Atividades auxiliares ao transporte aéreo ltda.",
        path: pathClients + "cliente_rp.gif",
        width: "100px",
        height: "100px",
      },
      {
        id: "Sagres",
        name: "Sagres - Táxi Aéreo",
        path: pathClients + "cliente_sagres.gif",
        width: "100px",
        height: "100px",
      },
      {
        id: "Senior",
        name: "Senior - Táxi Aéreo",
        path: pathClients + "cliente_senior.gif",
        width: "100px",
        height: "100px",
      },
      {
        id: "Sideral",
        name: "Sideral - Air Cargo",
        path: pathClients + "cliente_sideral.gif",
        width: "100px",
        height: "100px",
      },
      {
        id: "Swissport",
        name: "Swissport",
        path: pathClients + "cliente_swissport.gif",
        width: "100px",
        height: "100px",
      },
      {
        id: "Total",
        name: "Total - Linhas aéreas",
        path: pathClients + "cliente_total.gif",
        width: "100px",
        height: "100px",
      },
      {
        id: "Trip",
        name: "Trip - Linhas aéreas",
        path: pathClients + "cliente_trip.gif",
        width: "100px",
        height: "100px",
      },
      {
        id: "Weston",
        name: "Weston - Sua companhia aérea particular",
        path: pathClients + "cliente_weston.gif",
        width: "100px",
        height: "100px",
      },
      {
        id: "LSG",
        name: "LSG - Sky Chefs",
        path: pathClients + "cliente_sky.gif",
        width: "100px",
        height: "100px",
      },
      {
        id: "Vera Cruz",
        name: "Vera Cruz - Táxi Aéreo",
        path: pathClients + "cliente_vera.gif",
        width: "100px",
        height: "100px",
      },
    ],
    []
  );

  return {
    clients,
  };
};
