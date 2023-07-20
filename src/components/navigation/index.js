import React  from 'react';
import { Menu, NavigationContainer, NavigationLogo, MenuItem} from './navigation-styles';
import {AiFillHome} from 'react-icons/ai';
import {MdMail} from 'react-icons/md';
import {MdWork} from 'react-icons/md';
import {MdDesktopMac} from 'react-icons/md';

const Navigation = () => {

	return (
		<NavigationContainer fixed ='bottom'>
			<NavigationLogo>
			</NavigationLogo>
				<Menu>
					<MenuItem to="/">
						<AiFillHome/>
					</MenuItem>
					<MenuItem to= "/skills">
						<MdDesktopMac/>
					</MenuItem>
					<MenuItem to= "/projects">
						<MdWork/>
					</MenuItem>
					<MenuItem to= "contact" smooth={true} duration={2000} spy={true}  exact='true' activestyle = 'true'>
						<MdMail/>
					</MenuItem>

				</Menu>
			<NavigationLogo>
			</NavigationLogo>
		</NavigationContainer>
	)
}

export default Navigation;
