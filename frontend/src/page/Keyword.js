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
  flex-wrap: nowrap; 

`;
const StyledButton = styled(Btn)`
  flex: 1 1 auto;
  min-width: 0; 
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
  let reReq = false;
  
  const [selectedValues, setSelectedValues] = useState({
    얼굴형: [],
    피부색: [],
    눈: [],
    헤어: [],
    기타: [],
  });
  
  const title = "외모 조건";
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  const handleButtonClick = (key, value) => {
    setSelectedValues((current) => {
      const newValues = { ...current };
      if (newValues[key].includes(value)) {
        newValues[key] = newValues[key].filter((item) => item !== value);
      } else {
        newValues[key].push(value);
      }
      return newValues;
    });
  };

  const handleSendData = async ()  => {
    const description = Object.entries(selectedValues)
      .map(([key, values]) => `${key}: ${values.join(', ')}`)
      .join('; ');

    const dataToSend = `${title}: ${description}`;

    if(!reReq){
      try {
        reReq = true;
        const response = await fetch('http://localhost:5001/api/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data: dataToSend }),
        });
  
        const data = await response.json();
       
        if (data.imageUrl) {
          setImageUrl(data.imageUrl);
          navigate('/lovelanguage');
        }
      } catch (error) {
        console.error('Error sending data:', error);
      }
    } 
  };

  return (
    <MainBody>
      <div>
        <H1 content="원하는 상대방의 외모 조건들을 골라주세요." />
      </div>
      <ButtonWrap>
        <ButtonContainer title="얼굴형">
          <Btn
            text="동근형"
            title="얼굴형"
            isSelected={selectedValues.얼굴형.includes('동근형')}
            onClickFunction={() => handleButtonClick('얼굴형', '동근형')}
          />
          <Btn
            text="계란형"
            title="얼굴형"
            isSelected={selectedValues.얼굴형.includes('계란형')}
            onClickFunction={() => handleButtonClick('얼굴형', '계란형')}
          />
          <Btn
            text="긴형"
            title="얼굴형"
            isSelected={selectedValues.얼굴형.includes('긴형')}
            onClickFunction={() => handleButtonClick('얼굴형', '긴형')}
          />
        </ButtonContainer>
        <ButtonContainer title="피부색">
          <Btn
            text="밝은피부"
            title="피부색"
            isSelected={selectedValues.피부색.includes('밝은피부')}
            onClickFunction={() => handleButtonClick('피부색', '밝은피부')}
          />
          <Btn
            text="올리브피부"
            title="피부색"
            isSelected={selectedValues.피부색.includes('올리브피부')}
            onClickFunction={() => handleButtonClick('피부색', '올리브피부')}
          />
        </ButtonContainer>
        <ButtonContainer title="눈">
          <Btn
            text="동그란눈"
            title="눈"
            isSelected={selectedValues.눈.includes('동그란눈')}
            onClickFunction={() => handleButtonClick('눈', '동그란눈')}
          />
          <Btn
            text="무쌍"
            title="눈"
            isSelected={selectedValues.눈.includes('무쌍')}
            onClickFunction={() => handleButtonClick('눈', '무쌍')}
          />
        </ButtonContainer>
        <ButtonContainer title="헤어">
          <Btn
            text="단발"
            title="헤어"
            isSelected={selectedValues.헤어.includes('단발')}
            onClickFunction={() => handleButtonClick('헤어', '단발')}
          />
          <Btn
            text="긴머리"
            title="헤어"
            isSelected={selectedValues.헤어.includes('긴머리')}
            onClickFunction={() => handleButtonClick('헤어', '긴머리')}
          />
          <Btn
            text="중단발"
            title="헤어"
            isSelected={selectedValues.헤어.includes('중단발')}
            onClickFunction={() => handleButtonClick('헤어', '중단발')}
          />
          <Btn
            text="짧은머리"
            title="헤어"
            isSelected={selectedValues.헤어.includes('짧은머리')}
            onClickFunction={() => handleButtonClick('헤어', '짧은머리')}
          />
        </ButtonContainer>
        <ButtonContainer title="기타">
          <Btn
            text="타투 있음"
            title="기타"
            isSelected={selectedValues.기타.includes('타투 있음')}
            onClickFunction={() => handleButtonClick('기타', '타투 있음')}
          />
          <Btn
            text="피어싱 있음"
            title="기타"
            isSelected={selectedValues.기타.includes('피어싱 있음')}
            onClickFunction={() => handleButtonClick('기타', '피어싱 있음')}
          />
          <Btn
            text="안경 있음"
            title="기타"
            isSelected={selectedValues.기타.includes('안경 있음')}
            onClickFunction={() => handleButtonClick('기타', '안경 있음')}
          />
        </ButtonContainer>
      </ButtonWrap>
      <SendBtn text="선택 완료" onClickFunction={handleSendData} />
    </MainBody>
  );
};

export default Keyword;
