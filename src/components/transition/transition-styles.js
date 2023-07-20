import styled from 'styled-components';
import {motion} from 'framer-motion';

export const ThirdLayer = styled(motion.div)`
	position: fixed;
	top: 0;
	bottom: 0;
	width: 100vw;
	height: 100vh;
	background: black;
	background: rgba(0, 0, 0, 0.3);
	z-index: 30;
`
export const SecondLayer = styled(motion.div)`
	position: fixed;
	top: 0;
	bottom: 0;
	width: 100vw;
	height: 100vh;
	background: orange;
	background: rgba(0, 0, 0, 0.3);
	z-index: 20;
`
export const FirstLayer = styled(motion.div)`
	position: fixed;
	top: 0;
	bottom: 0;
	width: 100vw;
	height: 100vh;
	//background: orange;
	//transform-origin: top;
	background: #29322A;
`
export const SlideIn = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: black;
	transform-origin: top;
`
export const SlideOut = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-image: linear-gradient(to right top, #f8ba4e, #f9ac41, #f99e37, #fa8f2e, #fa7f28);
	transform-origin: bottom;

`
