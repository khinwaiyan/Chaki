import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledBtn = styled.button`
  border: 0.2rem solid #000;
  box-shadow: -0.6rem 0.6rem 0rem 0rem var(--shadow);
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s; 
  margin: 1rem;
  flex-shrink: 0;
  font-family: 'NanumSquare', sans-serif;
  font-size: 1.2rem;
  background-color: ${(props) => (props.isClicked ? 'var(--secondary-color)' : 'var(--primary-color)')};
  ${(props) =>
    props.isClicked &&
    css`
      box-shadow: -0.2rem 0.2rem 0rem 0rem var(--shadow);
      transform: translateY(0.4rem) translateX(-0.4rem); 
    `}
  @media (min-width: 1024px) {
    font-size: 3.2rem;
    border: 0.4rem solid #000;
    box-shadow: -1.2rem 1.2rem 0rem 0rem var(--shadow);
    ${(props) =>
      props.isClicked &&
      css`
        box-shadow: -0.4rem 0.4rem 0rem 0rem var(--shadow);
        transform: translateY(0.8rem) translateX(-0.8rem); 
      `}
  }
`;

const BtnText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;
  gap: 1rem;
  font-size: 1.2rem;
  font-weight: 800;
  @media (min-width: 1024px) {
    padding: 2rem;
    gap: 2rem;
    font-size: 2rem;
    font-weight: 900;
  }
`;
const ToggleBtnsGroup = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const Btn = ({
  text,
  onClickColor = 'var(--secondary-color)',
  originalColor = 'var(--primary-color)',
  onClickFunction,
  title = "",
  defaultClick = false,
}) => {
  const [isClicked, setIsClicked] = useState(defaultClick);

  const handleClick = () => {
      setIsClicked((current) => !current);
      if (onClickFunction) {
        onClickFunction(title, text);
      }
  };

  const buttonStyle = {
    backgroundColor: isClicked ? onClickColor : originalColor,
  };

  return (
    <StyledBtn
      onClick={handleClick}
      style={buttonStyle}
      isClicked={isClicked}
    >
      <BtnText>{text}</BtnText>
    </StyledBtn>
  );
};

const SendBtn = ({ text, originalColor = 'var(--pink)', onClickFunction }) => {
  const buttonStyle = {
    backgroundColor: originalColor,
  };

  return (
    <StyledBtn onClick={onClickFunction} style={buttonStyle}>
      <BtnText>{text}</BtnText>
    </StyledBtn>
  );
};

const ToggleBtns = ({ text1, text2, value1, value2, upperHandle } ) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const handleClick = (value) => {
    setSelectedValue(value);
    upperHandle(value);
  };

  return (
    <ToggleBtnsGroup>
      <StyledBtn
        isClicked={selectedValue === value1}
        onClick={() => handleClick(value1)}
      >
        <BtnText>{text1}</BtnText>
      </StyledBtn>
      <StyledBtn
        isClicked={selectedValue === value2}
        onClick={() => handleClick(value2)}
      >
        <BtnText>{text2}</BtnText>
      </StyledBtn>
    </ToggleBtnsGroup>
  );
};



Btn.propTypes = {
  text: PropTypes.string.isRequired,
  onClickColor: PropTypes.string,
  originalColor: PropTypes.string,
  onClickFunction: PropTypes.func,
  title: PropTypes.string,
  defaultClick: PropTypes.bool,
};

export { Btn, SendBtn, ToggleBtns };
