export type CertificatesProps = {
  certificates: CertificateProps[];
};

export type CertificateProps = {
  id: string;
  path: string;
  alt: string;
  width: string;
  height: string;
};
