import styled from "styled-components";

import colors from "@styles/colors";

export const Content = styled.div`
  margin: 2rem;

  display: flex;
  flex-direction: column;    
  
  &:hover {    
    transform: scale(1.03);
  }
`;

export const Image = styled.img`
  height: 250px;
  width: 250px;    
  
  margin: 10px 0;    
  
  border-radius: 10px;    
`;

export const Price = styled.span`
  margin-top: 10px;

  font-weight: 700;

  color: ${colors.primary};
`;
