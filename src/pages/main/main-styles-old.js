import styled, { css, keyframes } from "styled-components";
import {NavLink, Link} from 'react-router-dom';
import {motion} from 'framer-motion';

export const Icon = styled.div`
	font-size: 80px;
	margin-top: 10px;
`
export const HeaderContainer = styled.div`
	position: absolute;
	top:0;
	display: flex;
	justify-content: end;
	height: 50px;
	width: 100%;
	background: transparent;
	padding-right: 50px;
	padding-top: 10px;
`

export const SocialLink = styled(Link)`
	height: fit-content;
	height: 50px;
	font-size: 20px;
	color: black;
	cursor: pointer;
	text-decoration: none;
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
`

export const MainContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100vh;
	width: 100%;
	background: #060508;
	background: #F5F3EF;
	//background: #FFF6E9;
	//background: #FFFAF6;
	background: #0F0E0D;
	//background-image: linear-gradient(to top, #849db0, #97b5b9, #b7cac3, #d9ded5, #f5f3ef);
	background: #29322A;
	background:  #F5F3EF;
	background: white;
`
export const ContentContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 800px;
	width: 1600px;
`
export const FullNameContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 500px;
	width: 100%;
`
export const LastName = styled.text`
	font-size: 170px;
	color: #080808;
	cursor: default;
	text-transform: uppercase;
	z-index: 3;
	color: #F5F3EF;
	-webkit-text-stroke: 1.3px #201F1E;

	color:  #29322A;
	color: black;

	//text-shadow: 1px 1px 1px black,
	//1px 2px 1px black,
	//1px 3px 1px black,
	//1px 4px 1px black,
	//1px 5px 1px black,
	//1px 6px 1px black,
	//1px 7px 1px black,
	//1px 8px 1px black,
	//1px 9px 1px black,
	//1px 10px 1px black,
	//1px 11px 1px black,
	//1px 12px 1px black,
	//1px 18px 6px rgba(1, 1, 1, 0.1),
	//1px 22px 10px rgba(1, 1, 1, 0.2),
	//1px 25px 35px rgba(1, 1, 1, 0.2),
	//1px 30px 60px rgba(1, 1, 1, 0.1);
`
export const Name = styled.text`
	font-size: 170px;
	color: #080808;
	cursor: default;
	text-transform: uppercase;
	z-index: 3;
	color: #F5F3EF;
	color:  #29322A;
	color: black;

	//-webkit-text-stroke: 1.3px #201F1E;

	//text-shadow: 1px 1px 1px black,
	//1px 2px 1px black,
	//1px 3px 1px black,
	//1px 4px 1px black,
	//1px 5px 1px black,
	//1px 6px 1px black,
	//1px 7px 1px black,
	//1px 8px 1px black,
	//1px 9px 1px black,
	//1px 10px 1px black,
	//1px 11px 1px black,
	//1px 12px 1px black,
	//1px 18px 6px rgba(1, 1, 1, 0.1),
	//1px 22px 10px rgba(1, 1, 1, 0.2),
	//1px 25px 35px rgba(1, 1, 1, 0.2),
	//1px 30px 60px rgba(1, 1, 1, 0.1);
`
export const NameContainer = styled.div`
	display: flex;
	justify-content: start;
	height: 30%;
	width: 90%;

`
export const DescriptionContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 10%;
	width: 80%;
	margin-top: 40px;
`
export const Description = styled.text`
	cursor: default;
	text-align: center;
    white-space: nowrap;

	font-size: 40px;
	color: transparent;
	text-shadow: 1px 1px 1px #FA7F28,
		1px 2px 1px black,
		1px 3px 1px black,
		1px 4px 1px black,
		1px 5px 1px black,
		1px 6px 1px black,
		1px 7px 1px black,
		1px 18px 6px rgba(1, 1, 1, 0.1),
		1px 22px 10px rgba(1, 1, 1, 0.2),
		1px 25px 35px rgba(1, 1, 1, 0.2),
		1px 30px 60px rgba(1, 1, 1, 0.1);
`
export const LastNameContainer = styled.div`
	display: flex;
	justify-content: end;
	height: 30%;
	width: 80%;
`
export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100px;
	margin-top: 30px;
`
export const Mask = styled.span`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 80px;
	width: 280px;
	border-radius: 20px;
	border: 1px solid #171717;
	font-size: 20px;
	font-weight: 200;
	color: #080808;
	cursor: pointer;
	outline: none;
	overflow: hidden;
	color: #F5F3EF;
	color: #080808;
	background: black;
	background: transparent;
	//color: #F5F3EF;
	//border: none;
`
export const ResumeButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 80px;
	width: 280px;
	background: #FA7F22;
	background-image: linear-gradient(to right top, #f8ba4e, #f9ac41, #f99e37, #fa8f2e, #fa7f28);
	//border-radius: 40px;
	//border: 1px solid #171717;
	border-radius: 20px;
	border: none;
	font-size: 20px;
	font-weight: 200;
	color: #080808;
	cursor: pointer;
	outline: none;

	-webkit-mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png");
	mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png");
	-webkit-mask-size: 2300% 100%;
	mask-size: 1000% 100%;
	animation: anim1 0.7s steps(22) forwards;
	background: #F5F3EF;
	color: black;

	@keyframes anim1 {
		from {
			-webkit-mask-position: 100% 0;
			mask-position: 100% 0;
		}
		to {
			-webkit-mask-position: 0 0;
			mask-position: 0 0;
		}
	}
	@keyframes anim2 {
		from {
			-webkit-mask-position: 0 0;
			mask-position: 0 0;
		}
		to {
			-webkit-mask-position: 100% 0;
			mask-position: 100% 0;
		}
	}

	&:hover{
		animation: anim2 0.8s steps(22) forwards;
	}

`
export const Symbol = styled.div`
	font-size: 22px;
`


