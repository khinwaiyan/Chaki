// src/page/Appearance.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Btn,ToggleBtns } from '../components/Btn';
import { H1, H2, H2Bold } from '../components/Text';

const Wrapper = styled.div`
    padding: 6rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
`;



const Appearance = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const navigate = useNavigate();


  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
    console.log(`Selected gender: ${gender}`);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Wrapper>
        <H2Bold content="STEP 1." />
        <H1 content="원하는 이상형의 외모는?" />
    <ContentWrapper>
        <H2 content="원하는 상대의 성을 골라주세요." />
        <ButtonGroup>
        <ToggleBtns
          text1="남"
          text2="여"
          value1="male"
          value2="female"
          upperHandle={handleGenderSelection}
        />
        </ButtonGroup>
        <H2 content="외모 조건을 입력할 때 원하는 모드를 골라주세요." />
        <ButtonGroup>
          <Btn 
            text="텍스트로 작성" 
            onClickColor="var(--secondary-color)" 
            originalColor="var(--primary-color)" 
            onClickFunction={() => handleNavigation('/textinput')} 
          />
          <Btn 
            text="키워드로 고르기" 
            onClickColor="var(--secondary-color)" 
            originalColor="var(--primary-color)" 
            onClickFunction={() => handleNavigation('/keyword')}
          />   
        </ButtonGroup>
    </ContentWrapper>
    </Wrapper>
  );
};

export default Appearance;
