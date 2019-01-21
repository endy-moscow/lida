import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';
import Popup from "reactjs-popup";
import Posts from "./professor-posts.jsx";

export default class Main extends React.Component {
	render() {
		return (
			<section className='section-wrapper'>
				<div className='professor'>
					<h1>Научное шоу профессора Николя</h1>
					<h3>Обязанности</h3>
					<p>Написание текстов для сообщества компании согласно контент-плану, подбор изображений к постам, брендирование картинок в Photoshop.</p>
					<Posts/>
				</div>
			</section>
		)
	}
}
