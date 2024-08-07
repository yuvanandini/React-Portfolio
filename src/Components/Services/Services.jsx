import React from 'react'
import  './Services.css'
import themepattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div>
      <div id="services" className="services">
        <div className="services-title">
            <h1>My Services</h1>
            <img src={themepattern} alt="" />
        </div>
        <div className="service-container">
            {Services_Data.map((service, index)=> {
                return <div key={index} className="service-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <h3>{service.s_desc}</h3>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
            })}
        </div>
      </div>  
    </div>
  )
}

export default Services