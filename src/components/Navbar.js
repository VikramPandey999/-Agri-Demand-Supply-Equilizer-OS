import React, { useEffect } from "react";
import './footer.css';
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Navbar() {
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
        console.log(script);
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

  // async function displayTranslate() {
  //   const res = await loadScript('http://translate.google.com/translate_a/element.js')
  //   console.log("Response is :" + res)
  //   if (res) {
  //     new google.translate.TranslateElement("google_element");
  //   }
  // }



  useEffect(() => {
    const scriptTag = document.createElement('script');

    scriptTag.src = "https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate";
    scriptTag.async = true;

    document.body.appendChild(scriptTag);

  }, []);
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-dark d-flex justify-content-center bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="assets/logo.jpeg" id="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" id="google_element">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tokenPage">
                  Token Page
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/feedback">
                  Feedback
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/statistics">
                  Statistics
                </Link>
              </li>
            </ul>
            {/* <div id="google_element">
            <Button onClick={displayTranslate}>Translate</Button>
            </div> */}



            <Link to="login">
              <Button ><img src="assets\Google_Translate_Icon.png" height="30" width="30"></img></Button>
            </Link>
            <Link to="login">
              <Button variant="contained">LOGIN</Button>
            </Link>

          </div>
        </div>
      </nav>
    </div>
  );
}
