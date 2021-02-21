import React from 'react'
import {HashLink as Link} from "react-router-hash-link"
import "./services.css"

export const Services = () => {
  return (
    <div className="sections services">
      <div className="title-head">
        <h1><span>OUR SERVICES</span></h1>
      </div>
      <div className="service-items">
        <div className="service-item first-service">
          <div className="service-item-icon-div">
            <span className="fas fa-truck"></span>
          </div>
          <div className="service-item-descs">
            <h5>Transport Cooling Vehicle</h5>
            <div className="service-item-desc">
              <p>We provide refrigerated trucks for the transport of perishable food items and pharmaceuticals using our emission free technology... </p>
              <p className="services-link"><Link to="/services#trans_cool_veh">Learn more...</Link></p>
            </div>
          </div>
        </div>
        <div className="service-item second-service">
          <div className="service-item-icon-div">
            <span className="fas fa-fan"></span>
          </div>
          <div className="service-item-descs">
            <h5>Residential and Recreational Vehicles Air-condition</h5>
            <div className="service-item-desc">
              <p>With our heat driven cooling technology, residential commercial...</p>
              <p className="services-link"><Link to="/services#res_rec_veh">Learn more...</Link></p>
            </div>
          </div>
        </div>
        <div className="service-item third-service">
          <div className="service-item-icon-div">
            <span className="material-icons">house</span>
          </div>
          <div className="service-item-descs">
            <h5>Cooling rooms / Refrigeration</h5>
            <div className="service-item-desc">
              <p>We build cold rooms...</p>
              <p className="services-link"><Link to="/services#cold_room">Learn more...</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
