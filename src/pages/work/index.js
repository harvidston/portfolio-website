import React, {useRef} from 'react';
import {WorkContainer, NavigationButton} from './work-styles';
import transition from '../../components/transition';

import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useNavigate } from 'react-router-dom';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

const ArtPage = () => {

	const containerRef = useRef(null)
	const navigate = useNavigate()

	const navigationHandler = (e) => {
		e.preventDefault()
		navigate(`/`)
	}
	return( 
<LocomotiveScrollProvider
  options={
    {
		smooth: true,
		offset: ["100%", 0],
    }
  }
  watch={
    [
    ]
  }
  containerRef={containerRef}
>
  <main data-scroll-container ref={containerRef}>
		<WorkContainer>
			work page
		
		<NavigationButton onClick={navigationHandler}>Home</NavigationButton>
		</WorkContainer>
  </main>


</LocomotiveScrollProvider>
	)
}

export default ArtPage;
