import React, { useState } from 'react';
import styled from 'styled-components';
import { H2,H1Bold } from "../components/Text";
import { SendBtn } from '../components/Btn';
import { useNavigate } from 'react-router-dom';
import loadingGif from '../assets/loading.gif'; 

const StyledTextInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  width: 300px;
  margin: 5rem auto;
  background-color: var(--primary-color);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: -0.2rem 0.2rem 0rem 0rem var(--shadow);

  @media (min-width: 1024px) {
    width: 800px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 1rem;
  font-size: 1.2rem;
  border: 2px solid var(--pink);
  border-radius: 0.5rem;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  resize: none;
  outline: none;
  background-color: #F2FFF4;
  font-family: 'NanumSquare', sans-serif;

  @media (min-width: 1024px) {
    height: 300px;
    font-size: 1.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
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

const TextInput = () => {
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5001/api/generateText', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputText }),
      });

      const data = await response.json();
      console.log(data);
      window.sessionStorage.setItem('imageUrls', JSON.stringify(data.imageUrls));
      navigate('/lovelanguage');
    } catch (error) {
      console.error('Error sending data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    loading ? (
      <LoadingContainer>
        <H1Bold content="이미지 생성 중입니다. 잠시만 기다려주세요." />
        <LoadingGif src={loadingGif} alt="Loading..." />
      </LoadingContainer>
    ) : (
      <StyledTextInput>
        <div>
          <H2 content="원하는 상대방의 외모 조건들을 입력해주세요." />
        </div>
        <TextArea value={inputText} onChange={handleInputChange} placeholder='남자다운 스타일의 태닝된 얼굴이 좋아요!!!'/>
        <ButtonContainer>
          <SendBtn text="입력 완료" onClickFunction={handleClick} />
        </ButtonContainer>
      </StyledTextInput>
    )
  );
};

export default TextInput;
