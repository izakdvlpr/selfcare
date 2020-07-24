import React from "react";

import {
  Container,
  List,
  SignUp,
  SubContainer,
  InstagramIcon,
  FacebookIcon,
} from "./styles";

const FooterComponent: React.FC = () => (
  <footer>
    <Container>
      <List>
        <strong>Contato</strong>
        <strong>Termos de serviço</strong>
        <strong>Política de privacidade</strong>
        <strong>Cancelamento, troca reembolso</strong>
      </List>
      <SignUp>
        <h4>Newsletter</h4>
        <div>
          <input type="text" placeholder="Digite seu melhor e-mail" />
          <button>Inscrever</button>
        </div>
      </SignUp>
    </Container>
    <SubContainer>
      <InstagramIcon />
      <FacebookIcon />
    </SubContainer>
  </footer>
);

export default FooterComponent;
