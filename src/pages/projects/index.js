import React, {useRef} from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

import transition from '../../components/transition';
import {ProjectsContainer, NavigationButton, Technology, ContentContainer, ProjectNameContainer, TechnologyContainer,PictureContainer, ProjectName, Picture} from './projects-styles';
import ArtProject from '../../static/images/artproject.png';
import { useNavigate } from 'react-router-dom';


const ProjectsSection = () => {
	const containerRef = useRef(null)
	const navigate = useNavigate()

	const navigationHandler = (e) => {
		e.preventDefault()
		navigate(`/projects/main`)
	}

	return (
		<>
			<LocomotiveScrollProvider
				options={{smooth: true,}}
				watch={[]}
				containerRef={containerRef}
			>
				<main data-scroll-container ref={containerRef}>
					<ProjectsContainer id='projects'>
						<ContentContainer data-scroll-section>
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
				initial={{ scale: 0 }}
				animate={{scale: 1}}
				transition={{
					type: "spring",
					stiffness: 500,
					damping: 90,
				}}
		src = {ArtProject}/>
		</PictureContainer>
		<TechnologyContainer >
			<Technology 
				initial={{ scale: 0.5 }}
				animate={{scale: 1}}
				transition={{
					type: "spring",
					stiffness: 500,
					damping: 90,
				}}>
		Backend</Technology>
		<Technology
				initial={{ scale: 0.5 }}
				animate={{scale: 1}}
				transition={{
					type: "spring",
					stiffness: 500,
					damping: 90,
				}}>
		Frontend</Technology>
		</TechnologyContainer>
						</ContentContainer>	
					</ProjectsContainer>
				</main>
			</LocomotiveScrollProvider>
		</>
		
	)
}

export default ProjectsSection;
