import React, { Component } from 'react';
import Typist from 'react-typist';
import Flight, {Rect} from 'react-flight/dom';
import Lottie from 'react-lottie';
import * as animationData from './heart_anim_data.json';
import * as d3 from "d3";









export default class Main extends React.Component {

  componentDidMount() {

  	var theThing = document.getElementById('el');
    var container = document.getElementById('container')

    container.addEventListener("click", function(event) {
			var xPosition = event.clientX - container.getBoundingClientRect().left - (theThing.clientWidth / 2);
			var yPosition = event.clientY - container.getBoundingClientRect().top - (theThing.clientHeight / 2);
			// in case of a wide border, the boarder-width needs to be considered in the formula above
			theThing.style.left = xPosition + "px";
			theThing.style.top = yPosition + "px";
			}
		);
  }
  componentDidUpdate() {

    console.log ('component update')
  }

	render() {
		const defaultOptions = {
		  animationData: animationData,
		  rendererSettings: {
		    preserveAspectRatio: 'xMidYMid slice'
		  }
		};
		const { width, height } = this.props;
		return (
			<div className='page'>
					<div id='container' className='full-screen'>
						<div id='el'>
							<svg ref={ viz => (this.viz = viz) }
                   width={width} height={height} >
            	</svg>
						</div>
			    </div>
		  </div>
		)
  }
}