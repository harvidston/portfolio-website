import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';


export const WorkContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 4200px;
	width: 100%;
	background: red;
	background: #060508;
	//background: white;
	color: black;

	background: #171615;
`
export const ProjectDescriptionContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 250px;
	width: 1300px;
	margin-top: 60px;
	cursor: default;
	margin-bottom: 50px;
`
export const DescriptionItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	height: 100px;
	width: 410px;
	cursor: default;
`
export const PicturesGrid = styled.div`
	height: 600px;
	width: 100%;
	display: grid;
	justify-content: center;
	align-items: center;
	border-radius: 30px;
	color: black;
	grid-template-columns: 800px 800px 800px;
	grid-template-rows: 400px 400px; 
	column-gap: 10px;
	row-gap: 30px;
`
export const PicturesContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 600px;
	width: 100%;
`
export const Pictures = styled(motion.img)`
	height: 1000px;
	width: 1000px;
	object-fit: contain;
	margin-right: 80px;
	//filter: drop-shadow(0 0 0.55rem #FA7F28);
	cursor: grab;
`
export const Services = styled(motion.div)`
	font-size: 15px;
	font-weight: 300;
	text-transform: uppercase;
	margin-bottom: 20px;
	color: lightgray;
	color: #FA7F28;
    white-space: nowrap;

`
export const RoleContainer = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	border-top: 1px solid #FA7F28;
	font-weight: 300;
	text-overflow: ellipsis;
	padding-top: 30px;
`
export const Role = styled(motion.div)`
	font-size: 16px;
	color: white;
	font-family: 'Unbounded', cursive;
	font-weight: 300;
	text-align: justify;
`
export const ProjectNameContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 200px;
	width: 80%;
`
export const ProjectName = styled(motion.text)`
	color: white;
	font-size: 90px;
	text-transform: uppercase;
	cursor: default;
`
export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: end;
	justify-content: center;
	align-items: center;
	height: 700px;
	width: 100%;
	color: white;
	background: #171615;
`
export const GitHubLink = styled(Link)`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 40px;
	left: 65px;
	border-radius: 50%;
	height: 180px;
	width: 180px;
	background: red;
	text-decoration: none;	
	color: white;
	font-size: 18px;
	cursor: pointer;

	background: #698a86;
	background-image: linear-gradient(to right top, #628585, #6a8b86, #739186, #7d9787, #899c88);
	text-transform: uppercase;
	font-family: 'Unbounded', cursive;
	font-weight: 600;


`

export const AdvantagesContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 1000px;
	width: 80%;
	color: white;
	font-size: 20px;
	text-transform: uppercase;
	font-family: 'Tektur', cursive;
`
export const Cards2Container = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	justify-content: center;
	align-items: center;
	border-radius: 30px;
	color: black;
	grid-template-columns: 450px 450px ;
	grid-template-rows: 450px 450px; 
	column-gap: 10px;
	row-gap: 10px;
`
export const GridContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 80%;
	display: grid;
	justify-content: center;
	align-items: center;
	grid-template-columns: 400px 400px 400px 400px;
	grid-template-rows: 400px 400px ;
	column-gap: 20px;
	row-gap: 20px;
	margin-bottom: 20px;
	margin-top: 30px;
`
export const GridItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	height: 400px;
	width: 400px;
	background-image: linear-gradient(to right top, #201f1e, #1d1c1b, #191817, #161514, #121110);
	border-radius: 60px;


`
export const Icon = styled.button`
	font-size: 40px;
	color: orange;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 200px;
	width: 200px;
	border-radius: 60px;
	margin-right: 20px;
	border: none;
	cursor: pointer;
	background: #201f1e;
	color: black;	
	transition: 0.5s;
	margin-bottom: 20px;
	margin-top: 30px;
	color: #FA7F28;
	&:hover{
		color: lightgray;
		scale: 1.1;
	}
`
export const Feature = styled.div`
	width: 80%;
	font-size: 15px;
	font-family: 'Unbounded', cursive;
	font-weight: 300;
	text-transform: none;
	text-align: justify;

`
export const CardsContainer = styled.div`
	width: 87%;
	color: black;
`
export const Card = styled(motion.div)`
	display: flex;
	align-items: center;
	text-align: center;
	justify-content: center;
	height: 450px;
	width: 450px;
	border-radius: 60px;
	color:#F5F3EF;
	background: black;
	background: #131213;
	font-size: 30px;
	font-size: 40px;
	cursor: grab;
	user-select: none;
	background-image: linear-gradient(to right top, #201f1e, #1d1c1b, #191817, #161514, #121110);
	white-space: nowrap;

`
export const CarouselContainer = styled.div`
	display: flex;
	margin-left: 250px;
	align-items: center;
	height: 800px;
	width: 100%;
`
export const PictureContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	align-items: flex-start;
	height: 80vh;
	width: 65%;
	user-select: none;

`
export const Picture = styled(motion.img)`
	height: 100%;
	width: 100%;
	object-fit: contain;
	margin-right: 80px;
`
export const VideoContainer = styled.div`
	position: relative;
	display: flex;
	height: 800px;
	width: 1200px;
	justify-content: center;
	align-items: center;
	user-select: none;
`

export const PictureContainerMac = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50vh;
	width: 80%;
	user-select: none;
`
export const NavigationButton = styled.button`
	background: red;
	border: none;
	cursor: pointer;
	background: transparent;
	margin-left: 30px;
	height: 800px;
	width: 1550px;
	color: white;
`

