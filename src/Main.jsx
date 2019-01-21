import React, { Component } from 'react'
import * as Scroll from 'react-scroll'

import {SectionsContainer, Section, Header, Footer} from 'react-fullpage'
import Social from './social.jsx'


import Borjomi from './borjomi-preview.jsx'
import Mailfit from './mailfit-preview.jsx'
import Datravel from './datravel-preview.jsx'
import Professor from './professor-preview.jsx'


export default class Main extends React.Component {
	render() {
		return (
			<div>	<div className='lida'>
							<section className='section-wrapper'>
								<div className='lida-photo' />
								<p className='represent'>
									Меня зовут Лида Середняк. Я копирайтер.
									Создаю контент для сообществ компаний и СМИ в социальных сетях.
									Есть опыт разработки контент-стратегий и написания постов различной тематики,
									в том числе узкоспециализированной.
								</p>
								<Social/>
							</section>
						</div>

						<Borjomi/>
						<Mailfit/>
						<Datravel/>
						<Professor/>
			</div>
		)
	}
}
