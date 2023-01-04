export type TextsProps = {
  text: itemsProps[];
};

export type TextProps = {
  id: string;
  type: string;
  text?: string;
  texts?: ListItemProps[];
};

export type ListProps = {
  list: ListItemProps[];
};

export type ListItemProps = {
  id: string;
  type: string;
  text: string;
};
