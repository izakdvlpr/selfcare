import styled from "styled-components";

export const Banner = styled.div`
  height: 300px;   
  
  background: url('banner.png') no-repeat center;
  background-size: cover; 
  
  @media (max-width: 425px)  {
    height: 200px;
  }
`;

export const Detail = styled.div`
  height: 70px;

  padding: 0 35px;    
  
  display: flex;
  align-items: center;
  justify-content: space-between;    
  
  > strong {    
    text-transform: uppercase;
  }
`;