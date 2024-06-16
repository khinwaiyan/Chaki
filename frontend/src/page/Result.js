import styled from "styled-components";
import { H1 } from "../components/Text";
import { useLocation, useNavigate } from "react-router-dom";
import { ImageContainer } from "../components/Image";
import { BtnWithBody, SendBtn } from "../components/Btn";
import html2canvas from 'html2canvas';

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

    const handleScreenShot = async () => {
        const element = document.getElementById('screenshot-target');
        if (element) {
            const canvas = await html2canvas(element, {
                useCORS: true, 
                allowTaint: true,
                logging: true,
            });
            const imgData = canvas.toDataURL('image/png');
    
            // Create a link and trigger a download
            const link = document.createElement('a');
            link.href = imgData;
            link.download = 'screenshot.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            alert("스크린샷을 저장할 요소를 찾을 수 없습니다.");
        }
    }

    return (
        <Wrapper>
            <H1 content="당신의 이상형은 바로..." />
            <ContentWrapper id="screenshot-target">
                <ImageContainer imageUrl={location.state.selectedImage} />
                <BtnWithBody title={"사랑의 언어 - " + location.state.language} text={location.state.description} shadow = {false} />
            </ContentWrapper>
            <div style={{height: 1 + 'rem'}}></div>
            <ButtonGroup>
                <SendBtn text="다시하기" onClickFunction={handleGoBack} />
                <SendBtn text="결과 스크린샷" onClickFunction={handleScreenShot} />
            </ButtonGroup>
        </Wrapper>
    )
}
