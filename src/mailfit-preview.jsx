import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';
import Popup from "reactjs-popup";
import Posts from "./mailfit-posts.jsx";

export default class Main extends React.Component {
	render() {
		return (
			<div className='mailfit'>
				<h1>Mailfit</h1>
					<p>Mailfit – студия контент-маркетинга. Специализируется на запуске сайтов, эффективных рассылок, создает контент для блогов и соцсетей.</p>
					<h3>Обязанности</h3>
					<p>Разработка контент-планов, создание контента для сообществ клиентов в соцсетях, написание постов для страниц Mailfit во «ВКонтакте» и Facebook.</p>
				<Posts/>
			</div>
		)
	}
}

