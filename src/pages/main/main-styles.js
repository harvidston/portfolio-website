import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

export const FooterContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 20px;
	width: 100%;
	background: #29322A;
`
export const RightsContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	font-size: 17px;
	color: gray;
	color: black;
	color: rgba(0, 0, 0, 0.4)

`
export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 104vh;
	width: 100%;
	background: #060508;
	background: #29322A;
	overflow: hidden;
`
export const FirstRow = styled.div`
	display: flex;
	justify-content: center;
	width: 80%;
	display: grid;
	justify-content: center;
	align-items: center;
	grid-template-columns: 400px 1100px 400px ;
	grid-template-rows: 400px  ;
	column-gap: 20px;
	row-gap: 20px;
	margin-bottom: 20px;
	margin-top: 30px;
`
export const SecondRow = styled.div`
	display: flex;
	justify-content: center;
	width: 80%;
	display: grid;
	justify-content: center;
	align-items: center;
	grid-template-columns: 1100px 400px 400px ;
	grid-template-rows: 400px  ;
	column-gap: 20px;
	row-gap: 20px;
	margin-bottom: 20px;
`
export const ThirdRow = styled.div`
	display: flex;
	height: 80%;
	width: 80%;
	display: grid;
	justify-content: center;
	align-items: center;
	grid-template-columns: 960px 960px ;
	grid-template-rows: 400px  ;
	column-gap: 20px;
	row-gap: 20px;

