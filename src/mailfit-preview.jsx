import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';
import Popup from "reactjs-popup";
import Posts from "./mailfit-posts.jsx";
import MailfitSvg from'./mailfit.svg'
export default class Main extends React.Component {
	render() {
		return (
			<div className='mailfit'>
				<section className='section-wrapper'>

					<img src={MailfitSvg}/>
					<h1>Mailfit</h1>
					<p>Mailfit – студия контент-маркетинга. Специализируется на запуске сайтов, эффективных рассылок, создает контент для блогов и соцсетей.</p>
					<p>В мои обязанности входила разработка контент-планов, создание контента для сообществ клиентов в соцсетях, написание постов для страниц Mailfit во «ВКонтакте» и Facebook.</p>
					<Posts/>
				</section>
			</div>
		)
	}
}
