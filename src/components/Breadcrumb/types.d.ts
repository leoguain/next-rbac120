export type BreadcrumbProps = {
  //breadcrumbItems: Array<BreadcrumbItemProps>;
  url: string;
  oldSeparator: string;
  newSeparator: string;
};

export type BreadcrumbItemProps = {
  url: string;
  name: string;
  index?: number;
  isLast?: boolean;
};
