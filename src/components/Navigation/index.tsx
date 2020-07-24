import React from "react";
import Link from "next/link";

import {
  Container,
  Logo,
  StarIcon,
  SearchIcon,
  UserIcon,
  CartIcon,
} from "./styles";

const NavigationComponent: React.FC = () => (
  <Container>
    <Logo>
      <StarIcon />
      selfcare
    </Logo>
    <div>
      <Link href="/" passHref>
        <SearchIcon />
      </Link>
      <Link href="/" passHref>
        <UserIcon />
      </Link>
      <Link href="/" passHref>
        <CartIcon />
      </Link>
    </div>
  </Container>
);

export default NavigationComponent;
