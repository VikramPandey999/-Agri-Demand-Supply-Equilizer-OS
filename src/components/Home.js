import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';


function Home() {
    return (

        <>
            <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"

            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="assets/sps-agriculture-hero.webp" className="imgs d-block w-100" alt="c1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Our Motive : to bring next farming revolution</h1>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="assets/carousel2.jpg" className="imgs  w-100" alt="c2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Serving over 190 million farmers of india</h1>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="assets/carousel3.jpg" className="imgs d-block w-100" alt="c3" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1></h1>

                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* Quote/testimonial aside*/}
            <div className="text-center bg-gradient-primary-to-secondary">
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-xl-8">
                            <div className="h2 fs-1 text-white mb-4">"An intuitive solution to a common problem that all farmers face, wrapped up in a single app!"</div>

                        </div>
                    </div>
                </div>
            </div>
            {/* App features section*/}
            <section id="features" style={{ backgroundColor: "gray" }}>
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-8 order-lg-1 mb-5 mb-lg-0">
                            <div className="container-fluid px-5">
                                <div className="row gx-5">
                                    <div className="col-md-6 mb-5" >
                                        {/* Feature item*/}
                                        <div className="text-center">

                                            <h3 className="font-alt">Assured Prices</h3>
                                            <p className="text mb-0">Through our tokens we provide assured prices to your crops even before they are sown.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-5">
                                        {/* Feature item*/}
                                        <div className="text-center">

                                            <h3 className="font-alt">No More Loans</h3>
                                            <p className="text mb-0">We provide good quality seeds and fertilizers so no more hassle of taking up loans.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-5 mb-md-0">
                                        {/* Feature item*/}
                                        <div className="text-center">

                                            <h3 className="font-alt">Free Insuarance</h3>
                                            <p className="text mb-0">Even in case of any natural calamity your farm will be covered by government.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        {/* Feature item*/}
                                        <div className="text-center">

                                            <h3 className="font-alt">Prosperity</h3>
                                            <p className="text mb-0">With no more fluctuation in market prices, make a guarantee profit and live a prosperous life.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 order-lg-0">
                            {/* Features section device mockup*/}
                            <div className="photo features-device-mockup">
                                <img src="assets/john-deere-india-d-series-tractors.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Basic features section*/}
            <section className="bg-light">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                        <div className="col-12 col-lg-5">
                            <h2 className="display-4 lh-1 mb-4">Enter a new age of modern farming.</h2>
                            <p className="lead fw-normal text-muted mb-5 mb-lg-0">With our state of art machine learning algorithm we are able to predict the crop demand before the sowing season. Hence there will be no fluctuation in market prices of the crops leading to happy and prosperous life to all the farmers.</p>
                        </div>
                        <div className="col-sm-8 col-md-6">
                            <div className="px-5 px-sm-0"><img height='350px' className="img-fluid" src="assets/Kisan.jpg" alt="..." /></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Call to action section*/}
            <section className="cta">
                <div className="cta-content">
                    <div className="container px-5">
                        <h2 className="text-white display-1 lh-1 mb-4">
                            Stop worrying.
                            <br />
                            Start farming.
                        </h2>

                        <Link className="btn btn-outline-light py-3 px-4 rounded-pill" to="/tokenPage">
                          Buy Tokens Now
                        </Link>
                    </div>
                </div>
            </section>
            {/* App badge section*/}



        </>


    );
}

export default Home;
