import React from "react";
import { useState } from "react";
import "./Crops.css";
import { props, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import StripeCheckout from "react-stripe-checkout";
import GooglePayButton from "@google-pay/button-react";


function Crops(props) {

  const [demand, setDemand] = useState(0);
  const [r_demand, setR_demand] = useState(demand);
  const [produce,setProduce]=useState(0);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 500,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  useEffect(() => {
    // console.log("hello")

    fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': 'http://localhost:3000'
      },

      body: JSON.stringify({ "crop": props.no })
    }).then(async response => await response.json())
      .catch(error => {
        console.error('There was an error!', error);
      })
      .then(data => {
        // console.log(data.total_demand)
        setDemand(data.total_demand * 10000000)

      })


  }, [props.no])

  const paybtn = () => {
    let input = document.getElementById("id1").value
    console.log(input)
  }


  const [product, setproduct] = useState({
    name: "token",
    price: 10,
    productBy: "Government",
  });
  const [auth, setAuth] = useState(true);
  const inputF = document.getElementById("id1");
  const [disable, setDisable] = useState(true);




  const handleInput = (e) => {
    if (e.target.value === '') {
      setDisable(true);
    }
    else {
      setProduce(e.target.value);
      setDisable(false);
    }
  }

  const makePayment = token => {

    let input = document.getElementById("id1").value
    console.log(input)
    setR_demand(demand - input)

    const body = {
      token,
      product
    }
    const headers = {
      "Content-Type": "application/json"
    }
    return fetch(`http://localhost:8282/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    })
      .then(response => {
        alert(response)
        console.log("RESPONSE", response)
        const { status } = response;
        console.log("STATUS", status)
      })
      .catch(
        alert("Hello Payment Error")
        
        
        )


  }

  if (!auth) {
    console.log(inputF.value);
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="cropName" style={{ backgroundImage: "url(/1.jpg)" }}>
        <h1>{props.crop}</h1>
      </div>
      <div className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <h4 className="my-3 text-muted">Demand</h4>
              <h1>{demand} QT</h1>
            </div>
            <div className="col-md-4">
              <h4 className="my-3 text-muted">Remaining demand</h4>
              <h1>{props.rd} QT</h1>
            </div>
            <div className="col-md-4">
              <h4 className="my-3 text-muted">MSP</h4>
              <h1>{props.msp}</h1>
            </div>
            <div className="col-md-4">
              <h4 className="my-3 text-muted">fertilizer</h4>
              <h1>{props.fert}</h1>
            </div>
            <div className="col-md-4">
              <h4 className="my-3 text-muted">Seeds</h4>
              <h1>{props.se}</h1>
            </div>
            <div className="col-md-4">
              <h4 className="my-3 text-muted">Insuarance</h4>
              <h1>{props.ins}</h1>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="container inputPart ">
        <h2 className="heading">Buy Tokens</h2>
        <div className="container yeild">
          <label className="col-md-6 control-label">
            Enter weight of yeild
          </label>
          <div className="col-md-6 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="glyphicon glyphicon-home"></i>
              </span>
              <input
                id="id1"
                required
                name="zip"
                placeholder=" weight of yeild"
                className="form-control"
                type="number"
                maxlength="3"
                onChange={handleInput}
              />
            </div>
            <p style={{ color: "red", float: "right" }}>
              *Max Limit 100 Quintal
            </p>
          </div>


          <button disabled={disable} type="button" className="btn btn-info" variant="filled" onClick={handleOpen}>Generate Token</button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="modal" sx={style}>

              <div class="modal-header">
                <h1>Order Details</h1>
              </div>
              <div class="container description" >
                <Typography class="container" id="modal-modal-description" sx={{ mt: 2 }}>
                  Estimated Yield &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;:&emsp;&emsp;&emsp; {produce} QT
                </Typography>
                <hr />
                <Typography class="container" id="modal-modal-description" sx={{ mt: 2 }}>
                  &emsp;&emsp;MSP &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;:&emsp;&emsp;&emsp;{props.msp}
                </Typography>
                <hr />
                <Typography class="container" id="modal-modal-description" sx={{ mt: 2 }}>
                  &emsp;&emsp; Fertilizer&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;:&emsp;&emsp;&emsp;
                 375kg
                </Typography>
                <hr/>
                <Typography class="container" id="modal-modal-description" sx={{ mt: 2 }}>
                  &emsp;&emsp; Insurance&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;:&emsp;&emsp;&emsp; 
                  40,000rs
                  {/* <span style={{color:'red'}}>(Assured Insurance)</span> */}
                </Typography>
                <hr/>
                <Typography class="container" id="modal-modal-description" sx={{ mt: 2 }}>
                  &emsp;&emsp; Seeds&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;:&emsp;&emsp;&emsp; 100kg
                </Typography>
              </div>
              <div class="modal-footer flex-center">
                <StripeCheckout
                  stripeKey="pk_test_51KUAbVSBqbVFSEsjamFouBXi77tfqeITc8lXqXLOi3ouGqETLySLdPWGUVgZv8K6rKFI7rx9mUl76aQzvg3qAugL008y5pCiGz"
                  token={makePayment}
                  name="Buy Token"
                  amount={product.price * 100}
                  shippingAddress
                  billingAddress
                >

                  <button onClick={paybtn} className="btn btn-warning lg">
                    Pay with card
                    <span className="glyphicon glyphicon-send"></span>
                  </button>
                </StripeCheckout>
                <GooglePayButton
                  environment="TEST"
                  paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                      {
                        type: "CARD",
                        parameters: {
                          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                          allowedCardNetworks: ["MASTERCARD", "VISA"],
                        },
                        tokenizationSpecification: {
                          type: "PAYMENT_GATEWAY",
                          parameters: {
                            gateway: "example",
                            gatewayMerchantId: "ExampleGatewayMerchantId",
                          },
                        },
                      },
                    ],
                    merchantInfo: {
                      merchantId: "123456789",
                      merchantName: "Example Merchant",
                    },
                    transactionInfo: {
                      currencyCode: "INR",
                      totalPriceStatus: "FINAL",
                      totalPriceLabel: "Total",
                      totalPrice: "1",
                      countryCode: "IN",

                    },
                    shippingAddressRequired: true,
                    callbackIntents: ["PAYMENT_AUTHORIZATION"],

                  }}
                  onLoadPaymentData={(paymentRequest) => {
                    console.log("Success", paymentRequest);
                    
                  }}
                  onPaymentAuthorized={(paymentData) => {
                    console.log("Payment Authorization", paymentData);
                    alert("Payment Success")
                    return { transactionState: "SUCCESS" }
                  }}
                  existingPaymentMethodRequired={false}
                  buttonColor="black"
                  buttonType="short"
                />
              </div>

            </Box>
          </Modal>


        </div>


      </div>
    </>
  );
}

export default Crops;
//demand
//remaining demand
//MSP
//fertilizer
//<==============>
//input
// private key sk_test_51KUAbVSBqbVFSEsjhidiw1FDz2ARN97Xkk91HxvLWwG5piKNycdWonrhkU8aPbUlikoKPz9pJscFTUg4aZ8smFJi00JBrAwksa
