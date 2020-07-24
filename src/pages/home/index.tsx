import React from "react";
import Layout from "@layout";

import List from "@components/List";

import { Container, Banner, Detail } from "@styles/home";

const HomePage = () => {
  return (
    <Layout>
      <Container>
        <Banner src="/banner.png" alt="banner" />
        <Detail>
          <strong>Promoção</strong>
          <span>9 produtos</span>
        </Detail>
        <List />
      </Container>
    </Layout>
  );
};

export default HomePage;
