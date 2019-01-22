import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';
import Popup from "reactjs-popup";
import Posts from "./borjomi-posts.jsx";
import BorjomiSvg from'./borjomi.svg'

export default class Main extends React.Component {
	render() {
		return (
			<div className='borjomi'>
				<section className='section-wrapper'>
					<img src={BorjomiSvg}/>
					<h1>Боржоми Россия</h1>
					<p>В мои обязанности входило написание текстов и подбор картинок для сообщества «Боржоми Россия» в Facebook.</p>
					<Posts/>
				</section>
			</div>
		)
	}
}
