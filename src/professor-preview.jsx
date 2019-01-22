import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';
import Popup from "reactjs-popup";
import Posts from "./professor-posts.jsx";
import ProfessorSvg from'./professor.svg'

export default class Main extends React.Component {
	render() {
		return (
			<div className='professor'>
				<section className='section-wrapper'>
						<img src={ProfessorSvg}/>
						<h1>Научное шоу профессора Николя</h1>
						<p> В мои обязанности входило написание текстов для сообщества компании согласно контент-плану, подбор изображений к постам, брендирование картинок в Photoshop.</p>
						<Posts/>
				</section>
			</div>
		)
	}
}
