// src/page/Appearance.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Btn,ToggleBtns } from '../components/Btn';
import { H1, H1Bold, H2, H2Bold } from '../components/Text';

const Wrapper = styled.div`
    padding: 6rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 2rem 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
  margin: 4rem 0;
`;



const Appearance = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const navigate = useNavigate();

  //선택 성별 서버로 보냄
  const handleGenderSelection = async (gender) => {
    setSelectedGender(gender);
    console.log(`Selected gender: ${gender}`);
        // Send gender to server
        try {
          const response = await fetch('http://localhost:5001/api/gender', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ gender }),
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
  };

  const handleNavigation = (path) => {
      if(!selectedGender){
      alert('성별을 선택하세요.');
      return;
      }
      navigate(path);
  };

  return (
    <Wrapper>
        <H1Bold content="STEP 1." />
        <H2Bold content="원하는 이상형의 외모는?" />
    <ContentWrapper>
        <H1 content="원하는 상대방의 성을 선택해주세요." />
        <ButtonGroup>
        <ToggleBtns
          text1="남"
          text2="여"
          value1="남자"
          value2="여자"
          upperHandle={handleGenderSelection}
        />
        </ButtonGroup>
        <H1 content="외모 조건을 입력할 때 원하는 모드를 골라주세요." />
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
