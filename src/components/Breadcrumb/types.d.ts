export type BreadcrumbProps = {
  breadcrumbItems: Array<BreadcrumbItemProps>;
};

export type BreadcrumbItemProps = {
  url: string;
  name: string;
  index?: number;
  isLast?: boolean;
};
