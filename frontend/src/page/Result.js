import styled from "styled-components";
import { H1 } from "../components/Text";
import { useLocation, useNavigate } from "react-router-dom";
import { ImageContainer } from "../components/Image";
import { BtnWithBody, SendBtn } from "../components/Btn";

const Wrapper = styled.div`
    padding: 6rem;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    gap: 2rem;
    margin: 3rem;

    > button {
        max-width: 40%;
    }

    @media (max-width: 768px) {
        > button {
            max-width: 100%;
        }
    }
    `;

    

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 1rem;
    margin: 2rem 0;

    @media (max-width: 768px) {
        align-items: center;
        & > button {
            max-width: 90%;
        }
        gap: 1rem;
    }
`;

// TODO: Fix the image and love language shadow
export default function Result() {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.state.description);

    const handleGoBack = () => {
        navigate("/");
    }

    const handleScreenShot = () => {
        alert("스크린샷을 저장합니다.");
    }

    return (
        <Wrapper>
            <H1 content="당신의 이상형은 바로..." />
            <ContentWrapper>
                <ImageContainer imageUrl={location.state.selectedImage} />
                <BtnWithBody title={"사랑의 언어 - " + location.state.language} text={location.state.description} shadow = {false} />
            </ContentWrapper>
            <div style={{height: 1 + 'rem'}}></div>
            <ButtonGroup>
                <SendBtn text="다시하기" onClickFunction={handleGoBack} />
            </ButtonGroup>
        </Wrapper>
    )
}