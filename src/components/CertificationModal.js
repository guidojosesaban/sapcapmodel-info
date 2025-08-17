import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const ModalCard = styled.div`
  background-color: ${props => props.theme.colors.contentBg};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: ${props => props.theme.shadows.md};
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  transform: ${props => (props.isOpen ? 'scale(1)' : 'scale(0.9)')};
  transition: transform 0.3s ease;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.theme.colors.textSecondary};
  &:hover {
    color: ${props => props.theme.colors.textPrimary};
  }
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.primary};
  border-bottom: 2px solid ${props => props.theme.colors.borderColor};
  padding-bottom: 0.5rem;
`;

const SubHeading = styled.h3`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.primary};
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  line-height: 1.7;
  color: ${props => props.theme.colors.textSecondary};
`;

const TableContainer = styled.div`
  overflow-x: auto;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 8px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;

  th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  }

  thead th {
    background-color: ${props => props.theme.colors.background};
    font-weight: 600;
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  td:first-of-type {
    width: 80px;
    text-align: center;
  }
`;

const Checkbox = styled.input`
  transform: scale(1.5);
  accent-color: ${props => props.theme.colors.primary};
`;

const CourseLink = styled.a`
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const coursesData = [
  { id: 'c1', name: 'Getting started with SAP Cloud Application Programming Model', hours: '8hs', url: 'https://learning.sap.com/learning-journeys/getting-started-with-sap-cloud-application-programming-model' },
  { id: 'c2', name: 'Building side-by-side extensions on SAP BTP', hours: '8hs', url: 'https://learning.sap.com/learning-journeys/build-side-by-side-extensions-on-sap-btp' },
  { id: 'c3', name: 'Developing Advanced Extensions with SAP Cloud SDK', hours: '11hs', url: 'https://learning.sap.com/learning-journeys/develop-advanced-extensions-with-sap-cloud-sdk' },
  { id: 'c4', name: 'Developing Applications on SAP BTP, Cloud Foundry runtime', hours: '4hs', url: 'https://learning.sap.com/learning-journeys/developing-applications-on-sap-btp-cloud-foundry-runtime' },
  { id: 'c5', name: 'Developing Applications in SAP BTP, Kyma Runtime', hours: '16hs', url: 'https://learning.sap.com/learning-journeys/developing-applications-in-sap-btp-kyma-runtime' },
  { id: 'c6', name: 'Developing Full-Stack Applications Using Productivity Tools', hours: '8hs', url: 'https://learning.sap.com/learning-journeys/develop-full-stack-applications-using-productivity-tools-in-sap-business-application-studio' },
];

const CertificationModal = ({ isOpen, onClose }) => {
  const [completedCourses, setCompletedCourses] = useState({});

  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem('sapCapCertProgress');
      if (savedProgress) {
        setCompletedCourses(JSON.parse(savedProgress));
      }
    } catch (error) {
      console.error("Failed to load progress from localStorage", error);
    }
  }, []);

  const handleCheckboxChange = (courseId) => {
    const newCompletedCourses = {
      ...completedCourses,
      [courseId]: !completedCourses[courseId],
    };
    setCompletedCourses(newCompletedCourses);
    try {
      localStorage.setItem('sapCapCertProgress', JSON.stringify(newCompletedCourses));
    } catch (error) {
      console.error("Failed to save progress to localStorage", error);
    }
  };

  return (
    <ModalBackdrop isOpen={isOpen} onClick={onClose}>
      <ModalCard isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}><FaTimes /></CloseButton>
        <Title>Guía de Certificación SAP CAP</Title>
        
        <Paragraph>
          El examen <strong>"SAP Certified Associate - Backend Developer - SAP Cloud Application Programming Model"</strong> valida que posees los conocimientos fundamentales para diseñar e implementar aplicaciones de extensión en SAP BTP.
        </Paragraph>

        <SubHeading>Temas del Examen</SubHeading>
        <ul>
          <li>Modelo de programación de aplicaciones en la nube de SAP (31% - 40%)</li>
          <li>Tiempos de ejecución de SAP BTP (31% - 40%)</li>
          <li>Extensibilidad de la nube de SAP S/4HANA (11% - 20%)</li>
          <li>CI/CD (≤10%)</li>
        </ul>

        <SubHeading>Ruta de Preparación</SubHeading>
        <TableContainer>
          <StyledTable>
            <thead>
              <tr>
                <th>Estado</th>
                <th>Curso de Preparación</th>
                <th>Duración</th>
              </tr>
            </thead>
            <tbody>
              {coursesData.map(course => (
                <tr key={course.id}>
                  <td>
                    <Checkbox
                      type="checkbox"
                      checked={!!completedCourses[course.id]}
                      onChange={() => handleCheckboxChange(course.id)}
                    />
                  </td>
                  <td>
                    <CourseLink href={course.url} target="_blank" rel="noopener noreferrer">
                      {course.name} <FaExternalLinkAlt size="0.8em" />
                    </CourseLink>
                  </td>
                  <td>{course.hours}</td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </TableContainer>
      </ModalCard>
    </ModalBackdrop>
  );
};

export default CertificationModal;