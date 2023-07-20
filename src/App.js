import React, {useRef} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Router from './components/router';
import Navigation from './components/navigation';
import AnimatedCursor from "react-animated-cursor"
import { AnimatePresence} from 'framer-motion';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css';

import './global-styles.css';

function App() {
const containerRef = useRef(null)

  return (
	  <AnimatePresence mode="wait" initial={true}>
		<BrowserRouter>
			<Router/>
			<AnimatedCursor
				innerSize={0}
				outerSize={17}
				color='250, 127, 40'
				outerAlpha={1}
				innerScale={0}
				outerScale={4}
				clickables={[
					'a',
					'input[type="text"]',
					'input[type="email"]',
					'input[type="number"]',
					'input[type="submit"]',
					'input[type="image"]',
					'label[for]',
					'select',
					'text',
					'button',
					'.link'
				]}
				trailingSpeed={8}
				showSystemCursor={true}
				outerStyle={{
					mixBlendMode:'difference',
				}}

			/>
			<LocomotiveScrollProvider options={{smooth: true}} watch={[]} containerRef={containerRef} />
			<Navigation/>

		</BrowserRouter>
	  </AnimatePresence>
  );
}

export default App;
