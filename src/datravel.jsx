import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
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
			<div className='project datravel'>
					<div className='project-about'>
						<h1>DaTravel.com</h1>
						<p>Datravel.com — сервис по поиску и бронированию авиабилетов и отелей. Также на Datravel.com можно выбрать и оплатить программу развлечений и экскурсий в стране пребывания.</p>
						<h3>Обязанности</h3>
						<p>Написание текстов для сообщества DaTravel.com согласно контент-плану, подбор изображений к постам, брендирование картинок в Photoshop.</p>
						<h2>Примеры постов</h2>
					</div>
					<Swiper {...params}>
						

						
					</Swiper>
			</div>
		)
	}
}

// <VK apiId={6610009}>
// 	
// 		<Post
// 			elementId={'dt1'}
// 			ownerId={-72420298}
// 			postId={1204}
// 			hash={'HWX6zgA9QbzKhUh9tuupqQeGww'}
// 			options={{width:350}} />
// 	</div>
// </VK>
