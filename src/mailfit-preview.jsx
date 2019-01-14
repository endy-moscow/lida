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
					<p>Mailfit — студя контент-маркетинга. Специализируется на запуске сайтов, эффективных рассылок, создает контент для блогов и соцсетей.</p>
					<p>Основными целями присутствия Mailfit в соцсетях были привлечение новых клиентов, формирование у аудитории представления о компетентности сотрудников студии,
					информирование о новостях компании и принципах работы, позиционирование сообществ как дискуссионной площадки для профессионалов в сфере e-mail-маркетинга, SMM, копирайтинга.</p>
					<h3>Обязанности</h3>
					<p>Подбор контента для клиентских сообществ, написание постов для групп Mailfit во «ВКонтакте» и Facebook, разработка контент-планов.</p>
				<Posts/>
			</div>
		)
	}
}

