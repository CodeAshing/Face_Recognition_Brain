import React from 'react'
import Particles from 'react-particles-js';
import './particles.css'
const Particle = () => {
    return (
        <div className='particles '>
            <Particles 
              params={{
            		particles: {
						number:{
							 value:25,
							 density:{
								 enable:true,
								 value_area:100 
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
