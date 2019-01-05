import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link as RouterLink } from "react-router-dom"
import Swiper from 'react-id-swiper'
import { MagneticScroll, MagneticPage } from 'react-magnetic-scroll'
import VK, { Post } from 'react-vk'
import Main from './Main.jsx'
import Navigation from './navigation.jsx'


import 'normalize.css'
import './index.css'
import * as Scroll from 'react-scroll'
let Link       = Scroll.Link
let Element    = Scroll.Element
let Events     = Scroll.Events
let scroll     = Scroll.animateScroll
let scrollSpy  = Scroll.scrollSpy



export default class App extends Component {
	render() {
		return (
			<Router>
				<div className='app'>
					<Route exact path="/" component={Main} />
				</div>
			</Router>
		);
	}
}
