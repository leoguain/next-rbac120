export type TextsProps = {
  text: itemsProps[];
};

export type TextProps = {
  id: string;
  type: string;
  text?: string;
  texts?: ListItemProps[];
  path?: string;

  content?: TextProps[];
};

export type ListProps = {
  list: ListItemProps[];
};

export type ListItemProps = {
  id: string;
  type: string;
  text: string;
};
