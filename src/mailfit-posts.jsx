import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';
import Popup from "reactjs-popup";
import Posts from "./mailfit-posts.jsx";


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
				<button className="button modal-button modal-button-mailfit" onClick={this.openModal}>
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

							<FacebookProvider appId="2152742098277565">
								<EmbeddedPost href="https://www.facebook.com/mailfit/photos/a.557395974437337/758410611002538"/>
							</FacebookProvider>

							<FacebookProvider appId="2152742098277565">
								<EmbeddedPost href='https://www.facebook.com/mailfit/photos/a.557395974437337/755779937932272'/>
							</FacebookProvider>

							<FacebookProvider appId="2152742098277565">
								<EmbeddedPost href='https://www.facebook.com/mailfit/photos/a.557395974437337/755789831264616'/>
							</FacebookProvider>

						</div>
					</div>
				</Popup>
			</section>
		)
	}
}
