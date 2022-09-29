import React, { useEffect, useContext } from "react";
import "./Navbar.css";
// import aboutpic from './about.PNG'
// import aim from './aim.jfif'
import { db } from "../firebase_config.js";

function submitFeedback() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var rating = minmax(parseInt(document.getElementById("rating").value), 1, 5);
    console.log(name, email, subject, message);
    const user_data = {
        Name: name,
        Email: email,
        Subject: subject,
        Message: message,
        Rating: rating
    };
    console.log(user_data)
    const insert = db
        .collection("feedbacks")
        .doc(email)
        .set(user_data)
        .then(function () {
            console.log("Added to the database");
        });
}
function minmax(value, min, max) {
    if (parseInt(value) < min || isNaN(parseInt(value)))
        return min;
    else if (parseInt(value) > max)
        return max;
    else return value;
}
function Feedback(props) {
    // useEffect(() => {
    //     setTimeout(() => {
    //         props.setProgress(50);
    //         props.setProgress(100);
    //     }, 500);
    // }, []);
    return (
        <>
            <div className="container" style={{ marginBottom: '127px' }}>
                <section className="mb-4 container">
                    <h2 className="h1-responsive font-weight-bold text-center my-4">
                        Contact us
                    </h2>

                    <p className="text-center w-responsive mx-auto mb-5">
                        Do you have any questions? Please do not hesitate to contact us
                        directly. Our team will come back to you within a matter of hours to
                        help you.
                    </p>

                    <div className="container" style={{ marginLeft: '140px' }}>
                        <div className="col-md-9 mb-md-0 mb-5">
                            <form
                                id="contact-form"
                                name="contact-form"
                            >
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <label for="name" className="">
                                                Your name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="form-control"
                                            />

                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <label for="email" className="">
                                                Your email
                                            </label>
                                            <input
                                                type="text"
                                                id="email"
                                                name="email"
                                                className="form-control"
                                            />

                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <label for="subject" className="">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                className="form-control"
                                            />

                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form">
                                            <label for="message">Your message</label>
                                            <textarea
                                                type="text"
                                                id="message"
                                                name="message"
                                                rows="2"
                                                className="form-control md-textarea"
                                            ></textarea>

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form">
                                            <label for="rating">Rating</label>
                                            <img src="assets\stars.png"></img>
                                            <input
                                                type="number"
                                                id="rating"
                                                name="rating"
                                                className="form-control"
                                                maxlength="5" onkeyup="this.value = minmax(this.value, 0, 100)"

                                            />

                                        </div>
                                    </div>
                                </div>
                            </form>
                            <script>

                            </script>
                            <div className="text-center text-md-left">
                                <button
                                    className="btn btn-primary"
                                    onClick={submitFeedback}
                                >
                                    Send
                                </button>
                            </div>
                            {/* <div className="status"></div> */}
                        </div>

                        {/* <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fas fa-map-marker-alt fa-2x"></i>
                  <p>San Francisco, CA 94126, USA</p>
                </li>

                <li>
                  <i className="fas fa-phone mt-4 fa-2x"></i>
                  <p>+ 01 234 567 89</p>
                </li>

                <li>
                  <i className="fas fa-envelope mt-4 fa-2x"></i>
                  <p>contact@mdbootstrap.com</p>
                </li>
              </ul>
            </div> */}
                    </div>
                </section>
            </div>
        </>
    );
}
export default Feedback;
