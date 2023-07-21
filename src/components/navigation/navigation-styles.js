import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-scroll';

export const NavigationContainer = styled.nav`
	position:fixed;
	bottom: 0;
	right: 0;
	display: flex;
	height: 100%;
	width: 10vw;
	justify-content: center;
	align-items: center;
	background: transparent;
	z-index: 1;
	@media screen and (max-width: 500px){
		position: fixed;
		bottom: 0;
		//right: 100px;
		height: 10%;
		width: 100%;
	}
`

export const NavigationLogo = styled.div`
	display: flex;
	height: 10px;
	width: 10px;
`

export const Menu = styled.div`
	display: flex;
	flex-direction: column;
	width: 80px;
	height: 330px;
	justify-content: center;
	align-items: center;
	background: #131213;
	border-radius: 30px;
	background: rgba(8, 8, 8, 0.8);
	background: rgba(0, 0, 0, 0.5);
	//background: #080808;
	backdrop-filter: blur(5px);
	border: 1px solid #2b2d2e;

	@media screen and (max-width: 500px){
		width: 400px;
		height: 80px;
		flex-direction: row;
	}

`

export const MenuItem = styled(NavLink)`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 15px;
	font-size: 35px;
	padding: 0 0 0 0;
	cursor: pointer;
	color: #F5F3EF;
	transition: 0.5s;
	border-radius: 10px;
	padding: 5px;
	background: transparent;
	border: none;

	&.active {
		color: #FA7F28;
	}
	&:hover{
	}
	@media screen and (max-width: 500px){
		margin: 20px;
	}

`
export const ItemIcon = styled.div`
	display: flex;
	justify-content: end;
	width: 35%;
	font-size: 18px;


`
export const ItemTitle = styled.div`
	width: 60%;
	display: flex;
	justify-content: start;

`






export const AuthorizationWidgetContainer = styled.div`
	position: absolute;
	height: 60px;
	display: flex;
	right: 5vw; margin-top: 10px;
`
export const AuthorizationWidget = styled(NavLink)`
	display: flex;
	height: 100%;
	width: 200px;

	background: #171616;
	text-decoration: none;
	border-radius: 15px;
	box-shadow: 0 0 30px 5px #000;
	border: 1px solid #2b2d2e;

	align-items: center;
	text-align: center;
	justify-content: center;
	justify-content: space-between;
	overflow: hidden;

	cursor: pointer;
	user-select: none;
	-moz-user-select: none;

	transition: 0.5s;

	&:hover{

	}
`
export const WidgetIcon = styled.div`
	display: flex;
	justify-content: end;
	width: 40%;
	color: #F0EEED;
	color: #899c88;
	opacity: 80%;
	font-size: 16px;
	margin-right: 10px;
`
export const WidgetText = styled.div`
	display: flex;
	width: 60%;
	justify-content: start;
	color: #c4c4c4;
	font-size: 16px;
`



export const Space = styled.div`
	margin: 0 30px;
`
export const AddPublicationBtn = styled(NavLink)`
	display: flex;
	position: absolute;
	border-radius: 27px;
	height: 70px;
	width: 70px;
	color: #F0EEED;
	background: #899c88;
	//background: #473F46;
	align-items: center;
	justify-content: center;
	font-size: 26px;
	top: 40px;
	border: 8px solid #000000;
	cursor: pointer;
	transition: 0.5s;
	background-image: linear-gradient(to right top, #628585, #6a8b86, #739186, #7d9787, #899c88);
	//border: 1px solid #2b2d2e;
	&:hover{
		//scale: 1.1;
	}
`

