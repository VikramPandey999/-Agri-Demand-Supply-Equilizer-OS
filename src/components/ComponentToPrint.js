import React from "react";
import { Typography } from "@mui/material";
import './Component.css';


export const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <img src="assets/logo.jpeg" id="logo"/>

     
  <div id="invoice-POS">
    
    <center id="top">
      <div className="logo"></div>
      <div className="data"> 
        <h2>FARMBUY</h2>
      </div>
    </center>
    
    <div id="mid">
      <div className="data">
        <h2>Contact Info</h2>
        <p> 
            Address : street city, state 0000<br/>
            Email   : JohnDoe@gmail.com<br/>
            Phone   : 555-555-5555<br/>
        </p>
      </div>
    </div>
    
    <div id="bot">

					<div className="tablefull" id="table">
						<table>
							<tr className="tabletitle">
							<td><h1>Order Details</h1></td>
              
							</tr>
              <tr className="tabletitle">
							<td><h3>CROP : Wheat</h3></td>
              
							</tr>

							<tr className="service">
								<td className="tableitem"><p className="itemtext">Estimated Yield</p></td>
								<td className="tableitem"><p className="itemtext">:</p></td>
								<td className="tableitem"><p className="itemtext">50QT</p></td>
							</tr>

							<tr className="service">
								<td className="tableitem"><p className="itemtext">MSP</p></td>
								<td className="tableitem"><p className="itemtext">:</p></td>
								<td className="tableitem"><p className="itemtext">1900Rs/Q</p></td>
							</tr>

							<tr className="service">
								<td className="tableitem"><p className="itemtext">Fertilizer</p></td>
								<td className="tableitem"><p className="itemtext">:</p></td>
								<td className="tableitem"><p className="itemtext">375kg</p></td>
							</tr>

							<tr className="service">
								<td className="tableitem"><p className="itemtext">Insurance</p></td>
								<td className="tableitem"><p className="itemtext">:</p></td>
								<td className="tableitem"><p className="itemtext">40,000rs</p></td>
							</tr>

							<tr className="service">
								<td className="tableitem"><p className="itemtext">Seeds</p></td>
								<td className="tableitem"><p className="itemtext">:</p></td>
								<td className="tableitem"><p className="itemtext">100kg</p></td>
							</tr>


						
						</table>
					</div>
					<div id="legalcopy">
						<p className="legal"><strong>Thank you for !</strong>  Payment is expected within 31 days; please process this invoice within that time. There will be a 5% interest charge per month on late invoices. 
						</p>
					</div>

				</div>
  </div>

      
    </div>
  );
});
