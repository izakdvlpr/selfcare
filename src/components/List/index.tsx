import React from "react";

import Item from "@components/Item";

import ItemsArray from "@data/items";

import { Container } from "./styles";

const ListComponent: React.FC = () => (
  <Container>
    {ItemsArray.map((item) => (
      <Item key={item.id} data={item} />
    ))}
  </Container>
);

export default ListComponent;
