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
						href='https://hh.ru/resume/e6662093ff01b094370039ed1f474c66774d33'
						target="blank"
						style={{
							textAlign: 'center'
						}}>
						<ReactSVG
							src="./HH.svg"
						  evalScripts="always"
						  svgStyle={param}
							height='100px'
						/>
					</a>
				</div>
				<a href='mailto:lidaserednyak2@gmail.com' style={{
							textAlign: 'center',
							marginTop: '12px',
							marginBottom: '12px',
							fontSize: '10pt',
						}}> lidaserednyak2@gmail.com</a>
			</div>
		);
	}
}
