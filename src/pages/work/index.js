import React, {useRef} from 'react';
import {WorkContainer, AdvantagesContainer, VideoContainer, GridItem, GridContainer, CardsContainer, Icon, Feature,CarouselContainer, Pictures, PicturesContainer, GitHubLink,  DescriptionItemContainer, ProjectDescriptionContainer,  Role, RoleContainer, PictureContainer, Picture,  ProjectName, Services, TitleContainer,  ProjectNameContainer} from './work-styles';
import 'video-react/dist/video-react.css'; 
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useNavigate } from 'react-router-dom';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Art from '../../static/images/main_project/1.png';
import Art2 from '../../static/images/main_project/2.png';
import Art4 from '../../static/images/main_project/6.png';
import Art5 from '../../static/images/artproject.png';
import Art6 from '../../static/images/main_project/8.png';
import Art7 from '../../static/images/main_project/7.png';
import Art9 from '../../static/images/main_project/9.png';
import Art10 from '../../static/images/main_project/10.png';
import Art11 from '../../static/images/main_project/11.png';
import Art12 from '../../static/images/main_project/12.png';
import Art13 from '../../static/images/main_project/13.png';
import {FaUserCircle, FaCommentAlt, FaLock} from 'react-icons/fa';
import {RiUserFollowFill} from 'react-icons/ri';
import {BiSolidLike} from 'react-icons/bi';
import {BsFillBasket3Fill} from 'react-icons/bs';
import {MdPalette} from 'react-icons/md';
import {FaFaceSmileBeam} from 'react-icons/fa6';
import { Player } from 'video-react';
import Video from '../../static/images/video.mp4';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Desktop2 from '../../static/images/main_project/Desktop2.png';

const ArtPage = () => {

	const containerRef = useRef(null)
	const navigate = useNavigate()

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 2500, min: 1024 },
			items: 1
		},
		desktop: {
			breakpoint: { max: 4000, min: 1024 },
			items: 2.2
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};

	const navigationHandler = (e) => {
		e.preventDefault()
		navigate(`/`)
	}
	return( 
<LocomotiveScrollProvider
  options={
    {
		smooth: true,
		offset: ["100%", 0],
    }
  }
  watch={
    [
    ]
  }
  containerRef={containerRef}
>
  <main data-scroll-container ref={containerRef}>
		<WorkContainer data-scroll-section>
			<TitleContainer>
		<ProjectNameContainer ><ProjectName
					initial={{ scale: 0 }}
					animate={{scale: 1}}
					transition={{
						type: "spring",
						stiffness: 500,
						damping: 90,
					}}
		>Graduation Project</ProjectName></ProjectNameContainer>
				<ProjectDescriptionContainer >
		<DescriptionItemContainer><Services
					initial={{ scale: 0 }}
					animate={{scale: 1}}
					transition={{
						type: "spring",
						stiffness: 500,
						damping: 90,
					}}
		>Role / Services</Services><RoleContainer><Role
					initial={{ scale: 0 }}
					animate={{scale: 1}}
					transition={{
						type: "spring",
						stiffness: 500,
						damping: 90,
					}}
		>Design & Development</Role></RoleContainer></DescriptionItemContainer>
		<DescriptionItemContainer><Services
					initial={{ scale: 0 }}
					animate={{scale: 1}}
					transition={{
						type: "spring",
						stiffness: 500,
						damping: 90,
					}}
		>Technology stack</Services><RoleContainer><Role
					initial={{ scale: 0 }}
					animate={{scale: 1}}
					transition={{
						type: "spring",
						stiffness: 500,
						damping: 90,
					}}
		>Django • Django REST framework • React JS • Redux • PostgreSQL • JWT Authentication • Styled Components • Git • Linux</Role></RoleContainer></DescriptionItemContainer>
		<DescriptionItemContainer><Services
					initial={{ scale: 0 }}
					animate={{scale: 1}}
					transition={{
						type: "spring",
						stiffness: 500,
						damping: 90,
					}}
		>Main Goal</Services><RoleContainer><Role
					initial={{ scale: 0 }}
					animate={{scale: 1}}
					transition={{
						type: "spring",
						stiffness: 500,
						damping: 90,
					}}
		>This web application is designed to develop the creative potentials of people who want to demonstrate their creative achievements on the Internet and make their work available for discussion in the creative community or who want to publish their work for sale.</Role></RoleContainer></DescriptionItemContainer>
				</ProjectDescriptionContainer>
			</TitleContainer>	
			<PictureContainer>
				<Picture
					initial={{ scale: 0 }}
					animate={{scale: 1}}
					transition={{
						type: "spring",
						stiffness: 500,
						damping: 90,
					}}
					src = {Desktop2}/>
		<GitHubLink to = "https://github.com/harvidston" target = "_blank">GitHub</GitHubLink>
			</PictureContainer>
			<AdvantagesContainer>
				<GridContainer>
					<GridItem>
		<Icon><FaUserCircle/></Icon>
	 <Feature>Registration and authorization in the web application with Json Web Tokens</Feature>
					</GridItem>
					<GridItem>
		<Icon><FaCommentAlt/></Icon>
    <Feature>Send comments, reviews to the work, for feedback and development of the creative community</Feature>
					</GridItem>
					<GridItem>
		<Icon><RiUserFollowFill/></Icon>
     <Feature>Subscribe to a user with works of interest</Feature>
					</GridItem>
					<GridItem>
		<Icon><FaLock/></Icon>
     <Feature>Security of user data and works</Feature>
					</GridItem>
					<GridItem>
		<Icon><FaFaceSmileBeam/></Icon>
     <Feature>User-friendly interface for downloading and viewing user works</Feature>
					</GridItem>
					<GridItem>
		<Icon><BsFillBasket3Fill/></Icon>
     <Feature>A convenient basket of goods, where the user at any time has the function of viewing the contents of the basket and can change it at his own discretion</Feature>
					</GridItem>
					<GridItem>
		<Icon><MdPalette/></Icon>
    <Feature>A convenient catalog of works, which contains mechanisms for categorizing and searching for works by types, tags and other parameters, for easy selection of works of interest, pagination</Feature>
					</GridItem>
					<GridItem>
		<Icon>< BiSolidLike/></Icon>
    <Feature>Send likes to the work, for feedback and development of the creative community</Feature>
					</GridItem>
				</GridContainer>
			</AdvantagesContainer>
			<PicturesContainer>
				<CarouselContainer>
								<CardsContainer >
				<Carousel
					swipeable={true}
					swipeScrollTolerance = {10}
					draggable={true}
					responsive={responsive}
					keyBoardControl={true}
					infiniteLoop = {true}
					thumbWidth = {10}
				>
					<Pictures src={Art7}/>
					<Pictures src={Art}/>
					<Pictures src={Art2}/>
					<Pictures src={Art5}/>
					<Pictures src={Art12}/>
					<Pictures src={Art4}/>
					<Pictures src={Art6}/>
					<Pictures src={Art9}/>
					<Pictures src={Art10}/>
					<Pictures src={Art13}/>
				</Carousel>
		</CardsContainer>
			</CarouselContainer>
			</PicturesContainer>
			<VideoContainer>
				<Player
					playsInline
					poster={Art11}
					src={Video}
				/>
			</VideoContainer>
		</WorkContainer>
  </main>


</LocomotiveScrollProvider>
	)
}

export default ArtPage;
