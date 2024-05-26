import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebookF, FaEnvelope } from 'react-icons/fa';

const StyledFooter = styled.div`
  background-color: var(--bg); 
  color: var(--pink);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  line-height: 1.5;
`;

const SocialIcon = styled.a`
  margin: 0 0.5rem; 
  font-size: 2.4rem; 
  color: var(--pink);
  
  @media (min-width: 1024px) {
    margin: 0 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0 3rem;
  
  @media (min-width: 1024px) {
    padding: 5rem;
  }
`;

const Label = styled.div`
  font-size: 1.5rem;
  margin-right: 10px; 
  color: var(--pink);
  font-weight: bold;
  
  @media (min-width: 1024px) {
    margin-right: 2rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <SocialLinks>
        <Label>
            Contact Us
        </Label>
        <div>
          {/* Link to Instagram */}
          <SocialIcon href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </SocialIcon>

          {/* Link to Facebook */}
          <SocialIcon href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </SocialIcon>

            {/* Link to Email */}
            <SocialIcon href="mailto:" target="_blank" rel="noopener noreferrer">
                <FaEnvelope />
            </SocialIcon>

            
        </div>
      </SocialLinks>
    </StyledFooter>
  );
};

export { Footer };
