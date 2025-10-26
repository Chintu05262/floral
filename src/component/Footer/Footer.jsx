import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.webp'
import './Footer.css'
import amex from '../../assets/amex.svg'
import bhim from '../../assets/bhim.svg'
import gpay from '../../assets/gpay.svg'
import mastercard from '../../assets/mastercard.svg'
import paytm from '../../assets/paytm.svg'
import phonepe from '../../assets/phonepe.svg'
import rupay from '../../assets/rupay.svg'
import upi from '../../assets/upi.svg'
import visa from '../../assets/visa.svg'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer_wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="footer_left">
                                    <div className="footer_logo">
                                        <Link to="/"><img src={logo} className='img-fluid' loading='lazy' alt="logo" /></Link>
                                        <p>Floral Hut is a trusted florist in Chennai, offering fresh flower bouquets and same day delivery for all special occasions.</p>
                                        <div className="social_icon">
                                            <Link to="/"><i class="fa-brands fa-facebook-f"></i></Link>
                                            <Link to="/"><i class="fa-brands fa-instagram"></i></Link>
                                            <Link to="/"><i class="fa-brands fa-youtube"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="row">

                                    <div className="col-xl-3 col-lg-4 col-6">
                                        <div className="footer_box">
                                            <h3>Our Links</h3>
                                            <div className="footer_links">
                                                <Link to="/">Contact Us</Link>
                                                <Link to="/">    Privacy Policy</Link>
                                                <Link to="/">    Terms & Conditions</Link>
                                                <Link to="/">   Return Policy</Link>
                                                <Link to="/">    Orders & Acceptance Policy</Link>
                                                <Link to="/">    Shipping & Delivery Policy</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-6">
                                        <div className="footer_box">
                                            <h3>Our Product</h3>
                                            <div className="footer_links">
                                                <Link to="/">Contact Us</Link>
                                                <Link to="/">    Privacy Policy</Link>
                                                <Link to="/">    Terms & Conditions</Link>
                                                <Link to="/">   Return Policy</Link>
                                                <Link to="/">    Orders & Acceptance Policy</Link>
                                                <Link to="/">    Shipping & Delivery Policy</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-6">
                                        <div className="footer_box">
                                            <h3>Our Services</h3>
                                            <div className="footer_links">
                                                <Link to="/">Contact Us</Link>
                                                <Link to="/">    Privacy Policy</Link>
                                                <Link to="/">    Terms & Conditions</Link>
                                                <Link to="/">   Return Policy</Link>
                                                <Link to="/">    Orders & Acceptance Policy</Link>
                                                <Link to="/">    Shipping & Delivery Policy</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-6">
                                        <div className="footer_box">
                                            <h3>Occasions</h3>
                                            <div className="footer_links">
                                                <Link to="/">Contact Us</Link>
                                                <Link to="/">    Privacy Policy</Link>
                                                <Link to="/">    Terms & Conditions</Link>
                                                <Link to="/">   Return Policy</Link>
                                                <Link to="/">    Orders & Acceptance Policy</Link>
                                                <Link to="/">    Shipping & Delivery Policy</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="company_info">
                            <div className="company_info__left">
                                <Link to="tel:+91 90032 02020"><i class="fa-solid fa-phone"></i>+91 90032 02020</Link>
                                <Link to="mailto:order@floralhut.in"><i class="fa-solid fa-envelope"></i>order@floralhut.in</Link>
                            </div>
                            <div className="company_info__right">
                                <img src={gpay} className='img-fluid' loading='lazy' alt="icon" />
                                <img src={mastercard} className='img-fluid' loading='lazy' alt="icon" />
                                <img src={paytm} className='img-fluid' loading='lazy' alt="icon" />
                                <img src={phonepe} className='img-fluid' loading='lazy' alt="icon" />
                                <img src={rupay} className='img-fluid' loading='lazy' alt="icon" />
                                <img src={upi} className='img-fluid' loading='lazy' alt="icon" />
                                <img src={visa} className='img-fluid' loading='lazy' alt="icon" />
                                <img src={bhim} className='img-fluid' loading='lazy' alt="icon" />
                                <img src={amex} className='img-fluid' loading='lazy' alt="icon" />
                            </div>
                        </div>
                        <div className="copyright">
                            <p>Powered by Bechofy - A Product of  Global Trendz</p>
                            <p>Copyright © 2025 Floral Hut. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer