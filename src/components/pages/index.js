import React from 'react';
import About from '../About/About';
import Contact from '../Contact';
import Music from '../Music';
import Navbar from '../Navbar/Navbar'
import Pictures from '../Pictures/Pictures';
import VideoSection from '../VideoSection/VideoSection';

function Index() {

	return (
		<div>
			<Navbar />
			<VideoSection />
			<About />
			<Pictures />
			<Music />
			<Contact />
		</div>
	)
}

export default Index
