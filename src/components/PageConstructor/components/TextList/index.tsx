import React from "react";
import { HiChevronRight } from "react-icons/hi";

import { Box, List, ListItem, ListIcon } from "@chakra-ui/react";

import { ListProps } from "../../types";

export const TextList = ({ list }: ListProps) => {
  return (
    <Box>
      <List>
        {list.map(({ id, type, text }) => (
          <React.Fragment key={id}>
            <ListItem>
              <ListIcon as={HiChevronRight} />
              {text}
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};
