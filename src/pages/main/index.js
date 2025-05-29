import React, {useState, useRef} from 'react';
import {MainContainer, Picture, LocationContainer, PictureProjects, FooterContainer, Tick, RightsContainer, EmailCopiedMessage, LinksWidget, Button, PersonalLink, LinksContainer, ThirdRow,  SecondRow, Faculty, FirstRow, Period, JobTitle,  BachelorDegree, University,  Icon, ResumeWidget,  NameWidget, EducationWidget, PictureWidget, Name, NameContainer, WidgetText, WidgetDescription, LastNameContainer,  EducationContainer} from './main-styles.js';
import {ImDownload3} from 'react-icons/im';
import {RiInstagramFill} from 'react-icons/ri';
import {BiLogoTelegram} from 'react-icons/bi';
import {SiLinkedin, SiGithub, SiMaildotru} from 'react-icons/si';
import {IoEarthOutline} from 'react-icons/io5';
import Avatar2 from '../../static/images/glasses.jpg';
import TickSymbol from '../../static/images/verify.png';
import ResumePDF from '../../static/pdf/Resume.pdf';
import Desktop from '../../static/images/main_project/Desktop.png';

const MainPage = () => {
	const email = 'zaitsev-work@mail.ru'
	const [isCopied, setIsCopied]= useState('')

	const copiedHandler = () => {
		navigator.clipboard.writeText(email)
		setIsCopied(true)
    };
	return( 
		<>
					<MainContainer>
						<FirstRow>
							<PictureWidget
								initial={{ y: -800,  scale: 0 }}
								animate={{y: 0,  scale: 1}}
								transition={{
								type: "spring",
								stiffness: 100,
								damping: 30,
							}}>
								<Picture src = {Avatar2}/>
							</PictureWidget>
							<NameWidget
								initial={{ x: 1000,  scale: 0 }}
								animate={{x: 0,  scale: 1}}
								transition={{
									type: "spring",
									stiffness: 100,
									damping: 20,
								}}>
								<NameContainer>
									<LastNameContainer>
										<Name>Alexey</Name>
									</LastNameContainer>
									<LastNameContainer>
										<Name>Zaitsev</Name>
									</LastNameContainer>
								</NameContainer>
								<JobTitle>Python Software Engineer</JobTitle>
							</NameWidget>
							<ResumeWidget
								initial={{ y: -800,  scale: 0 }}
								animate={{y: 0,  scale: 1}}
								transition={{
									type: "spring",
									stiffness: 100,
									damping: 30,
								}}>

								<a
									download = "Alexey-Zaitsev-Resume.pdf"
									href={ResumePDF} 
									target="_blank"
									rel="noreferrer"
								>
									<Button  whileHover={{ scale: 1.1 }}>
										<Icon><ImDownload3/></Icon>
									</Button>
								</a>
								<WidgetDescription>Download</WidgetDescription>
								<WidgetText>Resume</WidgetText>
							</ResumeWidget>
						</FirstRow>
						<SecondRow>
							<EducationWidget
								initial={{ x: -1000,  scale: 0 }}
								animate={{x: 0,  scale: 1}}
								transition={{
									type: "spring",
									stiffness: 100,
									damping: 20,
								}}>
								<EducationContainer>
									<Period>2019-2023</Period>
									<BachelorDegree>Bachelor Degree in Software<br/>for Information Technologies</BachelorDegree>
									<Faculty>Faculty of Computer Systems and Networks</Faculty>
									<University>Belarusian State University of Informatics and Radioelectronics</University>
								</EducationContainer>
								<WidgetText>Education</WidgetText>
							</EducationWidget>
							<ResumeWidget
								initial={{ x: 1000,  scale: 0}}
								animate={{x: 0,  scale: 1}}
								transition={{
									type: "spring",
									stiffness: 100,
									damping: 20,
								}}>
								<PictureProjects src = {Desktop}/>
								<WidgetDescription>Graduation project</WidgetDescription>
								<WidgetText>Portfolio</WidgetText>
							</ResumeWidget>
							<ResumeWidget
								initial={{ x: 1000,  scale: 0 }}
								animate={{x: 0,  scale: 1}}
								transition={{
									type: "spring",
									stiffness: 100,
									damping: 30,
								}}>
								<LocationContainer>
									<Icon style={{fontSize: 160, color: "gray"}}><IoEarthOutline/></Icon>
								</LocationContainer>
								<WidgetDescription>Minsk, Belarus</WidgetDescription>
								<WidgetText>Location</WidgetText>
							</ResumeWidget>
						</SecondRow>
						<ThirdRow>
							<LinksWidget
								initial={{ x: -1000,  scale: 0 }}
								animate={{x: 0,  scale: 1}}
								transition={{
									type: "spring",
									stiffness: 100,
									damping: 20,
								}}>
								<LinksContainer>
									<PersonalLink onClick={() => {copiedHandler()} }>
										<Icon><SiMaildotru/> </Icon>
									</PersonalLink>
									<PersonalLink to ="https://t.me/lzaitsevl" target="_blank" >
										<Icon style={{fontSize: 100, marginTop: 15}}><BiLogoTelegram/> </Icon>
									</PersonalLink>
								</LinksContainer>
								<WidgetDescription>Text Me</WidgetDescription>
								<WidgetText>Contact Links</WidgetText>
							</LinksWidget>
							<LinksWidget
								initial={{ x: 1000,  scale: 0 }}
								animate={{x: 0,  scale: 1}}
								transition={{
									type: "spring",
									stiffness: 100,
									damping: 20,
								}}>
								<LinksContainer>
									<PersonalLink to="https://www.instagram.com/lzaitsevl/" target="_blank" >
										<Icon style={{fontSize: 100, marginTop: 15}}><RiInstagramFill/> </Icon>
									</PersonalLink>
									<PersonalLink to="https://www.linkedin.com/in/alexeyzaitsev/" target="_blank" >
										<Icon><SiLinkedin/> </Icon>
									</PersonalLink>
									<PersonalLink to="https://github.com/harvidston" target="_blank" >
										<Icon><SiGithub/> </Icon>
									</PersonalLink>
								</LinksContainer>
								<WidgetDescription>Get know me better</WidgetDescription>
								<WidgetText>Me & Code</WidgetText>
							</LinksWidget>
						</ThirdRow>
						<FooterContainer >
							<RightsContainer>Copyright © 2023 Alexey Zaitsev. All rights reserved.</RightsContainer>
						</FooterContainer>
						{isCopied ? 
							<EmailCopiedMessage 
								initial={{scale: 0 }}
								animate={{scale: 1}}
								transition={{
									type: "spring",
									stiffness: 260,
									damping: 20,
								}}  
								onAnimationComplete={() => {setIsCopied(false)}}
							>
								<Tick src = {TickSymbol}/>&nbsp;Email copied to the clipboard !
							</EmailCopiedMessage>
						: null}
					</MainContainer>
		</>
	)
}

export default MainPage;
