import React, { useEffect, useContext } from 'react';
import './Navbar.css';
import aboutpic from './about.PNG'
import aim from './aim.jfif'




export default function About(props) {




    useEffect(() => {
        setTimeout(() => {
            props.setProgress(50);
            props.setProgress(100);
        }, 500);

    }, [])





    return (
        <>

            <div id='about'>
                <h1 id="about-head">About MySolar</h1>
                <div className='firstContent'>
                    <h2>OVERVIEW</h2>
                    <p>Brightening lives across the world, <b>MySolar</b> is aiming to become India’s largest integrated solar company.
                        <br />
                        We are in the business of providing smiles to millions through our innovative range of solar products that makes life better.</p>
                    <img src={aboutpic} />

                </div>
                <div className='secondContent'>
                    <h2>What we do</h2>
                    <p><b>MySolar</b> is a powerful and trustworthy brand with a wide range of innovative products in the power backup, home electrical and residential solar space that covers, inverters Batteries, Solar solutions to home electricals offerings such as Fans, Modular Switches and LED lighting.
                        <br />
                        With 7 manufacturing units, more than 28 sales offices in India and presence in over 36 countries, our 6000 employees serve more than 60,000 channel partners and millions of customers. Our motto has always been Customer Delight through Innovation & Passion with the focus on Execution & Team-work. At <b>MySolar</b>, we passionately innovate to make life comfortable and efficient.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xKxrkht7CpY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className='thirdContent'>
                    <h2>Our Aim</h2>
                    <img src={aim} alt="" style={{width:'125px'}}/>
                    <p>
                    MySolar is an all in one platform for all rooftop solar plant requirements. We aim to provide a hassle-free experience to users who want rooftop solar plants at their homes. We also provide our users with a way to estimate their return on investment and the impact on the environment. Through our meaningful partnerships with solar equipment manufacturers, we aim to bring rooftop solar plants into the mainstream market and support aatmanirbhar Bharat and vocal for local.
                    </p>
                </div>

            </div>

        </>
    )
}
