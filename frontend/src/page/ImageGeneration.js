import styled from "styled-components";
import { useState } from "react";
import { H1Bold, H2, H2Bold } from "../components/Text";
import { ImageContainer } from "../components/Image";
import { SendBtn } from "../components/Btn";
import { useNavigate, useLocation } from "react-router-dom";

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
  const navigate = useNavigate();
  const location = useLocation();
  const { imageUrls, language, description } = location.state;
  console.log(`Image URLs: ${imageUrls}`);

  const handleImageSelection = (imageUrl) => {
    setSelectedImage(imageUrl);
    console.log(`Selected image: ${imageUrl}`);
  };

  const handleNavigation = () => {
    if (selectedImage === null) {
      alert("이상형 이미지를 선택해주세요.");
      return;
    } else {
      console.log(`Selected image: ${selectedImage}`);
      navigate('/result', { state: { selectedImage, language, description } });
    }
  };

  return (
    <Wrapper>
      <H1Bold content="STEP 3." />
      <H2Bold content="이상형 이미지 후보 생성" />
      <ContentWrapper>
        <H2 content="가장 마음에 드는 이미지를 선택해 주세요." />
        <ImageGroup>
          {imageUrls.length > 0 ? (
            imageUrls.map((url, index) => (
              <ImageContainer
                key={index}
                handleImageSelection={handleImageSelection}
                isSelected={selectedImage === url}
                imageUrl={url}
              />
            ))
          ) : (
            <p>Loading images...</p>
          )}
        </ImageGroup>
        <div style={{ padding: '2rem' }}>
          <SendBtn text="선택 완료" onClickFunction={handleNavigation} />
        </div>
      </ContentWrapper>
    </Wrapper>
  );
}
