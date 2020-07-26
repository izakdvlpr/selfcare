import React from "react";

import { Content, Image, Price } from "./styles";

interface Item {
  data: {
    id?: number;
    image_uri?: string;
    description?: string;
    price?: number | any;
  };
}

const ItemComponent: React.FC<Item> = ({
  data: { image_uri, description, price },
}) => (
  <Content>
    <Image src={image_uri} alt="item" />
    <strong>{description}</strong>
    <Price>
      {Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price)}
    </Price>
  </Content>
);

export default ItemComponent;
