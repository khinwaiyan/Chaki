import React, { useState } from 'react';
import { H1, H2 } from "../components/Text";
import { useNavigate } from "react-router-dom";
import { Btn, SendBtn } from "../components/Btn";
import styled from 'styled-components';

const MainBody = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 300px;
  margin: 5rem auto;

  @media (min-width: 1024px) {
    gap: 6rem;
    width: 70%;
    margin: 10rem auto;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (min-width: 1024px) {
    gap: 4.8rem;
  }
`;

const ButtonContainerWrapper = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 5px;
    height: 20px;

    @media (min-width: 1024px) {
      width: 1rem;
      height: 4rem;
    }
  }

  &::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 10px;
    background-clip: padding-box;
    border: 5px solid transparent;

    @media (min-width: 1024px) {
      border-radius: 2rem;
      border: 1rem solid transparent;
    }
  }

  &::-webkit-scrollbar-track {
    background: rgba(220, 20, 60, .1);
  }
`;

const ButtonContainer = ({ title, children }) => (
  <div>
    <H2 content={title} />
    <ButtonContainerWrapper>
      {children}
    </ButtonContainerWrapper>
  </div>
);

const Keyword = () => {
  const [selectedValues, setSelectedValues] = useState({
    faceshape: [],
    skin: [],
    eye: [],
    hair: [],
    etc: [],
  });

  const handleButtonClick = (key, value) => {
    setSelectedValues((current) => {
    });
  };

  const handleSendData = () => {
    
  };

  return (
    <MainBody>
      <div>
        <H1 content="원하는 상대방의 외모 조건들을 골라주세요." />
      </div>
      <ButtonWrap>
        <ButtonContainer title="얼굴형">
          <Btn text="동근형" title="faceshape" onClickFunction={() => handleButtonClick('faceshape', '동근형')} />
          <Btn text="계란형" title="faceshape" onClickFunction={() => handleButtonClick('faceshape', '계란형')} />
          <Btn text="긴형" title="faceshape" onClickFunction={() => handleButtonClick('faceshape', '긴형')} />
        </ButtonContainer>
        <ButtonContainer title="피부색">
          <Btn text="밝은피부" title="skin" onClickFunction={() => handleButtonClick('skin', '밝은피부')} />
          <Btn text="올리브피부" title="skin" onClickFunction={() => handleButtonClick('skin', '올리브피부')} />
        </ButtonContainer>
        <ButtonContainer title="눈">
          <Btn text="동그란눈" title="eye" onClickFunction={() => handleButtonClick('eye', '동그란눈')} />
          <Btn text="무쌍" title="eye" onClickFunction={() => handleButtonClick('eye', '무쌍')} />
        </ButtonContainer>
        <ButtonContainer title="헤어">
          <Btn text="단발" title="hair" onClickFunction={() => handleButtonClick('hair', '단발')} />
          <Btn text="긴머리" title="hair" onClickFunction={() => handleButtonClick('hair', '긴머리')} />
          <Btn text="중단발" title="hair" onClickFunction={() => handleButtonClick('hair', '중단발')} />
          <Btn text="짧은머리," title="hair" onClickFunction={() => handleButtonClick('hair', '짧은머리')} />
        </ButtonContainer>
        <ButtonContainer title="기타">
            <Btn text="타투 있음" title="etc" onClickFunction={() => handleButtonClick('etc', '타투 있음')} />
            <Btn text="피어싱 있음" title="etc" onClickFunction={() => handleButtonClick('etc', '피어싱 있음')} />
            <Btn text="안경 있음" title="etc" onClickFunction={() => handleButtonClick('etc', '안경 있음')} />
        </ButtonContainer>
      </ButtonWrap>
      <SendBtn text="선택 완료" onClickFunction={handleSendData} />
    </MainBody>
  );
};

export default Keyword;
