import React, { useState, useContext, useEffect } from 'react';
import './tokenpage.css'
import { Link } from 'react-router-dom';
import Login from './Login';
import { myContext } from '../Context/MyContextFile.js';

function TokenPage() {


  const cont = useContext(myContext);



  return <>


    {
      !cont.login ? (<Login />) :
        <div className="container-fluid tokenpage">
          <section id="minimal-statistics">
            <div className='heading'>
              <h1>
                CROPS FOR TOKENS
              </h1>
            </div>
            <div className="row d-flex justify-content-around">
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card" id="card1">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex">

                        <div className="media-body">
                          <Link className="link" to="/tokenPage/wheat" >WHEAT</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card" id="card2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex">

                        <div className="media-body">
                          <Link className="link" to="/tokenPage/bajra"> BAJRA</Link>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='row d-flex justify-content-around'>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card" id="card3">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex">

                        <div className="media-body">
                          <Link className="link" to="/tokenPage/paddy">PADDY</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card" id="card4">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex">

                        <div className="media-body">
                          <Link className="link" to="/tokenPage/jowar"> JOWAR </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </section>
        </div>
    }

  </>;
}

export default TokenPage;
