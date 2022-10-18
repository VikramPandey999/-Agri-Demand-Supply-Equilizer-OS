import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';


var d = new Date();
var n = d.getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <span> Our Social Handlers!</span>
        </p>
        <div className="icons">
          <a href="/">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="/">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="/">
            <i className="fa fa-linkedin"></i>
          </a>

          <a href="/">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span> FarmBuy</span> Maharashtra 400074
          </p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p> 022 6153 2500</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:farmbuy00@gmail.com"> 	farmbuy00@gmail.com </a>
          </p>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <h2>
          {" "}
          Farm<span>Buy</span>
        </h2>
        <p className="menu">
          <a href="/"> Home</a> |<a href="/tokenPage"> Token Page</a> |
          <a href="/news"> News</a> |<a href="/feedback"> Feedback</a> |
        </p>
        <p className="name"> FarmBuy &copy; 2022</p>
      </div>
    </footer>
  )
}
