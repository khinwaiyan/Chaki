import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { H1, H2, H2Bold } from '../components/Text';
import { BtnWithBody, SendBtn } from '../components/Btn';

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
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  padding-bottom: 2rem;
  justify-content: center;
  box-sizing: border-box;

  & > button {
    flex: 1 1 30%; /* ensures 3 buttons in one row */
    max-width: 30%; /* ensures 3 buttons in one row */
  }

  @media (max-width: 768px) {
    & > button {
        flex: 1 1 45%; /* ensures 2 buttons in one row */
        max-width: 45%;
      }
  }

  @media (max-width: 480px) {
    
        & > button {
            flex: 1 1 100%; /* ensures 1 button per row */
            max-width: 100%; /* ensures 1 button per row */
          }
    
  }
`;


export default function LoveLanguage() {
    const [selectLanguage, setSelectLanguage] = useState(null);
    const [selectLanguageDescription, setSelectLanguageDescription] = useState(null);
    const navigate = useNavigate();

    const handleLanguageSelection = (language, description) => {
        setSelectLanguage(language);
        setSelectLanguageDescription(description);
        console.log(`Selected language: ${language} - ${description}`);
    }

    // const handleNavigation = (path) => {
    //     navigate(path);
    // };

    const handleSendData = () => {
        console.log(`Selected language: ${selectLanguage}`);
        if (selectLanguage === null) {
            alert("사랑의 언어를 선택해주세요.");
            return;
        }

        navigate('/generate', { state: { 'language': selectLanguage, 'description': selectLanguageDescription } });

    };


    return (
        <Wrapper>
            <H2Bold content="STEP 2." />
            <H1 content="원하는 이상형의 연애 성향는?" />
            <ContentWrapper>
                <H2 content="사랑의 다섯 가지 언어 중에서 상대방에게 바라는 것을 선택해 주세요." />
                <ButtonGroup>
                    <BtnWithBody title="봉사" text="상대방을 위해 무언가를 도와줌으로써 사랑을 나타낸다." onClick={handleLanguageSelection} isSelected={selectLanguage === '봉사'} />
                    <BtnWithBody title="선물" text="작은 선물이나 기념품을 주고받으며 사랑을 표현한다." onClick={handleLanguageSelection} isSelected={selectLanguage === '선물'} />
                    <BtnWithBody title="스킨십" text="포옹, 손잡기 등 신체적 접촉을 통해 애정을 표현한다." onClick={handleLanguageSelection} isSelected={selectLanguage === '스킨십'} />
                    <BtnWithBody title="인정하는 말" text="상대방에게 칭찬이나 긍정적인 말을 통해 사랑을 표현한다." onClick={handleLanguageSelection} isSelected={selectLanguage === '인정하는 말'} />
                    <BtnWithBody title="함께하는 시간" text="질적으로 높은 시간을 함께 보내는 것을 중시한다." onClick={handleLanguageSelection} isSelected={selectLanguage === "함께하는 시간"} />
                </ButtonGroup>
                <SendBtn text="선택 완료" onClickFunction={handleSendData} />
            </ContentWrapper>
        </Wrapper>
    )
}