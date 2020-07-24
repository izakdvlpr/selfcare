import React from "react";
import Layout from "@layout";

import { Container, Banner } from "@styles/home";

const HomePage = () => {
  return (
    <Layout>
      <Container>
        <Banner src="/banner.png" alt="banner" />
      </Container>
    </Layout>
  );
};

export default HomePage;
