import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';
import Popup from "reactjs-popup";
import Posts from "./datravel-posts.jsx";
import DatravelSvg from'./datravel.svg'
export default class Main extends React.Component {
	render() {
		return (
			<div className='datravel'>
				<section className='section-wrapper'>
					<img src={DatravelSvg}/>
					<h1>DaTravel.com</h1>
					<p>Datravel.com — сервис по поиску и бронированию авиабилетов и отелей. Также на Datravel.com можно выбрать и оплатить программу развлечений и экскурсий в стране пребывания.</p>
					<p>В обязанност входило написание текстов для сообщества DaTravel.com согласно контент-плану, подбор изображений к постам, брендирование картинок в Photoshop.</p>
					<Posts/>
				</section>
			</div>
		)
	}
}
