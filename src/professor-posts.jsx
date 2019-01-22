import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';
import Popup from "reactjs-popup";
import VK, { Post } from 'react-vk'



export default class Main extends React.Component {
	constructor(props) {
		super(props)
		this.state = { open: false }
		this.openModal = this.openModal.bind(this)
		this.closeModal = this.closeModal.bind(this)
		}
		openModal (){
			this.setState({ open: true })
		}
		closeModal () {
			this.setState({ open: false })
		}

	render() {
		return (
			<section>
				<button className="button modal-button modal-button-professor" onClick={this.openModal}>
					Примеры постов
				</button>
				<Popup
					open={this.state.open}
					closeOnDocumentClick
					onClose={this.closeModal}
					modal={true}
					lockScroll={true}
					position={'top center'}
					>
					<div className="modal">
						<div className="close" onClick={this.closeModal} />
						<div className='posts-wrapper'>


							<VK apiId={6610009}>
								<Post
									elementId={'pr1'}
									ownerId={-30303467}
									postId={2680}
									hash={'M43ANEDL74lMAY2eLRprQTJKNA'} />
							</VK>


							<FacebookProvider appId="2152742098277565">
								<EmbeddedPost
									href='https://www.facebook.com/scientific.show/photos/a.243159949069904/865706630148563'/>
							</FacebookProvider>



							<FacebookProvider appId="2152742098277565">
								<EmbeddedPost
									href='https://www.facebook.com/scientific.show/photos/a.243159949069904/872592529459973'/>
							</FacebookProvider>



							<VK apiId={6610009}>
								<Post
									elementId={'pr2'}
									ownerId={-30303467}
									postId={2488}
									hash={'MeDBvYB35LRAKC08AV82h7iyaA'} />
							</VK>

							<VK apiId={6610009}>
								<Post
									elementId={'pr4'}
									ownerId={-30303467}
									postId={2107}
									hash={'Fb8ykmQiY4t5nKjIjbpCGxi3MQ'} />
							</VK>



							<VK apiId={6610009}>
								<Post
									elementId={'pr5'}
									ownerId={-30303467}
									postId={1892}
									hash={'UibqVRbYtJG6QRNewClVvehlAA'} />
							</VK>

						</div>
					</div>
				</Popup>
			</section>
		)
	}
}
