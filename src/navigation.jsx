import React, { Component } from 'react'
import './navigation.css';
import { render } from 'react-dom'
import * as Scroll from 'react-scroll'
let Link       = Scroll.Link
let Element    = Scroll.Element
let Events     = Scroll.Events
let scroll     = Scroll.animateScroll
let scrollSpy  = Scroll.scrollSpy

export default class Navigation extends Component {
	render() {
		return (
			<nav className='navigation'>
					<Link to="about-me" activeClass="active" spy={true} smooth={true} duration={1000}>
						Обо мне
					</Link>

					<Link to="mailfit" activeClass="active" spy={true} smooth={true} duration={1000}>
						MailFit
					</Link>

					<Link to="borjomi" activeClass="active" spy={true} smooth={true} duration={1000}>
						Borjomi
					</Link>

					<Link to="datravel" activeClass="active" spy={true} smooth={true} duration={1000}>
						DaTravel.com
					</Link>

					<Link to="professor" activeClass="active" spy={true} smooth={true} duration={1000}>
						Профессор Николя
					</Link>
			</nav>
		);
	}
}
