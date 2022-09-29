import React from "react";
import "./Navbar.css";
// import aboutpic from './about.PNG'
// import aim from './aim.jfif'


function Statistics() {
    // useEffect(() => {
    //     setTimeout(() => {
    //         props.setProgress(50);
    //         props.setProgress(100);
    //     }, 500);
    // }, []);
    return (
        <>
            <div className="container" style={{ marginTop: '127px' }}>
                <h3>Monthly sold Quintals</h3>
                <img src="assets\chart1.png" height="600" width="1300"></img><br></br><br></br>
                <center><h5>Fig. Monthly sold number of Quintals for all crops. Combined data as per the current data.</h5></center><br></br><br></br>
                <h3>Farmer Income After vs Before</h3>
                <img src="assets\chart2.js.png" height="600" width="1280"></img><br></br><br></br>
                <center><h5>Fig. Monthly actual vs sold number of Quintals for all crops. Combined data as per the current data.</h5></center><br></br><br></br>
                <h3>Cropwise Quintals Sold</h3>
                <center><img src="assets\chart3.png" ></img></center><br></br><br></br>
                <center><h5>Fig. Pie chart displaying number of Quintals sold per crop in current year as per the latest data.</h5></center><br></br><br></br>
                <h3>Feedback Analysis</h3>
                <center><img src="assets\chart4.png" height="600" width="1300"></img></center><br></br><br></br>
                <center><h5>Fig. Feedback Rating Analysis.</h5></center><br></br><br></br>
                {/* <img src="assets\stars.png"></img> */}
            </div>
        </>
    );
}
export default Statistics;
