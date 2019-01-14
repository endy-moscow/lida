import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';
import Popup from "reactjs-popup";
import Posts from "./borjomi-posts.jsx";

export default class Main extends React.Component {
	render() {
		return (
			<div className='borjomi'>
				<h1>Боржоми Россия</h1>
				<h3>Обязанности</h3>
				<p>Написание текстов для сообщества «Боржоми Россия» в Facebook согласно контент-плану, подбор изображений к постам.</p>
				<Posts/>
			</div>
		)
	}
}