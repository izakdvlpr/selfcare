import styled from "styled-components";

import { AiFillStar } from "react-icons/ai";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

import colors from "@styles/colors";

export const Container = styled.nav`
  height: 100px;

  padding: 0 35px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 320px) {
    padding: 0 15px;
  }
`;

export const Logo = styled.h2`
  display: flex;
  align-items: center;

  @media (max-width: 320px) {
    font-size: 20px;
  }
`;

export const StarIcon = styled(AiFillStar)`
  height: 30px;
  width: 30px;

  margin-right: 5px;

  @media (max-width: 320px) {
    height: 20px;
    width: 20px;
  }
`;

export const SearchIcon = styled(FiSearch)`
  height: 30px;
  width: 30px;

  margin: 0 10px;

  color: ${colors.primary};

  cursor: pointer;

  @media (max-width: 320px) {
    height: 20px;
    width: 20px;
  }
`;

export const UserIcon = styled(FiUser)`
  height: 30px;
  width: 30px;

  margin: 0 10px;

  color: ${colors.primary};

  cursor: pointer;

  @media (max-width: 320px) {
    height: 20px;
    width: 20px;
  }
`;

export const CartIcon = styled(FiShoppingCart)`
  height: 30px;
  width: 30px;

  margin: 0 10px;

  color: ${colors.primary};

  cursor: pointer;

  @media (max-width: 320px) {
    height: 20px;
    width: 20px;
  }
`;
