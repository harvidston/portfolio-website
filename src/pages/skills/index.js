import React, {useRef} from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import {SkillsContainer , Cards2Container, CarouselContainer, TextContainer, Icon, Title,CardsContainer, ContentContainer, Card} from './skills-styles';
import {FaReact, FaPython} from 'react-icons/fa';
import {SiDjango, SiJavascript, SiPostgresql, SiLinux, SiNeovim, SiGithub, SiPostman} from 'react-icons/si';
import {SiRedux} from 'react-icons/si';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const SkillsSection = () => {

	const containerRef = useRef(null)

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 2500, min: 1024 },
			items: 1
		},
		desktop: {
			breakpoint: { max: 4000, min: 1024 },
			items: 1
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

	return (
		<>
			<LocomotiveScrollProvider
				options={{smooth: true}}
				watch={[]}
				containerRef={containerRef}
			>
				<main data-scroll-container ref={containerRef}>
					<SkillsContainer data-scroll-section>
						<ContentContainer>
							<CarouselContainer>
								<CardsContainer >
									<Carousel
										swipeable={true}
										draggable={true}
										responsive={responsive}
										keyBoardControl={true}
									>
										<Cards2Container>
		<Card
				initial={{  scale: 0}}
				animate={{scale: 1 }}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 20,

				}} 
		whileTap={{
    scale: 0.8,
    rotate: -360,
    borderRadius: "100%"
  }}>
		Python&nbsp;<Icon><FaPython/></Icon></Card>
		<Card
				initial={{  scale: 0 }}
				animate={{scale: 1 }}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 20,
					delay: 0.3,
				}}>
		Django&nbsp;<Icon><SiDjango/></Icon></Card>
		<Card
				initial={{  scale: 0 }}
				animate={{scale: 1 }}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 20,
					delay: 0.5,
				}}>
		Java Script&nbsp;<Icon><SiJavascript/></Icon></Card>
		<Card
				initial={{  scale: 0 }}
				animate={{ scale: 1 }}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 20,
					delay: 0.8,
				}}>

		React Js&nbsp;<Icon><FaReact/></Icon></Card>
										</Cards2Container>
										<Cards2Container>
		<Card
				initial={{  scale: 0 }}
				animate={{scale: 1 }}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 20,
					delay: 2.3,
				}}>
		React Native&nbsp;<Icon><FaReact/></Icon></Card>
		<Card
				initial={{  scale: 0 }}
				animate={{scale: 1 }}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 20,
					delay: 2.6,
				}}>
		Redux&nbsp;<Icon><SiRedux/></Icon></Card>
		<Card
				initial={{  scale: 0 }}
				animate={{ scale: 1 }}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 20,
					delay: 2.9,
				}}>
		Postgre SQL&nbsp;<Icon><SiPostgresql/></Icon></Card>
		<Card
				initial={{  scale: 0 }}
				animate={{ scale: 1 }}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 20,
					delay: 3.2,
				}}>
		Linux&nbsp;<Icon><SiLinux/></Icon></Card>
										</Cards2Container>
										<Cards2Container>
		<Card
				initial={{  scale: 0 }}
				animate={{ scale: 1 }}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 20,
					delay: 4.3,
				}}>
		NeoVim&nbsp;<Icon><SiNeovim/></Icon></Card>
		<Card
				initial={{  scale: 0 }}
				animate={{ scale: 1 }}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 20,
					delay: 4.6,
				}}>
		GitHub&nbsp;<Icon><SiGithub/></Icon></Card>
		<Card
				initial={{  scale: 0 }}
				animate={{ scale: 1 }}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 20,
					delay: 4.9,
				}}>
		Postman&nbsp;<Icon><SiPostman/></Icon></Card>
										</Cards2Container>
									</Carousel>
								</CardsContainer>
							</CarouselContainer>
							<TextContainer>
								<Title>Skills <br/>&<br/> Tools	</Title>
							</TextContainer>
						</ContentContainer>
					</SkillsContainer>
				</main>
			</LocomotiveScrollProvider>
		</>
	)
}

export default SkillsSection;
