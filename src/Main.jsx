import React, { Component } from 'react'
import Typist from 'react-typist'
import Lottie from 'react-lottie'
import ReactSVG from 'react-svg'
import Social from './social.jsx'
import * as Scroll from 'react-scroll'
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage'
import Borjomi from './borjomi.jsx'
import Mailfit from './mailfit.jsx'
import Datravel from './datravel.jsx'
import Professor from './professor.jsx'
import Sidebar from "react-sidebar"

let Link       = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;

export default class Main extends React.Component {
		constructor(props) {
		super(props);
		this.state = {
			sidebarOpen: false
		};
		this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
	}

	onSetSidebarOpen(open) {
		this.setState({ sidebarOpen: open });
	}
	render() {
				let options = {
						sectionClassName:'section',
						anchors: [
							'about-me',
							'borjomi',
							'mailfit',
							'datravel',
							'professor',
							],
						delay:1000,
						navigation:false,
						scrollBar:true
				};
		return (
			<div>

			<Sidebar
				sidebar={
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
						Шоу Профессора Николя
					</Link>
			</nav>
				}
				open={this.state.sidebarOpen}
				onSetOpen={this.onSetSidebarOpen}
				styles={{ sidebar: { 
					background: "white",
					color: "red",
					position: "absolute",
					zIndex: "1000"
				} }}
			/>

				<SectionsContainer {...options}>

						<Element name="about-me" className='about-me'>
							<div className='lida' />
							<p className='represent'>
								Меня зовут Лида Середняк. Я копирайтер. Создаю контент для сообществ компаний и СМИ в социальных сетях. Есть опыт разработки контент-стратегий и написания постов различной тематики, в том числе узкоспециализированной.
							</p>
							<Social/>
						</Element>

						<Element name="mailfit" className='mailfit'>
							<Mailfit/>
						</Element>

						<Element name="borjomi" className='borjomi'>
							<Borjomi/>
						</Element>

						<Element name="datravel" className='mailfit'>
							<Datravel/>
						</Element>
						
						<Element name="professor" className='professor'>
							<Professor/>
						</Element>
				</SectionsContainer>

			</div>
		)
	}
}
