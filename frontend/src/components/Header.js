import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg); 
  text-align: center;
  height: 80px;
`;

const Logo = styled.div`
  font-weight: bold;
  color: var(--pink);
  font-size: 1.5em;
  @media (min-width: 1024px) {
    font-size: 2em;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo>
        Chaki
      </Logo>
    </StyledHeader>
  );
};

export { Header };
