import styled from "styled-components";

import { lighten } from "polished";

import { FiInstagram, FiFacebook } from "react-icons/fi";

import colors from "@styles/colors";

export const Container = styled.div`
  height: 180px;

  padding: 0 55px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid ${lighten(0.9, colors.black)};

  background-color: ${colors.quaternary};

  @media (max-width: 768px) {
    height: 300px;

    padding: 15px;

    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    padding: 3px 0;
  }

  @media (max-width: 768px) {
    width: 400px;
  }

  @media (max-width: 435px) {
    width: 350px;
  }

  @media (max-width: 375px) {
    width: 300px;
  }

  @media (max-width: 320px) {
    width: 280px;
  }
`;

export const SignUp = styled.div`
  height: 100px;

  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  > div {
    margin-top: 15px;

    display: flex;
    align-items: left;
    justify-content: center;

    input {
      height: 40px;
      width: 250px;

      padding: 0 10px;

      border: 1px solid ${lighten(0.9, colors.black)};
      outline: 0;

      background-color: ${colors.white};
    }

    button {
      height: 40px;
      width: 150px;

      border: 0;
      outline: 0;

      font-size: 16px;
      font-weight: 700;

      color: ${colors.white};

      cursor: pointer;

      background-color: ${colors.primary};

      transition: opacity 200ms;

      &:hover {
        opacity: 0.9;
        transform: scale(1.03);
      }
    }

    @media (max-width: 425px) {
      flex-direction: column;

      > input,
      > button {
        width: 350px;
      }

      > button {
        margin-top: 15px;
      }
    }

    @media (max-width: 375px) {
      flex-direction: column;

      > input,
      > button {
        width: 300px;
      }

      > button {
        margin-top: 15px;
      }
    }

    @media (max-width: 320px) {
      flex-direction: column;

      > input,
      > button {
        width: 280px;
      }

      > button {
        margin-top: 15px;
      }
    }
  }

  @media (max-width: 435px) {
    margin-top: 25px;
  }
`;

export const SubContainer = styled.div`
  height: 90px;

  margin: 0 35px;

  display: flex;
  align-items: center;
  justify-content: left;
`;

export const InstagramIcon = styled(FiInstagram)`
  height: 30px;
  width: 30px;

  margin-right: 5px;

  color: ${colors.primary};

  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 320px) {
    height: 20px;
    width: 20px;
  }
`;

export const FacebookIcon = styled(FiFacebook)`
  height: 30px;
  width: 30px;

  margin-right: 5px;

  color: ${colors.primary};

  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 320px) {
    height: 20px;
    width: 20px;
  }
`;
