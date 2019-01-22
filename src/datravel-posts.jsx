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
				<button className="button modal-button modal-button-datravel" onClick={this.openModal}>
					→ Примеры постов
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
									elementId={'dt2'}
									ownerId={-72420298}
									postId={1011}
									hash={'nxO0fESFfQ2lKaUSJDXCLL-DzA'}
									/>
							</VK>


							<VK apiId={6610009}>
								<Post
									elementId={'dt1'}
									ownerId={-72420298}
									postId={1204}
									hash={'HWX6zgA9QbzKhUh9tuupqQeGww'}
									/>
							</VK>



							<VK apiId={6610009}>
								<Post
									elementId={'dt3'}
									ownerId={-72420298}
									postId={1432}
									hash={'TSkF06V9kxa0kTl5_egfoCZ5dA'}
									/>
							</VK>


							<VK apiId={6610009}>
								<Post
									elementId={'dt4'}
									ownerId={-72420298}
									postId={1250}
									hash={'SHZipSAAiVkg5JcRTdasEJ_GPw'}
									/>
							</VK>


							<VK apiId={6610009}>
								<Post
									elementId={'dt5'}
									ownerId={-72420298}
									postId={1405}
									hash={'jECd0GWH6mIJXBClH4gHVhClTg'}
									/>
							</VK>

						</div>
					</div>
				</Popup>
			</section>
		)
	}
}
