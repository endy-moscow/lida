import React, { Component } from 'react'
import Swiper from 'react-id-swiper'
import FacebookProvider, { EmbeddedPost } from 'react-facebook'
import VK, { Post } from 'react-vk'

export default class Main extends React.Component {
	render() {
		const params = {

			slidesPerView: 'auto',
      pagination: {
        clickable: true,
      },
			navigation: {
				nextEl: '.my-swiper-button-next',
				prevEl: '.my-swiper-button-prev',
			},
			renderPrevButton: () => <button className="my-swiper-button-prev"/>,
			renderNextButton: () => <button className="my-swiper-button-next"/>,

    };
		return (
			<div className='project mailfit'>
				<div className='project-about'>
					<h1>Mailfit</h1>
					<p>Mailfit — студя контент-маркетинга. Специализируется на запуске сайтов, эффективных рассылок, создает контент для блогов и соцсетей.</p>
					<p>Основными целями присутствия Mailfit в соцсетях были привлечение новых клиентов, формирование у аудитории представления о компетентности сотрудников студии,
					информирование о новостях компании и принципах работы, позиционирование сообществ как дискуссионной площадки для профессионалов в сфере e-mail-маркетинга, SMM, копирайтинга.</p>
					<h3>Обязанности</h3>
					<p>Подбор контента для клиентских сообществ, написание постов для групп Mailfit во «ВКонтакте» и Facebook, разработка контент-планов.</p>
					<br/>
					<br/>
					<h2>Примеры постов</h2>
				</div>
				<Swiper {...params}>

						<div className='post-wrapper'>
							<FacebookProvider appId="2152742098277565">
								<EmbeddedPost 
									href="https://www.facebook.com/mailfit/photos/a.557395974437337/758410611002538"
									width="350"/>
							</FacebookProvider>
						</div>

						<div className='post-wrapper'>
							<FacebookProvider appId="2152742098277565">
								<EmbeddedPost
									href='https://www.facebook.com/mailfit/photos/a.557395974437337/755779937932272'
									width="350"/>
							</FacebookProvider>
						</div>

						

						<div className='post-wrapper'>
							<FacebookProvider appId="2152742098277565">
								<EmbeddedPost
									href='https://www.facebook.com/mailfit/photos/a.557395974437337/755789831264616'
									width="350"/>
							</FacebookProvider>
						</div>

				</Swiper>

			</div>
		)
	}
}
