import React from 'react'
import "./ServiceSection.css"
import ScrollAimation from "react-animate-on-scroll"

const ServiceSection = () => {
  return (
    <div className="services-items">
      <div id="trans_cool_veh" >
        <ScrollAimation animateIn="fadeIn" className="services-item">
          <div className="service_img">
            <img src="/images/ref_truck.png" alt="Regrigeration truck" />
          </div>
          <div className="service_text">
            <h3>Transport Cooling Vehicle</h3>
            <p>We provide refrigerated trucks for the transport of perishable food items and pharmaceuticals using our emission free technology. </p>
            <p>This makes us outstanding as we use a combination of fuel cell and absorption system for transport refrigeration.</p>
          </div>
        </ScrollAimation>
      </div>
      <div id="res_rec_veh">
        <ScrollAimation animateIn="fadeIn" className="services-item">
          <div className="service_text">
            <h3>Residential and Recreational Vehicles Air-Conditioning</h3>
            <p>With our heat driven cooling technology, your residential, commercial, and institutional air-conditioning needs can be met without requiring electricity. </p>
          </div>
          <div className="service_img">
            <img src="/images/ac.png" alt="Air condition" />
          </div>
        </ScrollAimation>
      </div>
      <div id="cold_room">
        <ScrollAimation animateIn="fadeIn" className="services-item">
          <div className="service_img">
            <img src="/images/cold_room.png" alt="Cold room" />
          </div>
          <div className="service_text">
            <h3>Cold Room/Regrigeration</h3>
            <p>We build cold rooms that are emission free with our cutting edge technology.</p>
            <p>We also provide fridge that do not require electricity.</p>
          </div>
        </ScrollAimation>
      </div>
      <div>
        <ScrollAimation animateIn="fadeIn" className="solutions-div">
          <div className="title-head">
            <h1><span>OTHER SOLUTIONS</span></h1>
          </div>
          <div className="solution-div">
            <div className="solutions">
              <div className="solutions-img">
                <img src="/images/solar_oven.png" alt="Heat oven" />
              </div>
              <div className="solutions-text">
                <h3>solar heat driven oven</h3>
                <p>Our heat driven oven for barbeque and smoking of fish is state of the art.</p>
              </div>
            </div>
            <div className="solutions">
              <div className="solutions-img">
                <img src="/images/cold_room_1.png" alt="Cold room" />
              </div>
              <div className="solutions-text">
                <h3>solar heat driven oven</h3>
                <p>Our heat driven oven for barbeque and smoking of fish is state of the art.</p>
              </div>
            </div>
            <div className="solutions">
              <div className="solutions-img">
                <img src="/images/ac_res_app.png" alt="Residential air condition" />
              </div>
              <div className="solutions-text">
                <h3>med box</h3>
                <p>Our heat driven oven for barbeque and smokinng of fish is state of the art.</p>
              </div>
            </div>
          </div>
        </ScrollAimation>
      </div>
    </div>
  )
}

export default ServiceSection
