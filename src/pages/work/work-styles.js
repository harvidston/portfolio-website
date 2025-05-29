import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';


export const WorkContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 4500px;
	width: 100%;
	color: black;
	background: #171615;
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
		height: 3900px;
	}
	@media screen and (max-width: 1800px){
		height: 3800px;
	}
	@media screen and (max-width: 500px){
		height: 2550px;
	}
`
export const ProjectDescriptionContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 250px;
	width: 1300px;
	margin-top: 60px;
	cursor: default;
	margin-bottom: 50px;
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){
		height: 600px;
		width: 90%;
		flex-direction: column;
		justify-content: start;
		margin-top: 0;
	}
`
export const DescriptionItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	height: 100px;
	width: 410px;
	cursor: default;
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){
		width: 100%;
		height: 100%;
	}
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
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){
	}
`
export const PicturesContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 600px;
	width: 100%;
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){
		height: 300px;
		justify-content: start;
		align-items: flex-start;
	}
`
export const Pictures = styled(motion.img)`
	height: 1000px;
	width: 1000px;
	object-fit: contain;
	margin-right: 80px;
	//filter: drop-shadow(0 0 0.55rem #FA7F28);
	cursor: grab;
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){
		width: 100%;
		height: 200px;
		margin-left: 0;
	}
`
export const Services = styled(motion.div)`
	font-size: 15px;
	font-weight: 300;
	text-transform: uppercase;
	margin-bottom: 20px;
	color: lightgray;
	color: #FA7F28;
    white-space: nowrap;
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){
	}

`
export const RoleContainer = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	border-top: 1px solid #FA7F28;
	font-weight: 300;
	text-overflow: ellipsis;
	padding-top: 30px;
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){
		padding-top: 0;
		margin-bottom: 10px;
	}
`
export const Role = styled(motion.div)`
	font-size: 16px;
	color: white;
	font-family: 'Unbounded', cursive;
	font-weight: 300;
	text-align: justify;
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){
	}
`
export const ProjectNameContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 200px;
	width: 80%;
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){
		text-align: center;
		width: 100%;
	}
`
export const ProjectName = styled(motion.text)`
	color: white;
	font-size: 90px;
	text-transform: uppercase;
	cursor: default;
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){
		font-size: 45px;
	}
`
export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 700px;
	width: 100%;
	color: white;
	background: #171615;
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){
		height: 680px;
	}
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
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){
		display: none;
	}

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
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){
		width: 90%;

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
`
export const GridContainer = styled.div`
	display: flex;
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
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){
		width: 100%;
		height: 1000px;
		margin-top: 50px;
		grid-template-columns: 150px 150px;
		grid-template-rows: 150px 150px 150px 150px;
		row-gap: 70px;
	}
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
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){
		height: 200px;
		width: 150px;
		border-radius: 30px;
	}


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
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){
		height: 70px;
		width: 70px;
		margin-right: 0;
		background: transparent;
	}
`
export const Feature = styled.div`
	width: 80%;
	font-size: 15px;
	font-family: 'Unbounded', cursive;
	font-weight: 300;
	text-transform: none;
	text-align: justify;

	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){
		font-size: 10px;
		text-align: center;

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
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){
		height: 100px;
		width: 100px;
	}
`
export const CarouselContainer = styled.div`
	display: flex;
	align-items: center;
	height: 800px;
	width: 100%;
	//background: red;
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){
		height: 800px;
		background: #171615;
	}
`
export const CardsContainer = styled.div`
	width: 87%;
	color: black;
	margin-left: 150px;
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){
		margin-left: 0;
		//margin-bottom: 300px;
		padding: 0;
		//height: 50%;
		width: 100%;
		margin-bottom: 650px;

	}
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
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){
		margin-left: 0;
		height: 450px;
		width: 100%;
	}
`
export const Picture = styled(motion.img)`
	height: 100%;
	width: 100%;
	object-fit: contain;
	margin-right: 80px;
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){
		margin-right: 20px;
	}
`
export const VideoContainer = styled.div`
	position: relative;
	display: flex;
	height: 2000px;
	width: 95%;
	justify-content: center;
	align-items: center;
	user-select: none;
	@media screen and (max-width: 2500px){
	}
	@media screen and (max-width: 2000px){
	}
	@media screen and (max-width: 1800px){
	}
	@media screen and (max-width: 500px){
		margin-bottom: 900px;
		height: 100%;
		width: 100%;
	}

`

