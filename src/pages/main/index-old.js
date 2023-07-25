import React, {useState, useRef, useEffect} from 'react';
import { Icon, MainContainer, HeaderContainer, LastName2, LastName3,  Name1, Name2, Description, DescriptionContainer,SocialLink, Name3, NameContainer, LastNameContainer,LastName, ContentContainer, ButtonsContainer, Mask, ResumeButton, Symbol, FullNameContainer, Name, ImageContainer, Image } from './main-styles-old';

import AboutSection from '../../components/sections/about';
import SkillsSection from '../../components/sections/skills';
import ProjectsSection from '../../components/sections/projects';

import {ImDownload3} from 'react-icons/im';
import transition from '../../components/transition';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'


const MainPage = () => {
const containerRef = useRef(null)


	return( 
<>
			<LocomotiveScrollProvider
				options={{smooth: true,}}
				watch={[]}
				containerRef={containerRef}
			>

  <main data-scroll-container ref={containerRef}>

			<MainContainer id = 'main'>
				<HeaderContainer data-scroll-section>
					<SocialLink to="" target="_blank">LinkedIn &nbsp;</SocialLink>
					<SocialLink to="https://www.instagram.com/lzaitsevl/" target="_blank">Instagram &nbsp;</SocialLink>
					<SocialLink to="https://github.com/harvidston" target="_blank">GitHub</SocialLink>
				</HeaderContainer>
				<ContentContainer>

					<FullNameContainer data-scroll-section>
		<NameContainer>
		<Name>Alexey</Name>
		</NameContainer>
		<LastNameContainer>
		<LastName>Zaitsev</LastName>

		</LastNameContainer>
		<DescriptionContainer><Description>Python Software Engineer & Web Developer</Description></DescriptionContainer>

					</FullNameContainer>
					<ButtonsContainer data-scroll-section >

						<Mask>Download CV&nbsp;<Symbol><ImDownload3/> </Symbol></Mask>
						<ResumeButton>Download CV&nbsp;<Icon><ImDownload3/> </Icon></ResumeButton>

					</ButtonsContainer>
				</ContentContainer>

			</MainContainer>


  </main>
			</LocomotiveScrollProvider>
</>
	)
}

export default MainPage;

