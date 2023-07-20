import React from 'react';
import {SkillsContainer , Cards2Container, CarouselContainer, TextContainer, Icon, Title,CardsContainer, ContentContainer, Card} from './skills-styles';
import {FaReact, FaPython} from 'react-icons/fa';
import {SiDjango, SiJavascript, SiPostgresql, SiLinux, SiNeovim, SiGithub, SiPostman} from 'react-icons/si';
import {SiRedux} from 'react-icons/si';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const SkillsSection = () => {

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
		<SkillsContainer data-scroll-section    id='skills'>
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
				<Card>Python&nbsp;<Icon><FaPython/></Icon></Card>
				<Card>Django&nbsp;<Icon><SiDjango/></Icon></Card>
				<Card>Java Script&nbsp;<Icon><SiJavascript/></Icon></Card>
				<Card>React Js&nbsp;<Icon><FaReact/></Icon></Card>
	</Cards2Container>
	<Cards2Container>
				<Card>React Native&nbsp;<Icon><FaReact/></Icon></Card>
				<Card>Redux&nbsp;<Icon><SiRedux/></Icon></Card>
				<Card>Postgre SQL&nbsp;<Icon><SiPostgresql/></Icon></Card>
				<Card>Linux&nbsp;<Icon><SiLinux/></Icon></Card>
	</Cards2Container>
	<Cards2Container>
				<Card>NeoVim&nbsp;<Icon><SiNeovim/></Icon></Card>
				<Card>GitHub&nbsp;<Icon><SiGithub/></Icon></Card>
				<Card>Postman&nbsp;<Icon><SiPostman/></Icon></Card>
	</Cards2Container>

</Carousel>
</CardsContainer>


	</CarouselContainer>

			<TextContainer>
				<Title>Skills <br/>&<br/> Tools	</Title>
			</TextContainer>

			</ContentContainer>
		</SkillsContainer>
	)
}

export default SkillsSection;
