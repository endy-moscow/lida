import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';
import Popup from "reactjs-popup";
import Posts from "./borjomi-posts.jsx";



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
				<button className="button modal-button modal-button-barjomi" onClick={this.openModal}>
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
								<EmbeddedPost
									href='https://www.facebook.com/borjomi.ru/photos/a.1454184911475756/1903240059903570'
									/>
							</FacebookProvider>

							<FacebookProvider appId="2152742098277565">
								<EmbeddedPost
									href='https://www.facebook.com/borjomi.ru/photos/a.1454184911475756/1912759658951610'
									/>
							</FacebookProvider>

							<FacebookProvider appId="2152742098277565">
								<EmbeddedPost
									href='https://www.facebook.com/borjomi.ru/photos/a.1454184911475756/1894434267450816'
									/>
							</FacebookProvider>


							<FacebookProvider appId="2152742098277565">
								<EmbeddedPost
									href='https://www.facebook.com/borjomi.ru/photos/a.1454184911475756/1896508007243442'
									/>
							</FacebookProvider>



							<FacebookProvider appId="2152742098277565">
								<EmbeddedPost
									href='https://www.facebook.com/borjomi.ru/photos/a.1454184911475756/1864505590443684'
									/>
							</FacebookProvider>


							<FacebookProvider appId="2152742098277565">
								<EmbeddedPost
									href='https://www.facebook.com/borjomi.ru/photos/a.1454184911475756/1852667118294198'
									/>
							</FacebookProvider>





						</div>
					</div>
				</Popup>
			</section>
		)
	}
}
