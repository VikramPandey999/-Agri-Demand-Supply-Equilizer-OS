import React from 'react'
import contactimg from './contactimg.jpg'

function Contact() {
  return (
    <div id='contactPage'>
      <h1 id='contact-head'>Contact Us <i className="fa  fa-address-card"></i></h1>
      {/* <img id='contactImg' src={contactimg} alt="contactimg" /> */}
      <div id="contact">
        <div id="map">
          <img src="map.jpg" alt="" />
        </div>
        <div id="contact-form">
         
          <form action="#">
            <div className="row mb-1">
              <div className="col">
                <label className="form-label float-start">First Name :</label>
                <input type="text" name="firstName" className="mb-3 form-control" placeholder="First name" aria-label="First name"
                  required />
              </div>
              <div className="col">
                <label className="form-label  float-start">Last Name :</label>
                <input type="text" name="lastName" className="mb-3 form-control" placeholder="Last name" aria-label="Last name"
                  required />
              </div>
            </div>
            <div className="row mb-1">
              <div className="col">
                <label className="form-label float-start">Email :</label>
                <input type="email" name="email" className="mb-3 form-control" placeholder="Email" aria-label="Email" required />
              </div>
              <div className="col">
                <label className="form-label float-start">Phone (optional) :</label>
                <input type="text" name="phone" className="mb-3 form-control" placeholder="Phone" aria-label="Phone" />
              </div>
            </div>
            <div className="row mb-1">
              <div className="col">
                <label className="form-label float-start">Subject :</label>
                <input type="text" name="subject" className="mb-3 form-control" placeholder="Subject" aria-label="Subject" required />
              </div>
            </div>
            <div className="row mb-1">
              <div className="col">
                <label className="form-label float-start">Message :</label>
                <textarea type="text" name="message" className="mb-3 form-control" placeholder="Message" aria-label="Message"
                  required></textarea>
              </div>
            </div>
            <button type="submit" className='btn btn-primary w-25' id="cbtn">Send</button>
          </form>
        </div>
      </div>



    </div>
  )
}

export default Contact
