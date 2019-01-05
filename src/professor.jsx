import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';
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
			<section className='project professor'>
					<section className='project-about'>
						<h1>Научное шоу профессора Николя</h1>
						<h3>Обязанности</h3>
						<p>Написание текстов для сообщества компании согласно контент-плану, подбор изображений к постам, брендирование картинок в Photoshop.</p>
						<h2>Примеры постов</h2>
					</section>
					<Swiper {...params}>
						<section className='post-wrapper'>
							<FacebookProvider appId="2152742098277565">
								<EmbeddedPost
									href='https://www.facebook.com/scientific.show/photos/a.243159949069904/865706630148563'
									width="350"/>
							</FacebookProvider>
						</section >

						<section className='post-wrapper'>
							<FacebookProvider appId="2152742098277565">
								<EmbeddedPost
									href='https://www.facebook.com/scientific.show/photos/a.243159949069904/872592529459973'
									width="350"/>
							</FacebookProvider>
						</section >

						<section className='post-wrapper'>
							<VK apiId={6610009}>
								<Post
									elementId={'pr1'}
									ownerId={-30303467}
									postId={2680}
									hash={'M43ANEDL74lMAY2eLRprQTJKNA'}
									options={{width:350}} />
							</VK>
						</section>
						<section className='post-wrapper'>
							<VK apiId={6610009}>
								<Post
									elementId={'pr2'}
									ownerId={-30303467}
									postId={2488}
									hash={'MeDBvYB35LRAKC08AV82h7iyaA'}
									options={{width:350}} />
							</VK>
						</section>



						<section className='post-wrapper'>
							<VK apiId={6610009}>
								<Post
									elementId={'pr4'}
									ownerId={-30303467}
									postId={2107}
									hash={'Fb8ykmQiY4t5nKjIjbpCGxi3MQ'}
									options={{width:350}} />
							</VK>
						</section>

						<section className='post-wrapper'>
							<VK apiId={6610009}>
								<Post
									elementId={'pr5'}
									ownerId={-30303467}
									postId={1892}
									hash={'UibqVRbYtJG6QRNewClVvehlAA'}
									options={{width:350}} />
							</VK>
						</section>


				</Swiper>
			</section>
		)
	}
}
