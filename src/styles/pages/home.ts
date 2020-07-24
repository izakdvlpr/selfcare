import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 100px - 270px);

  @media (max-width: 768px) {
    height: calc(100vh - 100px - 390px);
  }
`;
