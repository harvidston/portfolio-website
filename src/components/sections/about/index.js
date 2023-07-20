import React, { useState} from 'react';
import {AboutContainer, LinksWidget, Button, PersonalLink, LinksContainer, ThirdRow,  SecondRow, Faculty, FirstRow, Period, JobTitle,  BachelorDegree, University,  Icon, ResumeWidget,  NameWidget, EducationWidget, PictureWidget, Name, NameContainer, WidgetText, WidgetDescription, LastNameContainer,  EducationContainer,Picture} from './about-styles';
import Avatar2 from '../../../static/images/glasses.jpg';
import {ImDownload3} from 'react-icons/im';
import {RiInstagramFill} from 'react-icons/ri';
import {BiLogoTelegram} from 'react-icons/bi';
import {SiLinkedin, SiGithub, SiMaildotru} from 'react-icons/si';
const AboutSection = () => {

	return (
		<AboutContainer data-scroll-section id='about'>
			<FirstRow>
				<PictureWidget>
					<Picture src = {Avatar2}/>
				</PictureWidget>
				<NameWidget>
					<NameContainer><LastNameContainer><Name>Alexey</Name></LastNameContainer><LastNameContainer><Name>Zaitsev</Name></LastNameContainer></NameContainer>
					<JobTitle>Python Developer</JobTitle>
				</NameWidget>
				<ResumeWidget>
					<Button>
						<Icon><ImDownload3/> </Icon>
					</Button>
					<WidgetDescription>Download</WidgetDescription>
					<WidgetText>Resume</WidgetText>
				</ResumeWidget>
			</FirstRow>
			<SecondRow>
				<EducationWidget>
					<EducationContainer>
						<Period>2019-2023</Period>
						<BachelorDegree>Bachelor Degree in Software<br/>for Information Technologies</BachelorDegree>
						<Faculty>Faculty of Computer Systems and Networks</Faculty>
						<University>Belarusian State University of Informatics and Radioelectronics</University>
					</EducationContainer>
					<WidgetText>Education</WidgetText>
				</EducationWidget>
				<ResumeWidget>
				</ResumeWidget>
				<ResumeWidget>
				</ResumeWidget>
			</SecondRow>
			<ThirdRow>
				<LinksWidget>
					<LinksContainer>
						<PersonalLink to="https://www.instagram.com/lzaitsevl/" target="_blank">
							<Icon><RiInstagramFill/> </Icon>
						</PersonalLink>
						<PersonalLink>
							<Icon><BiLogoTelegram/> </Icon>
						</PersonalLink>
					</LinksContainer>
					<WidgetDescription>Download</WidgetDescription>
					<WidgetText>Social Links</WidgetText>
				</LinksWidget>
				<LinksWidget>
					<LinksContainer>
						<PersonalLink>
							<Icon><SiMaildotru/> </Icon>
						</PersonalLink>
						<PersonalLink>
							<Icon><SiLinkedin/> </Icon>
						</PersonalLink>
						<PersonalLink>
							<Icon><SiGithub/> </Icon>
						</PersonalLink>
					</LinksContainer>
					<WidgetDescription>Download</WidgetDescription>
					<WidgetText>Resume</WidgetText>
				</LinksWidget>
			</ThirdRow>

		{/*			{isShowAbout ? (
				<>
			<Title>About Me About Me About Me About me </Title>
			<MainTransparentContainer>
				<PictureContainer>
					<PictureBackContainer>
						<Picture src={Avatar}/>
						<Picture2 src={Avatar}/>
						<Picture3 src={Avatar}/>
						<Picture4 src={Avatar}/>
						<Picture5 src={Avatar}/>
						<Picture6 src={Avatar}/>
					</PictureBackContainer>

				</PictureContainer>
				<InfoContainer>
					<SlideArrowButton onClick={() => setIsShowAbout(true)} ><SlArrowLeft/></SlideArrowButton>
					<TextContainer>

						<InfoTitle>ABOUT ME</InfoTitle>
						<InfoTitle2>ABOUT ME</InfoTitle2>
						<InfoTitle3>ABOUT ME</InfoTitle3>
					</TextContainer>
					<SlideArrowButton onClick={() => setIsShowAbout(false)} ><SlArrowRight/></SlideArrowButton>
				</InfoContainer>

			</MainTransparentContainer>
				</>
			):(
				<>

			<Title>EDUCATION EDUCATION EDUCATION EDUCATION</Title>
			<MainTransparentContainer>
				<PictureContainer>
					<PictureBackContainer>
						<Picture src={Avatar}/>
						<Picture2 src={Avatar}/>
						<Picture3 src={Avatar}/>
						<Picture4 src={Avatar}/>
						<Picture5 src={Avatar}/>
						<Picture6 src={Avatar}/>
					</PictureBackContainer>

				</PictureContainer>
				<InfoContainer>
					<SlideArrowButton onClick={() => setIsShowAbout(true)} ><SlArrowLeft/></SlideArrowButton>
					<TextContainer>

						<InfoTitle>EDUCATION</InfoTitle>
						<InfoTitle2>EDUCATION</InfoTitle2>
						<InfoTitle3>EDUCATION</InfoTitle3>
					</TextContainer>
					<SlideArrowButton onClick={() => setIsShowAbout(false)} ><SlArrowRight/></SlideArrowButton>
				</InfoContainer>

			</MainTransparentContainer>

				</>

			)}

			*/}
		</AboutContainer>
	)
}

export default AboutSection;
