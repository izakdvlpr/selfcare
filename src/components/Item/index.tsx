import React from "react";

import { Content, Image, Description, Price } from "./styles";

interface Item {
  data: {
    id?: number;
    image_uri?: string;
    description?: string;
    price?: number; 
  }
}

const ItemComponent: React.FC<Item> = ({ data }) => (
  <Content>
    <Image src={data.image_uri} alt="item" />
    <Description>{data.description}</Description>
    <Price>{data.price}</Price>
  </Content>
);

export default ItemComponent;
