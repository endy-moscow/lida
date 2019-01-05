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
						<div className='post-wrapper'>
							<VK apiId={6610009}>
								<Post
									elementId={'dt2'}
									ownerId={-72420298}
									postId={1011}
									hash={'nxO0fESFfQ2lKaUSJDXCLL-DzA'}
									/>
							</VK>
						</div>
						<div className='post-wrapper'>
							<VK apiId={6610009}>
								<Post
									elementId={'dt1'}
									ownerId={-72420298}
									postId={1204}
									hash={'HWX6zgA9QbzKhUh9tuupqQeGww'}
									/>
							</VK>
						</div>
						
						<div className='post-wrapper'>
							<VK apiId={6610009}>
								<Post
									elementId={'dt3'}
									ownerId={-72420298}
									postId={1432}
									hash={'TSkF06V9kxa0kTl5_egfoCZ5dA'}
									/>
							</VK>
						</div>
						<div className='post-wrapper'>
							<VK apiId={6610009}>
								<Post
									elementId={'dt4'}
									ownerId={-72420298}
									postId={1250}
									hash={'SHZipSAAiVkg5JcRTdasEJ_GPw'}
									/>
							</VK>
						</div>
						<div className='post-wrapper'>
							<VK apiId={6610009}>
								<Post
									elementId={'dt5'}
									ownerId={-72420298}
									postId={1405}
									hash={'jECd0GWH6mIJXBClH4gHVhClTg'}
									/>
							</VK>
						</div>
					</Swiper>
			</div>
		)
	}
}

// <VK apiId={6610009}>
// 	<div className='post-wrapper'>
// 		<Post
// 			elementId={'dt1'}
// 			ownerId={-72420298}
// 			postId={1204}
// 			hash={'HWX6zgA9QbzKhUh9tuupqQeGww'}
// 			options={{width:350}} />
// 	</div>
// </VK>
