import React from 'react';
import styled from '@emotion/styled';
import Section1 from '../sections/Section1';
import Section2 from '../sections/Section2';
import Section3 from '../sections/Section3';
import Section4 from '../sections/Section4';
import Section5 from '../sections/Section5';
import Section6 from '../sections/Section6';
import Section7 from '../sections/Section7';
import Section8 from '../sections/Section8';
import Section9 from '../sections/Section9';
import Annex from '../sections/Annex';

const ContentContainer = styled.main`
  flex: 1;
  padding: 2.5rem 4rem;
  background-color: ${props => props.theme.colors.contentBg};
  width: 100%; // Asegura que intente usar el espacio
  
  section {
    margin-bottom: 3.5rem;
    padding-top: 85px; 
    margin-top: -85px;
  }

  ol {
    max-width: 100vw;
    padding: 0 1.5rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
    margin-top: 0;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
  }

  .section-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.primary};
    font-size: 1.5rem;
    border-radius: 8px;
    min-width: 40px;
    height: 40px;
    margin-right: 1rem;
  }
  
  /* --- AJUSTE RESPONSIVE --- */
  @media (max-width: 992px) {
    padding: 1.5rem 1.5rem; // Reducimos el padding en móvil
    width: 100vw;
  }

  @media (max-width: 576px) {
    h2 {
      font-size: 1.5rem; // Hacemos los títulos un poco más pequeños en móviles
    }
    .section-number {
      min-width: 35px;
      height: 35px;
      font-size: 1.2rem;
    }
  }
`;

const Content = () => {
  return (
    <ContentContainer>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Annex />
    </ContentContainer>
  );
};

export default Content;