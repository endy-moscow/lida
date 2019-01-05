import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';


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
			<section className='project borjomi'>
					<section className='project-about'>
						<h1>Боржоми Россия</h1>
						<h3>Обязанности</h3>
						<p>Написание текстов для сообщества «Боржоми Россия» в Facebook согласно контент-плану, подбор изображений к постам.</p>

						<h2>Примеры постов</h2>
					</section>
					<Swiper {...params}>
						<section className='post-wrapper'>
							<FacebookProvider appId="2152742098277565">
								<EmbeddedPost
									href='https://www.facebook.com/borjomi.ru/photos/a.1454184911475756/1903240059903570'
									width="350"/>
							</FacebookProvider>
						</section >
						<section className='post-wrapper'>
							<FacebookProvider appId="2152742098277565">
								<EmbeddedPost
									href='https://www.facebook.com/borjomi.ru/photos/a.1454184911475756/1894434267450816'
									width="350"/>
							</FacebookProvider>
						</section >
						<section className='post-wrapper'>
							<FacebookProvider appId="2152742098277565">
								<EmbeddedPost
									href='https://www.facebook.com/borjomi.ru/photos/a.1454184911475756/1896508007243442'
									width="350"/>
							</FacebookProvider>
						</section >
						
						<section className='post-wrapper'>
							<FacebookProvider appId="2152742098277565">
								<EmbeddedPost
									href='https://www.facebook.com/borjomi.ru/photos/a.1454184911475756/1864505590443684'
									width="350"/>
							</FacebookProvider>
						</section >
						<section className='post-wrapper'>
							<FacebookProvider appId="2152742098277565">
								<EmbeddedPost
									href='https://www.facebook.com/borjomi.ru/photos/a.1454184911475756/1852667118294198'
									width="350"/>
							</FacebookProvider>
						</section >
						<section className='post-wrapper'>
							<FacebookProvider appId="2152742098277565">
								<EmbeddedPost
									href='https://www.facebook.com/borjomi.ru/photos/a.1454184911475756/1912759658951610'
									width="350"/>
							</FacebookProvider>
						</section >
					</Swiper>
			</section>
		)
	}
}
