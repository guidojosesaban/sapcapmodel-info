import React from 'react';
import styled from '@emotion/styled';

import Section1 from '../sections/Section1';
import Section2 from '../sections/Section2';
import Section3 from '../sections/Section3';
import Section4CDS from '../sections/Section4CDS';
import Section5Services from '../sections/Section5Services';
import Section6BusinessLogic from '../sections/Section6BusinessLogic';
import Section7Consuming from '../sections/Section7Consuming';
import Section8Databases from '../sections/Section8Databases';
import Section9Security from '../sections/Section9Security';
import Section10Multitenancy from '../sections/Section10Multitenancy';
import Section11Localization from '../sections/Section11Localization';
import Section12Deployment from '../sections/Section12Deployment';
import Section13Fiori from '../sections/Section13Fiori';
import Section14Extensibility from '../sections/Section14Extensibility';
import Annex from '../sections/Annex';

const ContentContainer = styled.main`
  flex-grow: 1;
  padding: 2.5rem 4rem;
  margin-left: ${props => props.theme.sidebar.width};
  width: 100%; /* Asegura que el contenedor intente ocupar el espacio */

  section {
    margin-bottom: 3.5rem;
    padding-top: calc(${props => props.theme.header.height} + 1rem); 
    margin-top: calc(-${props => props.theme.header.height} - 1rem);
  }

  h2 {
    font-size: 2.2rem;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
    margin-top: 0;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    border-bottom: 3px solid ${props => props.theme.colors.borderColor};
    padding-bottom: 0.75rem;
  }

  .section-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.accent};
    color: white;
    font-size: 1.5rem;
    border-radius: 8px;
    min-width: 45px;
    height: 45px;
    margin-right: 1rem;
  }
  
  @media (max-width: 1000px) {
    margin-left: 0;
    padding: 1.5rem 0; /* Eliminamos el padding lateral, ahora lo gestiona el body */
  }

  @media (max-width: 576px) {
    h2 {
      font-size: 1.6rem;
    }
    .section-number {
      min-width: 40px;
      height: 40px;
      font-size: 1.3rem;
    }
  }
`;

const Content = () => {
  return (
    <ContentContainer>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4CDS />
      <Section5Services />
      <Section6BusinessLogic />
      <Section7Consuming />
      <Section8Databases />
      <Section9Security />
      <Section10Multitenancy />
      <Section11Localization />
      <Section12Deployment />
      <Section13Fiori />
      <Section14Extensibility />
      <Annex />
    </ContentContainer>
  );
};

export default Content;