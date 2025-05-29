import React, {useRef} from 'react';
import {ProjectsContainer, NavigationButton,ContentContainer, ProjectNameContainer,PictureContainer, ProjectName, Picture} from './projects-styles';
import Desktop from '../../static/images/main_project/Desktop.png';
import { useNavigate } from 'react-router-dom';


const ProjectsSection = () => {
	const navigate = useNavigate()

	const navigationHandler = (e) => {
		e.preventDefault()
		navigate(`/projects/main`)
	}

	return (
		<>
					<ProjectsContainer id='projects'>
						<ContentContainer>
		<ProjectNameContainer
				initial={{ scale: 0.5 }}
				animate={{scale: 1}}
				transition={{
					type: "spring",
					stiffness: 500,
					damping: 90,
				}}>
		<ProjectName 
				initial={{ scale: 0.5 }}
				animate={{scale: 1}}
				transition={{
					type: "spring",
					stiffness: 500,
					damping: 90,
				}}>
		Main<br/>Project
		</ProjectName></ProjectNameContainer>
							<NavigationButton onClick={navigationHandler}/>
		<PictureContainer >
		<Picture
				initial={{ scale: 0.8 }}
				animate={{scale: 1}}
				transition={{
					type: "spring",
					stiffness: 500,
					damping: 90,
				}}
		src = {Desktop}/>
		</PictureContainer>
						</ContentContainer>	
					</ProjectsContainer>
		</>
	)
}

export default ProjectsSection;
