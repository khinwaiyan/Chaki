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
    // console.log(`Selected language: ${language} - ${description}`);

    const handleImageSelection = (image) => {
        setSelectedImage(image);
        console.log(`Selected image: ${image}`);
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

    // TODO: Replace with actual image URLs from backend
    const image1 = "https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const image2 = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    return (
        <Wrapper>
            <H2Bold content="STEP 3." />
            <H1Bold content="이상형 이미지 생성" />
            <ContentWrapper>
                <H2 content="가장 마음에 드는 것을 골라주세요." />
                <ImageGroup>
                    <ImageContainer
                        handleImageSelection={handleImageSelection}
                        isSelected={selectedImage === image1}
                        imageUrl={image1} />
                    <ImageContainer
                        handleImageSelection={handleImageSelection}
                        isSelected={selectedImage === image2}
                        imageUrl={image2} />
                </ImageGroup>
                <div style={{padding: 2 + 'rem'}}>
                    <SendBtn text="선택 완료" onClickFunction={handleNavigation} />
                </div>
            </ContentWrapper>
        </Wrapper>
    )
}