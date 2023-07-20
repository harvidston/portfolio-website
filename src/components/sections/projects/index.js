import React  from 'react';

import {ProjectsContainer, NavigationButton, Technology, ContentContainer, ProjectNameContainer, TechnologyContainer,PictureContainer, ProjectName, Picture} from './projects-styles';
import ArtProject from '../../../static/images/artproject.png';
import { useNavigate } from 'react-router-dom';

const ProjectsSection = () => {
	const navigate = useNavigate()

	const navigationHandler = (e) => {
		e.preventDefault()
		navigate(`/projects/art`)
	}

	return (
		<ProjectsContainer id='projects'>
			<ContentContainer data-scroll-section>
				<ProjectNameContainer><ProjectName>Main<br/>Project</ProjectName></ProjectNameContainer>
				<NavigationButton onClick={navigationHandler}/>
				<PictureContainer ><Picture src = {ArtProject}/></PictureContainer>
				<TechnologyContainer ><Technology>Backend</Technology><Technology>Frontend</Technology></TechnologyContainer>
			</ContentContainer>	
		</ProjectsContainer>
	)
}

export default ProjectsSection;
