import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import './ProductDetails.css'
import bigcake from '../../assets/bigcake.webp'
import best1 from '../../assets/best1.webp'
import best2 from '../../assets/best2.webp'
import best3 from '../../assets/best3.webp'
import best4 from '../../assets/best4.webp'
import best5 from '../../assets/best5.webp'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetails = () => {
    const [bestSlides, setBestSlides] = useState(5);

    useEffect(() => {
        const updateBestSlides = () => {
            const width = window.innerWidth;
            if (width <= 768) setBestSlides(2);
            else if (width <= 992) setBestSlides(3);
            else if (width <= 1440) setBestSlides(4);
            else setBestSlides(5);
        };

        updateBestSlides();
        window.addEventListener("resize", updateBestSlides);
        return () => window.removeEventListener("resize", updateBestSlides);
    }, []);

    const best_seller__slider = {
        infinite: true,
        slidesToShow: bestSlides,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        arrows: false,
    };

    const best = [
        {
            image: best1,
            title: "flowers",
            name: "blush",
            price: "₹1750",
        },
        {
            image: best2,
            title: "flowers",
            name: "Pink Brambles",
            price: "₹1300",
        },
        {
            image: best3,
            title: "flowers",
            name: "bunch of peach roses",
            price: "₹450",
        },
        {
            image: best4,
            title: "flowers",
            name: "romantic tale",
            price: "₹1750",
        },
        {
            image: best5,
            title: "flowers",
            name: "yellow delight",
            price: "₹2050",
        },
        {
            image: best3,
            title: "flowers",
            name: "bunch of peach roses",
            price: "₹450",
        },
    ]
    return (
        <>
            <section className='breadcrumb_wrapper'>
                <div className="container">
                    <div className="breadcrumb_wrapper__content">
                        <h2>Fresh Fruit Cake</h2>
                        <div className="breadcrumb_menu">
                            <Link to="/">Home</Link>
                            <span>/</span>
                            <Link to="/Product">All Products</Link>
                            <span>/</span>
                            <p>Fresh Fruit Cake</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='product_detials global_wrapper'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-4 col-md-6">
                            <div className="product_detials__left">
                                <div className="big_img">
                                    <img src={bigcake} className='img-fluid' loading='lazy' alt="bigcake" />
                                </div>
                                <div className="small_img">
                                    <img src={bigcake} className='img-fluid' loading='lazy' alt="smallcake" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-md-6">
                            <div class="product_detials__right">
                                <div class="product_detail">
                                    <h3>Fresh Fruit Cake</h3>
                                    <div class="reviews">
                                        <div className="reviews_raitngs"> ★★★★★</div> 0 customer reviews
                                    </div>
                                    <h2>₹ 1850</h2>
                                    <p>  1 Kg fresh fruit cake with white icing and covered with five different
                                        fruits on the top base and drizzled strawberry crush
                                    </p>


                                    <div class="pincode_check">
                                        <select>
                                            <option value="">Select delivery pincode</option>
                                            <option value="110001">110001</option>
                                            <option value="560001">560001</option>
                                        </select>
                                        <button class="check_btn global_btn">
                                            Check availability
                                        </button>
                                    </div>
                                    <p className="red-text">Select your delivery pincode to see available options.</p>
                                    <span className="yellow-color">Available in limited cities*</span>

                                    <div class="occasion_select">
                                        <label>Free Message Card</label>
                                        <select className="global_btn">
                                            <option value="">Select Occasion</option>
                                            <option value="birthday">Birthday</option>
                                            <option value="anniversary">Anniversary</option>
                                            <option value="wedding">Wedding</option>
                                        </select>
                                    </div>
                                    <div className="cart--btn">
                                        <button class="add_to_cart_btn global_btn">
                                            Add to Cart
                                        </button>
                                    </div>
                                    <div class="sold_by">
                                        <p> <strong>Sold by:</strong> Floral Hut</p>
                                        <p>  <strong>Country of Origin:</strong> India</p>
                                    </div>

                                    <div class="share">
                                        <span>Share: </span>
                                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                        <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                                        <a href="#"><i class="fa-solid fa-copy"></i></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* review */}
            <section className='best_seller global_wrapper' style={{ backgroundColor: "#EEF1F6" }}>
                <div className="container-fluid">
                    <div className="best_seller__content">
                        <div className="main_heading">
                            <h2>Related Products</h2>

                        </div>
                        <div className="global_content">
                            <Slider {...best_seller__slider} className="best_seller__slider">
                                {best.map((best, index) => (
                                    <div className="best_box" key={index}>
                                        <div className="best_box__img">
                                            <img src={best.image} className='img-fluid' alt="best_img" />
                                        </div>
                                        <div className="best_box__content">
                                            <h6>{best.title}</h6>
                                            <h3>{best.name} <span>{best.price}</span></h3>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails