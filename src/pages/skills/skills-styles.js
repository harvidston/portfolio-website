import styled from 'styled-components';
import {motion} from 'framer-motion';

export const SkillsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100%;
	background: #060508;
	background: #F5F3EF;
	color: white;
	font-size: 30px;
	background: #0F0E0D;
	background: #29322A;

	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){

	}
`
export const ContentContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 90%;
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){
		flex-direction: column;
		width: 100%;
		justify-content: start;
	}
`

export const CarouselContainer = styled.div`
	display: flex;
	height: 100%;
	width: 55%;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 1900px){

	}
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){
		height: 500px;
		width: 100%;
	}

`
export const CardsContainer = styled.div`
	width: 1100px;
	width: 100%;
	justify-content: center;
	text-align: center;
	align-items: center;
	border-radius: 30px;
	color: black;
	height: fit-content;
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){

	}
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
	@media screen and (max-width: 1900px){
		grid-template-columns: 350px 350px ;
		grid-template-rows: 350px 350px; 
	}
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){
		grid-template-columns: 175px 175px ;
		grid-template-rows: 175px 175px; 
	}
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
	@media screen and (max-width: 1900px){
		height: 350px;
		width: 350px;
		font-size: 30px;
	}
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){
		height: 175px;
		width: 175px;
		border-radius: 30px;
		font-size: 15px;

	}
`

export const Icon = styled.div`
	color: #FA7F28;
	margin-top: 10px;
	@media screen and (max-width: 500px){
		margin-top: 2px;
	}
`


export const TextContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: start;
	justify-content: center;
	height: 100%;
	width: 50%;
	text-align: center;
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){
		height: 200px;
		width: 300px;
	}
`
export const Title = styled.text`
	font-size: 150px;
	height: fit-content;	
	width: fit-content;
	color: #FA7F28;
	text-transform: uppercase;
	cursor: default;
	user-select: none; 
	z-index: 2;
	text-shadow: 1px 1px 1px black,
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

	@media screen and (max-width: 1900px){
		font-size: 120px;
	}
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){
		font-size: 50px;
	text-shadow: 1px 1px 1px black,
		1px 2px 1px black,
		1px 3px 1px black,
		1px 4px 1px black,
		1px 5px 1px black,
		1px 6px 1px black,
		1px 7px 1px black,
		1px 18px 6px rgba(1, 1, 1, 0.1),
		1px 22px 10px rgba(1, 1, 1, 0.2);
	}
`

export const Title2 = styled.div`
	position: absolute;
	font-size: 150px;
	height: fit-content;	
	width: fit-content;
	color: #FA7F28;
	text-transform: uppercase;
	cursor: default;
	user-select: none; 
	color: ${props => props.primary ? "#FA7F28" : "transparent"};
	color: #FA7F28;
	z-index: 1;
	margin-top: 10px;

`
export const MovingLine = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100px;
	width: 100%;
	background: #FA7F28;
	color: #060508;
	color: #F5F3EF;
	color: #FA7F28;
	text-transform: uppercase;
	font-size: 60px;
	white-space: nowrap;
	-webkit-text-stroke: 1px black;
`
