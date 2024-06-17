import React, { useState } from 'react';
import { H1, H1Bold, H2, H2Bold, P1, P2 } from "../components/Text";
import { useNavigate } from "react-router-dom";
import { Btn, SendBtn } from "../components/Btn";
import styled from 'styled-components';
import loadingGif from '../assets/loading.gif'; 


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
  flex-wrap: nowrap;
  gap: 1rem;
`;

const StyledButton = styled(Btn)`
  flex: 1 1 auto;
  min-width: 0;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoadingGif = styled.img`
  display: block;
  margin: 2rem auto;
  width: 60vh; 
  height: 60vh; 
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
  let rereq = false;
  const [selectedValues, setSelectedValues] = useState({
    얼굴형: [],
    피부색: [],
    눈: [],
    눈썹: [],
    헤어: [],
    코: [],
    입: [],
    입술: [],
    기타: [],
  });
  const [loading, setLoading] = useState(false);


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

  const handleSendData = async () => {
    console.log("click");
    console.log(JSON.stringify(selectedValues));
    setLoading(true);


    try {
      const response = await fetch('http://localhost:5001/api/generate', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: selectedValues })
      });

      if (!response.ok) {
        throw new Error('Network error');
      }

      const data = await response.json();
      console.log(data);
      window.sessionStorage.setItem('imageUrls', JSON.stringify(data.imageUrls));
      navigate('/lovelanguage');  


    } catch (error) {
      console.log(error);
    }finally {
      setLoading(false);
    }
  };

  return (
    <MainBody>
      {loading ? (
        <LoadingContainer>

        <H1Bold content="이미지 생성 중입니다. 잠시만 기다려주세요." />
        <LoadingGif src={loadingGif} alt="Loading..." />
        </LoadingContainer>
      ) : (
      <>
      
    
      <div>
        <H1 content="원하는 상대방의 외모 조건들을 선택해 주세요" />
        <H2 content="다음 키워드는 선택하지 않아도 되며, 여러 개를 선택할 수도 있습니다.." />
      </div>
      <ButtonWrap>
      <ButtonContainer title="얼굴형">
          <StyledButton
            text="계란형"
            title="얼굴형"
            isSelected={selectedValues.얼굴형.includes('계라형')}
            onClickFunction={() => handleButtonClick('얼굴형', '계란형')}
          />
          <StyledButton
            text="동근형"
            title="얼굴형"
            isSelected={selectedValues.얼굴형.includes('동근형')}
            onClickFunction={() => handleButtonClick('얼굴형', '동근형')}
          />
          <StyledButton
            text="각진형"
            title="얼굴형"
            isSelected={selectedValues.얼굴형.includes('각진형')}
            onClickFunction={() => handleButtonClick('얼굴형', '각진형')}
          />
        </ButtonContainer>
        <ButtonContainer title="피부색">
          <StyledButton
            text="백인 피부"
            title="피부색"
            isSelected={selectedValues.피부색.includes('백인 같은 밝은 피부')}
            onClickFunction={() => handleButtonClick('피부색', '백인 같은 밝은 피부')}
          />
          <StyledButton
            text="흑인 피부"
            title="피부색"
            isSelected={selectedValues.피부색.includes('흑인 같은 매끄러운 피부')}
            onClickFunction={() => handleButtonClick('피부색', '흑인 같은 매끄러운 피부')}
          />
          <StyledButton
            text="동양인 피부"
            title="피부색"
            isSelected={selectedValues.피부색.includes('동양인 같은 피부')}
            onClickFunction={() => handleButtonClick('피부색', '동양인 같은 있는 피부')}
          />
        </ButtonContainer>
        <ButtonContainer title="눈">
        <StyledButton
            text="큰 눈"
            title="눈"
            isSelected={selectedValues.눈.includes('큰 눈')}
            onClickFunction={() => handleButtonClick('눈', '큰 눈')}
          />
          <StyledButton
            text="보통 크기의 눈"
            title="눈"
            isSelected={selectedValues.눈.includes('보통 크기의 눈')}
            onClickFunction={() => handleButtonClick('눈', '보통 크기의 눈')}
          />
          <StyledButton
            text="작은 눈"
            title="눈"
            isSelected={selectedValues.눈.includes('작은 눈')}
            onClickFunction={() => handleButtonClick('눈', '작은 눈')}
          />
          <StyledButton
            text="무쌍"
            title="눈"
            isSelected={selectedValues.눈.includes('무쌍')}
            onClickFunction={() => handleButtonClick('눈', '무쌍 처럼 작은 눈')}
          />
          <StyledButton
            text="유쌍"
            title="눈"
            isSelected={selectedValues.눈.includes('유쌍 처럼 큰 눈')}
            onClickFunction={() => handleButtonClick('눈', '유쌍 처럼 큰 눈')}
          />
        </ButtonContainer>
        <ButtonContainer title="눈썹">
          <StyledButton
            text="두꺼운 눈썹"
            title="눈썹"
            isSelected={selectedValues.눈썹.includes('두꺼운 눈썹')}
            onClickFunction={() => handleButtonClick('눈썹', '두꺼운 눈썹')}
          />
          <StyledButton
            text="보통 눈썹"
            title="눈썹"
            isSelected={selectedValues.눈썹.includes('보통 굵기의 눈썹')}
            onClickFunction={() => handleButtonClick('눈썹', '보통 굵기의 눈썹')}
          />
          <StyledButton
            text="얇은 눈썹"
            title="눈썹"
            isSelected={selectedValues.눈썹.includes('얇은 눈썹')}
            onClickFunction={() => handleButtonClick('눈썹', '얇은 눈썹')}
          />
        </ButtonContainer>
        <ButtonContainer title="헤어스타일">
          <StyledButton
            text="짧은머리"
            title="헤어"
            isSelected={selectedValues.헤어.includes('짧은머리')}
            onClickFunction={() => handleButtonClick('헤어', '짧은머리')}
          />
          <StyledButton
            text="어깨 닿는 머리"
            title="헤어스타일"
            isSelected={selectedValues.헤어.includes('어깨를 닿는 길이의 머리')}
            onClickFunction={() => handleButtonClick('헤어', '어깨를 닿는 길이의 머리')}
          />
          <StyledButton
            text="긴머리"
            title="헤어스타일"
            isSelected={selectedValues.헤어.includes('긴머리')}
            onClickFunction={() => handleButtonClick('헤어', '긴머리')}
          />
          <StyledButton
            text="앞머리 있음"
            title="헤어스타일"
            isSelected={selectedValues.헤어.includes('앞머리 있음')}
            onClickFunction={() => handleButtonClick('헤어', '앞머리 있음')}
          />
        </ButtonContainer>
        <ButtonContainer title="코 모양">
          <StyledButton
            text="높은 코"
            title="코 모양"
            isSelected={selectedValues.코.includes('높은 코')}
            onClickFunction={() => handleButtonClick('코', '높은 코')}
          />
          <StyledButton
            text="긴 코"
            title="코 모양"
            isSelected={selectedValues.코.includes('긴 코')}
            onClickFunction={() => handleButtonClick('코', '긴 코')}
          />
          <StyledButton
            text="짧은 코"
            title="코 모양"
            isSelected={selectedValues.코.includes('짧은 코')}
            onClickFunction={() => handleButtonClick('코', '짧은 코')}
          />
        </ButtonContainer>
        <ButtonContainer title="입 모양">
          <StyledButton
            text="큰 입"
            title="입 모양"
            isSelected={selectedValues.입.includes('큰 입')}
            onClickFunction={() => handleButtonClick('입', '큰 입')}
          />
          <StyledButton
            text="보통 크기의 입"
            title="입 모양"
            isSelected={selectedValues.입.includes('보통 크기의 입')}
            onClickFunction={() => handleButtonClick('입', '보통 크기의 입')}
          />
          <StyledButton
            text="작은 입"
            title="입 모양"
            isSelected={selectedValues.입.includes('작은 입')}
            onClickFunction={() => handleButtonClick('입', '작은 입')}
          />
        </ButtonContainer>
        <ButtonContainer title="입술">
          <StyledButton
            text="두꺼운 입술"
            title="입술"
            isSelected={selectedValues.입술.includes('두꺼운 입술')}
            onClickFunction={() => handleButtonClick('입술', '두꺼운 입술')}
          />
          <StyledButton
            text="보통 입술"
            title="입술"
            isSelected={selectedValues.입술.includes('보통 입술')}
            onClickFunction={() => handleButtonClick('입술', '보통 입술')}
          />
          <StyledButton
            text="얇은 입술"
            title="입술"
            isSelected={selectedValues.입술.includes('얇은 입술')}
            onClickFunction={() => handleButtonClick('입술', '얇은 입술')}
          />
        </ButtonContainer>
        <ButtonContainer title="기타">
          <StyledButton
            text="안경 있음"
            title="기타"
            isSelected={selectedValues.기타.includes('안경 을 쓴')}
            onClickFunction={() => handleButtonClick('기타', '안경 을 쓴')}
          />
          <StyledButton
            text="보조게 있음"
            title="기타"
            isSelected={selectedValues.기타.includes('얼굴에 보조개 있는')}
            onClickFunction={() => handleButtonClick('기타', '얼굴에 보조개 있는')}
          />
        </ButtonContainer>
        </ButtonWrap>
      <SendBtn text="선택 완료" onClickFunction={handleSendData} />
      </>
      )}
    </MainBody>
  );
};

export default Keyword;
