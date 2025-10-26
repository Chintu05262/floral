import React from 'react'
import './Product.css'
import breadcrumb from '../../assets/breadcrumb.jpg'
import { Link } from 'react-router-dom'
import cake1 from '../../assets/cake1.webp'
import cake2 from '../../assets/cake2.webp'
import cake3 from '../../assets/cake3.webp'
import cake4 from '../../assets/cake4.webp'
import cake5 from '../../assets/cake5.webp'
import cake6 from '../../assets/cake6.webp'

const Product = () => {
    const best = [
        {
            image: cake1,
            title: "cakes",
            name: "fresh druit cake",
            price: "₹1750",
        },
        {
            image: cake2,
            title: "cakes",
            name: "Pink Brambles",
            price: "₹1300",
        },
        {
            image: cake3,
            title: "cakes",
            name: "bunch of peach roses",
            price: "₹450",
        },
        {
            image: cake4,
            title: "cakes",
            name: "romantic tale",
            price: "₹1750",
        },
        {
            image: cake5,
            title: "cakes",
            name: "yellow delight",
            price: "₹2050",
        },
        {
            image: cake6,
            title: "cakes",
            name: "bunch of peach roses",
            price: "₹450",
        },
        {
            image: cake1,
            title: "cakes",
            name: "fresh druit cake",
            price: "₹1750",
        },
        {
            image: cake2,
            title: "cakes",
            name: "Pink Brambles",
            price: "₹1300",
        },
        {
            image: cake3,
            title: "cakes",
            name: "bunch of peach roses",
            price: "₹450",
        },
        {
            image: cake4,
            title: "cakes",
            name: "romantic tale",
            price: "₹1750",
        },
        {
            image: cake5,
            title: "cakes",
            name: "yellow delight",
            price: "₹2050",
        },
        {
            image: cake6,
            title: "cakes",
            name: "bunch of peach roses",
            price: "₹450",
        },
        {
            image: cake3,
            title: "cakes",
            name: "bunch of peach roses",
            price: "₹450",
        },
        {
            image: cake4,
            title: "cakes",
            name: "romantic tale",
            price: "₹1750",
        },
        {
            image: cake5,
            title: "cakes",
            name: "yellow delight",
            price: "₹2050",
        },
        {
            image: cake6,
            title: "cakes",
            name: "bunch of peach roses",
            price: "₹450",
        },
        {
            image: cake1,
            title: "cakes",
            name: "fresh druit cake",
            price: "₹1750",
        },
        {
            image: cake2,
            title: "cakes",
            name: "Pink Brambles",
            price: "₹1300",
        },
        {
            image: cake3,
            title: "cakes",
            name: "bunch of peach roses",
            price: "₹450",
        },
        {
            image: cake4,
            title: "cakes",
            name: "romantic tale",
            price: "₹1750",
        },
        {
            image: cake5,
            title: "cakes",
            name: "yellow delight",
            price: "₹2050",
        },
        {
            image: cake6,
            title: "cakes",
            name: "bunch of peach roses",
            price: "₹450",
        },
    ]
    return (
        <>
            <section className='banner_wrapper'>
                <div className="banner_img">
                    <img src={breadcrumb} className='img-fluid' loading='lazy' alt="banner_img" />
                </div>
            </section>

            <section className='product_wrapper global_wrapper'>
                <div className="container-fluid">
                    <div className="product_wrapper__content">
                        <div className="main_heading">
                            <h2>All Cakes</h2>
                            <p>Indulge in the sweetness of our freshly baked cakes, crafted to perfection for every occasion. Whether it’s a birthday, anniversary, or just because, our cakes are sure to add a special touch to your celebrations.</p>
                        </div>
                        <div className="filter_btn">
                            <button className='global_btn'><i class="fa-solid fa-filter"></i>filter</button>
                        </div>
                        <div className="global_content">
                            <div className="row">
                                {best.map((best, index) => (
                                    <div className="col-xl-3 col-lg-4 col-6" key={index}>
                                        <Link to="/ProductDetails">
                                            <div className="best_box" >
                                                <div className="best_box__img">
                                                    <img src={best.image} className='img-fluid' alt="best_img" />
                                                </div>
                                                <div className="best_box__content">
                                                    <h6>{best.title}</h6>
                                                    <h3>{best.name} <span>{best.price}</span></h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product