`
export const NameWidget = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	height: 400px;
	width: 1100px;
	background-image: linear-gradient(to right top, #201f1e, #1d1c1b, #191817, #161514, #121110);
	border-radius: 60px;
`
export const LinksWidget = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	height: 400px;
	width: 960px;
	background-image: linear-gradient(to right top, #201f1e, #1d1c1b, #191817, #161514, #121110);
	border-radius: 60px;
`
export const NameContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	height: 55%;
	width: 80%;
	margin-bottom: 35px;
`
export const Name = styled.text`
	font-size: 130px;
	color: #080808;
	cursor: default;
	text-transform: uppercase;
	color: #F5F3EF;

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
	margin-bottom: 20px;
`

export const PictureWidget = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 400px;
	width: 400px;
	background-image: linear-gradient(to right top, #201f1e, #1d1c1b, #191817, #161514, #121110);
	border-radius: 60px;
	margin-right: 20px;
`
export const EducationWidget = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 400px;
	width: 1100px;
	background-image: linear-gradient(to right top, #201f1e, #1d1c1b, #191817, #161514, #121110);
	border-radius: 60px;
`
export const BackgroundTitle = styled.div`
	opacity: 10%;
	font-size: 87px;
	-webkit-text-stroke: 2px white;
	font-family: 'Monument Extended';
	text-transform: uppercase;
	cursor: default;
	z-index: 1;
`
export const Title = styled.div`
	display: flex;
	justify-content: end;
	height: 30vh;
	width: 120vh;
	margin-top: 400px;
	opacity: 10%;
	font-size: 140px;
	-webkit-text-stroke: 2px white;
	font-family: 'Monument Extended';
	text-transform: uppercase;
	cursor: default;
	transform: rotate(90deg);

`
export const InfoTitle = styled.text`
	position: absolute;
	font-size: 60px;
	text-transform: uppercase;
	z-index: 4;
	color: #F5F3EF;
`
export const InfoTitle2 = styled.text`
	position: absolute;
	font-size: 60px;
	text-transform: uppercase;
	z-index: 3;
	-webkit-text-stroke: 1px #F5F3EF;
	margin-top: 5px;
	margin-left: 5px;

`
export const InfoTitle3 = styled.text`
	position: absolute;
	text-transform: uppercase;
	font-size: 60px;
	z-index: 2;
	-webkit-text-stroke: 1px #F5F3EF;
	margin-top: 8px;
	margin-left: 8px;
`
export const TextContainer = styled.div`
	display: flex;
	border-radius: 70px;
	height: 80%;
	width: 80%;

	background: transparent;
	backdrop-filter: blur(2px);
	border: 1px solid #FA7F28;
`
export const MainTransparentContainer = styled.div`
	position: absolute;
	z-index: 2;
	display: flex;
	height: 100vh;
	width: 100%;
	background: transparent;
	background: transparent;
	//backdrop-filter: blur(1px);

`

export const PictureBackContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 60%;
	width: 60%;
	background: transparent;
	backdrop-filter: blur(2px);
	border: 1px solid #F5F3EF;
	border-radius: 70px;
	//border-radius: 20%;
`

export const InfoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100vh;
	width: 60%;


`

export const Picture = styled.img`
	height: 300px;
	object-fit: cover;
	border-bottom-right-radius: 30%;
	border-top-left-radius: 30%;
`
export const SlideArrowButton = styled.button`
	display: flex;
	align-items: center;
	text-align: center;
	justify-content: center;
	height: 50px;
	width: 50px;
	border-radius: 50%;
	border: none;
	margin-right: 30px;
	margin-left: 30px;
	cursor: pointer;
	background: #F5F3EF;
	font-size: 17px;
	backdrop-filter: blur(10px);
`


export const LastName = styled.text`
	font-size: 170px;
	color: #080808;
	cursor: default;
	text-transform: uppercase;
	z-index: 3;
	color: #F5F3EF;
	-webkit-text-stroke: 1.3px #201F1E;

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
`


export const LastNameContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 50%;
	width: 80%;
`
export const ResumeWidget = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 400px;
	width: 400px;
	background-image: linear-gradient(to right top, #201f1e, #1d1c1b, #191817, #161514, #121110);
	border-radius: 60px;
`
export const JobTitle = styled.text`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 40px;
	color: #FA7F28;
	text-transform: uppercase;
	text-shadow: 1px 1px 1px black,
		1px 2px 1px black,
		1px 3px 1px black,
		1px 4px 1px black,
		1px 5px 1px black,
		1px 6px 1px black,
		1px 18px 6px rgba(1, 1, 1, 0.1),
		1px 22px 10px rgba(1, 1, 1, 0.2),
		1px 25px 35px rgba(1, 1, 1, 0.2),
		1px 30px 60px rgba(1, 1, 1, 0.1);
	cursor: default;
`
export const WidgetText = styled.div`
	display: flex;
	align-items: center;
	width: 80%;
	font-size: 40px;
	color: #F5F3EF;
	text-shadow: 1px 1px 1px black,
		1px 2px 1px black,
		1px 3px 1px black,
		1px 4px 1px black,
		1px 5px 1px black,
		1px 6px 1px black,
		1px 18px 6px rgba(1, 1, 1, 0.1),
		1px 22px 10px rgba(1, 1, 1, 0.2),
		1px 25px 35px rgba(1, 1, 1, 0.2),
		1px 30px 60px rgba(1, 1, 1, 0.1);
	cursor: default;
`
export const WidgetDescription = styled.div`
	display: flex;
	justify-content: start;
	width: 80%;
	margin-top: 40px;
	color: #2b2d2e;
	color: gray;
	//color: #FA7F28;
	font-size: 16px;
	cursor: default;
`
export const PersonalLink = styled(Link)`
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

	&:hover{

		color: lightgray;
		scale: 1.1;
	}


`
export const Button = styled(motion.button)`
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

	&:hover{

		color: #FA7F28;
		color: lightgray;
		//color: gray;
	}

`
export const Icon = styled.div`
	font-size: 80px;
	margin-top: 10px;
`
export const EducationContainer = styled.div`
	width: 80%;	
	margin-bottom: 70px;	
`
export const Period = styled.div`
	width: fit-content;
	background: #201f1e;
	padding: 5px 10px;
	border-radius: 10px;
	font-size: 16px;
	color: gray;
	margin-bottom: 10px;
	cursor: default;
`
export const BachelorDegree = styled.div`
	font-size: 40px;
	text-transform: uppercase;
	color: #F5F3EF;
	margin-bottom: 10px;
    white-space: nowrap;
	text-shadow: 1px 1px 1px black,
		1px 2px 1px black,
		1px 3px 1px black,
		1px 4px 1px black,
		1px 5px 1px black,
		1px 6px 1px black,
		1px 18px 6px rgba(1, 1, 1, 0.1),
		1px 22px 10px rgba(1, 1, 1, 0.2),
		1px 25px 35px rgba(1, 1, 1, 0.2),
		1px 30px 60px rgba(1, 1, 1, 0.1);
	cursor: default;

`
export const Faculty = styled.div`
	font-size: 18px;
	color: gray;
	cursor: default;
	margin-bottom: 5px;
	text-transform: uppercase;
	text-shadow: 1px 1px 1px black,
		1px 2px 1px black,
		1px 3px 1px black,
		1px 4px 1px black,
		1px 5px 1px black,
		1px 18px 6px rgba(1, 1, 1, 0.1),
		1px 22px 10px rgba(1, 1, 1, 0.2),
		1px 25px 35px rgba(1, 1, 1, 0.2),
		1px 30px 60px rgba(1, 1, 1, 0.1);
`
export const University = styled.div`
	font-size: 18px;
	color: gray;
	cursor: default;
	text-transform: uppercase;
    white-space: nowrap;
	text-shadow: 1px 1px 1px black,
		1px 2px 1px black,
		1px 3px 1px black,
		1px 4px 1px black,
		1px 5px 1px black,
		1px 22px 10px rgba(1, 1, 1, 0.2),
		1px 25px 35px rgba(1, 1, 1, 0.2),
		1px 30px 60px rgba(1, 1, 1, 0.1);
`
export const LinksContainer = styled.div`
	display: flex;
	align-items: center;	
	justify-content: center;
	width: 80%;
`
export const EmailCopiedMessage = styled(motion.div)`
	position: absolute;
	bottom: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	color: white;
	background: black;
	border-radius: 20px;
	background: rgba(250,127,40);

	padding: 20px;
	cursor: default;
`
