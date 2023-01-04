import { useMemo } from "react";

export const useCertificates = () => {
  const pathCertificates = "/certificates/";
  const certificates = useMemo(
    () => [
      {
        id: "ilac",
        path: pathCertificates + "certificado_ilaq.png",
        alt: "Certificado ILAC",
        width: "120px",
        height: "72px",
      },
      {
        id: "sbpcml",
        path: pathCertificates + "certificado_sbpc_ml.png",
        alt: "Certificado SBPC/ML",
        width: "120px",
        height: "72px",
      },
      {
        id: "dicq",
        path: pathCertificates + "certificado_dicq.png",
        alt: "Certificado DICQ",
        width: "120px",
        height: "72px",
      },
      {
        id: "iso17025",
        path: pathCertificates + "certificado_iso_17025.png",
        alt: "Certificado ISO 17025",
        width: "120px",
        height: "72px",
      },
    ],
    []
  );

  return {
    certificates,
  };
};
