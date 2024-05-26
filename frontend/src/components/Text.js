import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledH1 = styled.div`
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-bottom: 1rem;

  @media (min-width: 1024px) {
    font-size: 4rem;
    font-weight: 900;
    padding-bottom: 2rem;
  }
`;

const StyledH2 = styled.div`
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 1.8rem 0;

  @media (min-width: 1024px) {
    font-size: 2rem;
    font-weight: 900;
    padding: 2rem 0;
  }
`;

const StyledP2 = styled.div`
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  padding: 1.8rem 0;

  @media (min-width: 1024px) {
    font-size: 1.8rem;
    font-weight: 600;
    padding: 1.8rem;
  }
`;

const StyledH1Bold = styled.div`
  font-size: 4.8rem;
  font-weight: 600;
  padding-bottom: 0.8rem;

  @media (min-width: 1024px) {
    font-size: 4.4rem;
    font-weight: 900;
    padding-bottom: 1.6rem;
  }
`;

const StyledP1 = styled.div`
  font-size: 1.8rem;
  font-weight: 200;
  padding-top: 1rem;

  @media (min-width: 1024px) {
    font-size: 2rem;
    font-weight: 500;
  }
`;

const Eng = styled.span`
  font-family: "Abril Fatface", "Nanum Square", serif;
  font-weight: 500;
`;

const H1 = ({ content }) => <StyledH1>{content}</StyledH1>;

const H2 = ({ content }) => (
  <StyledH2>
    <span>{content}</span>
  </StyledH2>
);

const P2 = ({ content }) => <StyledP2>{content}</StyledP2>;

const H1Bold = ({ content }) => (
  <StyledH1Bold>
    <Eng>{content}</Eng>
  </StyledH1Bold>
);

const H2Bold = ({ content }) => (
  <StyledH1>
    <Eng>{content}</Eng>
  </StyledH1>
);

const P1 = ({ content }) => (
  <StyledP1>
    <span>{content}</span>
  </StyledP1>
);

H1.propTypes = {
  content: PropTypes.string.isRequired,
};
H2.propTypes = {
  content: PropTypes.string.isRequired,
};
P2.propTypes = {
  content: PropTypes.string.isRequired,
};
H1Bold.propTypes = {
  content: PropTypes.string.isRequired,
};
P1.propTypes = {
  content: PropTypes.string.isRequired,
};
H2Bold.propTypes = {
  content: PropTypes.string.isRequired,
};

export { H1, H2, H1Bold, H2Bold, P1, P2};