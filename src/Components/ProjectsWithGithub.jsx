import React from 'react';
import GithubRepos from './GithubRepos';
import Projects from './Projects';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  gap: 2rem; /* Adds some spacing between the sections */
`;

const ProjectsSection = styled.div`
  width: 55%; /* Increased width of Projects section */
`;

const GithubWidgetSection = styled.div`
  width: 40%; /* Increased width of GitHub widget section */
`;

const ProjectsWithGithub = () => {
  return (
    <ProjectsContainer>
      <ProjectsSection>
        <Projects /> {/* Your Projects component */}
      </ProjectsSection>
      <GithubWidgetSection>
        <GithubRepos /> {/* The GitHub widget */}
      </GithubWidgetSection>
    </ProjectsContainer>
  );
};

export default ProjectsWithGithub;
