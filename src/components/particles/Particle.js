import React from 'react'
import Particles from 'react-particles-js';
import './particles.css'
const Particle = () => {
    return (
        <div className='particles '>
            <Particles 
              params={{
            		particles: {
						line_linked:{
							shadow:{
								// enable: true,
								// color:'#3CA9D1',
								// blur:.5
							}
						},
						number:{
							 value:30,
							 density:{
								 enable:true,
								 value_area:200
							 }
						},
						size: {
							value: 3
						}
					},
					interactivity: {
						events: {
							onhover: {
								enable: true,
								mode: "repulse"
							},
							onclick: {
							  enable: true,
							  mode: "repulse"
						  }
						}
					}
            		
            	}}
            />
        </div>
    )
}

export default Particle
