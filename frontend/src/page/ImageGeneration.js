import styled from "styled-components";
import { useState, useEffect } from "react";
import { H1Bold, H2, H2Bold } from "../components/Text";
import { ImageContainer } from "../components/Image";
import { SendBtn } from "../components/Btn";
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';

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

const ImageGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2rem 0;
  justify-content: center;
  box-sizing: border-box;
  margin-bottom: 2rem;
  transition: all 0.3s ease-in-out;

  & > button {
    flex: 1 1 45%; /* ensures 2 buttons in one row */
    max-width: 45%; /* ensures 2 buttons in one row */
  }

  @media (max-width: 768px) {
    & > button {
      flex: 1 1 100%; /* ensures 1 button per row */
      max-width: 100%; /* ensures 1 button per row */
    }
  }
`;

export default function ImageGeneration() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.post('http://localhost:5001/api/generate', {
          data: location.state.description
        });
        if (response.data && response.data.imageUrl) {
          setImageUrl(response.data.imageUrl);
        } else {
          setImageUrl(''); // Set to empty string if response does not have imageUrl
        }
      } catch (error) {
        console.error('Error fetching image:', error.response ? error.response.data : error.message);
        alert('Failed to fetch image from the backend.');
        setImageUrl(''); // Set to empty string on error
      }
    };

    fetchImage();
  }, [location.state.description]);

  const handleImageSelection = () => {
    setSelectedImage(imageUrl);
    console.log(`Selected image: ${imageUrl}`);
  }

  const handleNavigation = () => {
    if (selectedImage === null) {
      alert("이상형 이미지를 선택해주세요.");
      return;
    } else {
      const language = location.state.language;
      const description = location.state.description;
      console.log(`Selected image: ${selectedImage}`);
      navigate('/result', { state: { selectedImage, language, description } });
    }  
  }

  return (
    <Wrapper>
      <H2Bold content="STEP 3." />
      <H1Bold content="이상형 이미지 생성" />
      <ContentWrapper>
        <H2 content="가장 마음에 드는 것을 골라주세요." />
        <ImageGroup>
          {imageUrl ? (
            <ImageContainer
              handleImageSelection={handleImageSelection}
              isSelected={selectedImage === imageUrl}
              imageUrl={imageUrl} />
          ) : (
            <p>Loading image...</p>
          )}
        </ImageGroup>
        <div style={{ padding: '2rem' }}>
          <SendBtn text="선택 완료" onClickFunction={handleNavigation} />
        </div>
      </ContentWrapper>
    </Wrapper>
  )
}
