import styled from "styled-components";
import PropTypes from 'prop-types';
import { useState, useEffect } from "react";

const Img = styled.img.attrs(props => ({
    src: props.src,
    alt: props.alt,
}))`
    border-radius: 1.5rem;
    opacity: ${(props) => (props.isClicked ? '0.5' : '1')};
    transition: opacity 0.3s;
    width: 100%;
`;

Img.defaultProps = {
    src: 'https://via.placeholder.com/150',
    alt: 'placeholder'
};

Img.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
};

const ImgButton = styled.button`
    padding: 0;
    cursor: pointer;
    box-shadow: -0.6rem 0.6rem 0rem 0rem var(--shadow);
    border-radius: 1.5rem;
    max-width: 100%;
`;

const ImageContainer = ({ imageUrl, isSelected, handleImageSelection }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if (handleImageSelection) {
            setIsClicked(!isClicked);
            handleImageSelection(imageUrl);
        }
    };

    return (
        <ImgButton onClick={handleClick}>
            <Img src={imageUrl} alt="Generated Image" isClicked={isSelected} />
        </ImgButton>
    );
};

export { ImageContainer };
