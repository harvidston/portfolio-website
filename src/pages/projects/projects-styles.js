import styled from 'styled-components';
import {motion} from 'framer-motion';

export const NavigationButton = styled.button`
	position: absolute;
	background: red;
	border: none;
	cursor: pointer;
	background: transparent;
	margin-left: 110px;
	margin-bottom: 230px;
	height: 880px;
	width: 1520px;
	z-index: 11;

`
export const ProjectsContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100%;

	background: #060508;
	background: #F5F3EF;
	color: white;
	font-size: 30px;
	background: red;
	background: #B99EA2;

	background: #29322A;
`
export const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 10%;
	width: 100%;
	text-transform: uppercase;

`
export const Title = styled.div`
	font-size: 110px;

`
export const ContentContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	
	height: 100vh;
	width: 100%;
	color: transparent;
	background: #29322A;
`
export const Technology = styled(motion.div)`

	display: flex;
	white-space: nowrap;

	align-items: center;
	justify-content: center;
	rotate: 90deg;
	margin-bottom: 100px;

	padding: 5px 10px;
	font-size: 16px;

	color: white;
	background: black;
	opacity: 40%;
	width: fit-content;
`

export const TechnologyContainer = styled.div`
	display: flex;
	align-items: center;;
	flex-direction: column;
	width: 30px;
	user-select: none;
	background: red;
`

export const ProjectName = styled(motion.text)`
	z-index: 999;
`
export const ProjectNameContainer = styled(motion.div)`
	position: absolute;
	display: flex;
	align-items: center;
	align-items: flex-end;
	height: 60%;
	width: 75%;
	background: transparent;
	font-size: 150px;
	text-transform: uppercase;
	text-transform: uppercase;

	cursor: default;
	user-select: none; 
	text-shadow: 1px 1px 1px #FA7F28,
		1px 2px 1px black,
		1px 3px 1px black,
		1px 4px 1px black,
		1px 5px 1px black,
		1px 6px 1px black,
		1px 7px 1px black,
		1px 8px 1px black,
		1px 9px 1px black,
		1px 10px 1px black,
		1px 18px 6px rgba(1, 1, 1, 0.1),
		1px 22px 10px rgba(1, 1, 1, 0.2),
		1px 25px 35px rgba(1, 1, 1, 0.2),
		1px 30px 60px rgba(1, 1, 1, 0.1);
	z-index: 10;
`
export const PictureContainer = styled.div`
	height: 90%;
	margin-top: 50px;
`
export const Picture = styled(motion.img)`
	height: 100%;
	width: 100%;
	object-fit: contain;
`

