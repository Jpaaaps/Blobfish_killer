import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Music from '../Music/Music'
import Navbar from '../Navbar/Navbar'
import Pictures from '../Pictures/Pictures'
import Video from '../Video/Video'
import VideoSection from '../VideoSection/VideoSection'

function Index() {

	return (
		<div>
			<Navbar />
			<VideoSection />
			<About />
			<Pictures />
			<Music />
			<Video />
			<Contact />
		</div>
	)
}

export default Index
