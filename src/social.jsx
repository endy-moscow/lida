import React, { Component } from 'react'
import ReactSVG from 'react-svg'
import './index.css'

let param={ width: 30, height: 30 }

export default class Social extends Component {
	render() {
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center'
				}}>
				<div className='social-icon'>
					<a 
						href='https://vk.com/id72071058' 
						target="blank"
						style={{
							textAlign: 'center'
						}}>
						<ReactSVG
							src="./HH.svg"
						  evalScripts="always"
						  svgStyle={param}
						/>
					</a>
				</div>
				<span style={{
							textAlign: 'center',
							marginTop: '24px'
						}}> LidaSerednyak2@gmail.com</span>
			</div>
		);
	}
}
