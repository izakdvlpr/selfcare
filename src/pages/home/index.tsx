import React from "react";
import Layout from "@layout";

import List from "@components/List";

import { Banner, Detail } from "./styles";

const HomePage = () => (
  <Layout>
    <Banner />
    <Detail>
      <strong>Promoção</strong>
      <span>9 produtos</span>
    </Detail>
    <List />
  </Layout>
);

export default HomePage;
