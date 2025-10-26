import { useState, useEffect } from "react";
import './Home.css'

import Slider from "react-slick";
import { Link } from 'react-router-dom'
import banner1 from '../../assets/banner1.webp'
import banner2 from '../../assets/banner2.webp'
import banner3 from '../../assets/banner3.webp'
import best1 from '../../assets/best1.webp'
import best2 from '../../assets/best2.webp'
import best3 from '../../assets/best3.webp'
import best4 from '../../assets/best4.webp'
import best5 from '../../assets/best5.webp'
import blogs1 from '../../assets/blogs1.webp'
import blogs2 from '../../assets/blogs2.webp'
import blogs3 from '../../assets/blogs3.webp'
import gift1 from '../../assets/gift1.png'
import gift2 from '../../assets/gift2.png'
import gift3 from '../../assets/gift3.png'
import gift4 from '../../assets/gift4.png'
import gift5 from '../../assets/gift5.png'
import gift6 from '../../assets/gift6.png'
import gift7 from '../../assets/gift7.png'
import gift8 from '../../assets/gift8.png'
import support1 from '../../assets/support1.png'
import support2 from '../../assets/support2.png'
import support3 from '../../assets/support3.png'
import support4 from '../../assets/support4.png'
import services1 from '../../assets/services1.png'
import services2 from '../../assets/services2.png'
import services3 from '../../assets/services3.png'
import services4 from '../../assets/services4.png'
import special1 from '../../assets/special1.jpg'
import special2 from '../../assets/special2.jpg'
import special3 from '../../assets/special3.jpg'
import special4 from '../../assets/special4.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from '../../component/Testimonial/Testimonial'

const Home = () => {
    const [slidesToShow, setSlidesToShow] = useState(8);
    const [bestSlides, setBestSlides] = useState(5);

    useEffect(() => {
        const updateSlides = () => {
            const width = window.innerWidth;
            if (width <= 576) setSlidesToShow(2);
            else if (width <= 768) setSlidesToShow(2);
            else if (width <= 992) setSlidesToShow(4);
            else if (width <= 1200) setSlidesToShow(6);
            else setSlidesToShow(8);
        };

        updateSlides(); // run on mount
        window.addEventListener("resize", updateSlides);

        return () => window.removeEventListener("resize", updateSlides);
    }, []);

    const banner = [
        {
            image: banner1,
        },
        {
            image: banner2,
        },
        {
            image: banner3,
        }
    ]
    const banner_slider = {
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    };
    const gift_slider = {
        infinite: true,
        slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        pauseOnHover: false,
    };



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


  const [specialSlides, setSpecialSlides] = useState(3);

  useEffect(() => {
    const updateSpecialSlides = () => {
      const width = window.innerWidth;
      if (width <= 768) setSpecialSlides(1);
      else if (width <= 992) setSpecialSlides(2);
      else if (width <= 1440) setSpecialSlides(3);
      else setSpecialSlides(3);
    };

    updateSpecialSlides(); // run once on mount
    window.addEventListener("resize", updateSpecialSlides);

    return () => window.removeEventListener("resize", updateSpecialSlides);
  }, []);

  const special_slider = {
    infinite: true,
    autoplay: true,
    slidesToShow: specialSlides,
    slidesToScroll: 1,
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

    const gift = [
        {
            image: gift1,
            title: "birthday",
        },
        {
            image: gift2,
            title: "weddings",
        },
        {
            image: gift3,
            title: "anniversary",
        },
        {
            image: gift4,
            title: "flowers",
        },
        {
            image: gift5,
            title: "flowers arraements",
        },
        {
            image: gift6,
            title: "cakes",
        },
        {
            image: gift7,
            title: "chocolate",
        },
        {
            image: gift8,
            title: "combos",
        },
        {
            image: gift3,
            title: "anniversary",
        },
    ]

    const special = [
        {
            image: special1,
        },
        {
            image: special2,
        },
        {
            image: special3,
        },
        {
            image: special4,
        },
    ]
    const services = [
        {
            image: services1,
        },
        {
            image: services2,
        },
        {
            image: services3,
        },
        {
            image: services4,
        },
    ]

    const blogs = [
        {
            image: blogs1,
            date: "10 jul 2025",
            title: "Creating the Perfect Floral Gift Set with Chocolates, Cakes, and Bouquets",
            parra: "At Floral Hut, we believe in making every moment special with thoughtful gifts. A floral gift set, complete with flowers, chocolates, cakes, and decorative touches, is the perfect way to show someone you care. Whether you’re celebrating a birthday, anniversary, or just want to send love, creating the ideal gift is easier than you think. Here’s a simple guide to help you craft the perfect floral gift set and order it seamlessly from the Floral Hut website."
        },
        {
            image: blogs2,
            date: "15 Aug 2025",
            title: "Creating the Perfect Floral Gift Set with Chocolates, Cakes, and Bouquets",
            parra: "At Floral Hut, we believe in making every moment special with thoughtful gifts. A floral gift set, complete with flowers, chocolates, cakes, and decorative touches, is the perfect way to show someone you care. Whether you’re celebrating a birthday, anniversary, or just want to send love, creating the ideal gift is easier than you think. Here’s a simple guide to help you craft the perfect floral gift set and order it seamlessly from the Floral Hut website."
        },
        {
            image: blogs3,
            date: "26 Sep 2025",
            title: "Creating the Perfect Floral Gift Set with Chocolates, Cakes, and Bouquets",
            parra: "At Floral Hut, we believe in making every moment special with thoughtful gifts. A floral gift set, complete with flowers, chocolates, cakes, and decorative touches, is the perfect way to show someone you care. Whether you’re celebrating a birthday, anniversary, or just want to send love, creating the ideal gift is easier than you think. Here’s a simple guide to help you craft the perfect floral gift set and order it seamlessly from the Floral Hut website."
        },
    ]

    const support = [
        {
            icon: support1,
            title: "Customer Support",
            parra: "Need assistance? Call us and our team will help you out."
        },
        {
            icon: support2,
            title: "secure payment",
            parra: "Need assistance? Call us and our team will help you out."
        },
        {
            icon: support3,
            title: "shipping",
            parra: "Need assistance? Call us and our team will help you out."
        },
        {
            icon: support4,
            title: "easy return",
            parra: "Need assistance? Call us and our team will help you out."
        },

    ]

    return (
        <>
            <section className='banner_wrapper'>
                <Slider {...banner_slider} className="banner_slider">
                    {banner.map((banner, index) => (
                        <div className="banner_box" key={index}>
                            <img src={banner.image} className='img-fluid' loading='lazy' alt="banner_img" />
                        </div>

                    ))}
                </Slider>
            </section>

            {/* gift */}
            <section className='gift_wrapper global_wrapper pt-0'>
                <div className="container-fluid">
                    <div className="gift_wrapper__content">
                        <div className="main_heading">
                            <h2>Gifts for Every Occasion</h2>
                            <p>Express Your Feelings with Flowers, Chocolates and More...</p>
                        </div>
                        <div className="global_content">
                            <Slider {...gift_slider} className="gift_slider">
                                {gift.map((gift, index) => (
                                    <div className="gift_box" key={index}>
                                        <div className="gift_box__img">
                                            <img src={gift.image} className='img-fluid' loading='lazy' alt="gift_img" />
                                        </div>
                                        <div className="gift_box__content">
                                            <h3>{gift.title}</h3>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            {/* best seller */}
            <section className='best_seller global_wrapper' style={{ backgroundColor: "#EEF1F6" }}>
                <div className="container-fluid">
                    <div className="best_seller__content">
                        <div className="main_heading">
                            <h2>Best Seller</h2>
                            <p>Top Picks for Vibrant Bouquets and Arrangements</p>
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

            {/* best seller */}
            <section className='best_seller global_wrapper'>
                <div className="container-fluid">
                    <div className="best_seller__content">
                        <div className="main_heading">
                            <h2>cakes</h2>
                            <p>Celebrate their special day with our mouthwatering cakes and irresistible chocolate treats</p>
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

            {/* cta */}
            <section className='parallax_wrapper global_wrapper'>
                <div className="container">
                    <div className="parallax_wrapper__content">
                        <h2>A beautiful bouquet of flowers speaks the language of love, while a special present wrapped with care adds a touch of joy to every celebration.</h2>
                    </div>
                </div>
            </section>

            {/* best seller */}
            <section className='best_seller global_wrapper' style={{ backgroundColor: "#EEF1F6" }}>
                <div className="container-fluid">
                    <div className="best_seller__content">
                        <div className="main_heading">
                            <h2>Combos</h2>
                            <p>Top Picks for Vibrant Bouquets and Arrangements</p>
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

            {/* best seller */}
            <section className='best_seller global_wrapper'>
                <div className="container-fluid">
                    <div className="best_seller__content">
                        <div className="main_heading">
                            <h2>Flowers</h2>
                            <p>Celebrate their special day with our mouthwatering cakes and irresistible chocolate treats</p>
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

            {/* cta */}
            <section className='parallax_wrapper global_wrapper'>
                <div className="container">
                    <div className="parallax_wrapper__content">
                        <h2>Choosing the right flowers is like selecting a piece of art; they transform your space and uplift your spirit.</h2>                    </div>
                </div>
            </section>

            {/* special */}
            <section className='special_wrapper global_wrapper'>
                <div className="container-fluid">
                    <div className="special_wrapper__content">
                        <Slider {...special_slider} className="special_slider">
                            {special.map((special, index) => (
                                <div className="special_box" key={index}>
                                    <img src={special.image} className='img-fluid' loading='lazy' alt="special_img" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>

            {/* services */}
            <section className='services_wrapper global_wrapper'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="service_img">
                                {services.map((services, index) => (
                                    <div className="service_img__box" key={index}>
                                        <img src={services.image} className='img-fluid' loading='lazy' alt="services_img" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service_content">
                                <h3>Services</h3>
                                <p>At Floral Hut, we offer a range of services designed to bring beauty and elegance to your events and special moments. Our Space Design services transform any venue into a stunning floral paradise, perfect for celebrations or everyday décor.</p>
                                <p>  We also specialize in Personalized Gifts and Trousseau Packing, adding a unique, thoughtful touch to your gifting with customized floral creations and exquisite packaging.</p>
                                <p>  Our collection of Garlands and Bouquets offers the perfect floral arrangements for any occasion, from weddings to daily surprises. For those planning their big day, our Wedding Decoration service ensures a breathtaking ambiance with beautifully crafted floral designs that reflect your vision, making your celebration truly unforgettable.</p>
                                <p>  At Floral Hut, we ensure every service is crafted with care, passion, and a personalized touch.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonial />

            {/* blogs */}
            <section className='blogs_wrapper global_wrapper'>
                <div className="container-fluid">
                    <div className="blogs_wrapper__content">
                        <div className="main_heading">
                            <h2>Blooming Ideas for Floral Inspiration</h2>
                            <p>Check our blog for tips and ideas on flowers and gifts for your celebrations</p>
                        </div>
                        <div className="global_content">
                            <div className="row">
                                {blogs.map((blogs, index) => (
                                    <div className="col-lg-4" key={index}>
                                        <div className="blogs_box">
                                            <div className="blogs_box__img">
                                                <img src={blogs.image} className='img-fluid' loading='lazy' alt="blogs_img" />
                                                <span>{blogs.date}</span>
                                            </div>
                                            <div className="blogs_box__content">
                                                <h3>{blogs.title}</h3>
                                                <p>{blogs.parra}</p>
                                                <div className="myBtn">
                                                    <Link to="/" className="global_btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* welcome */}
            <section className='welcome_wrapper global_wrapper pt-0'>
                <div className="container-fluid">
                    <div className="welcome_wrapper__content">
                        <h2>Welcome to Floral Hut - Best Florist in Chennai</h2>
                        <h3>Celebrate Every Moment with the Flowers and Gifts</h3>
                        <p>Floral Hut prides itself on being known as the Best Florist in Chennai, providing you with fresh and beautiful flower bouquets for all of your special occasions. Whether it's a birthday, anniversary, wedding, or just a surprise, flowers from us are the perfect way to let someone know just how you feel. Our expert florists handcraft each arrangement with love and elegance. We also offer a same day flower delivery service to guarantee your gift arrives on time. You can place your order easily on the net or visit us in a shop and choose your favorite flowers and deliver them easily to loved ones. If you are searching for a Flower Bouquet Shop in Chennai, Floral Hut is your most reliable choice. We also offer you special combos like flowers and cakes to bring more joy to your occasion. Let us bring a smile to someone's face with our beautiful collections of flowers and doorstep delivery.</p>
                        <h3>Your Trusted Flower Bouquet Shop in Chennai</h3>
                        <p>Searching for a reliable flower bouquet shop in Chennai? With many years of experience in the floral industry, we've become a trusted name for quality flower arrangements. Our collection features beautifully handcrafted bouquets made from fresh roses, lilies, orchids, carnations, and more, perfect for any occasion: Anniversary, Birthday, love and romance, wedding, congratulations. Each bouquet is carefully designed with attention to detail to bring happiness to your loved ones. We take pride in offering a wide variety of floral gifts that suit every occasion. When it comes to fresh and meaningful flowers, we're here to make your moments truly memorable.</p>
                        <h3>Fresh and Beautiful Flowers with Same Day Delivery in Chennai</h3>
                        <p>At Floral Hut, we provide fresh & beautiful flowers, handpicked & arranged with loving care. Whether roses, lilies, or mixed bouquets, we provide same day delivery to make every moment special. Our florists guarantee quality & elegance in every bouquet. With a safe & timely delivery service, every flower is fresh, beautiful, & ready to brighten someone's day right on time, every time.</p>
                        <p>You can simply place an online flower purchase via our website or stop by our shop to pick out your preferred bouquet in person. We want your gift-giving experience to be happy and easy. Whether it's a planned celebration or an impromptu surprise, our staff is always available to assist you in making it memorable. With every bouquet, Floral Hut delivers smiles, gorgeous flowers, and dependable service.</p>
                        <h3>Best Online Flower Delivery in Chennai</h3>
                        <p>Enjoy smooth and fast online flower delivery in Chennai with Floral Hut. We make it simple to buy fresh flowers online, right from your home or office. Just pick a bouquet, add a personal message, and we'll deliver it at your chosen time. From romantic roses to cheerful mixed flowers, our online shop is full of beautiful choices. We guarantee quality, freshness, and a smile with every delivery.</p>
                        <p>Each bouquet is carefully handpicked and arranged by our expert florists to suit every occasion. Whether it's a birthday, anniversary, or just a sweet surprise, our flowers are perfect for expressing love and happiness.</p>
                        <p>Ordering is quick and easy, just a few clicks, and your flowers are on the way. We also offer combos like flowers with cakes to make your gift even more special. With safe packaging and timely delivery, Floral Hut ensures your flowers reach fresh and full of life, every single time.</p>
                        <h3>Celebrate with Cake and Flowers Delivery</h3>
                        <p>Make every celebration sweeter with our special cake and flower delivery in Chennai. Floral Hut offers beautiful flower bouquets paired with delicious cakes for birthdays, anniversaries, and more. Choose from chocolate, vanilla, or red velvet cakes and match them with your favorite flowers. It's the perfect gift combo to surprise your loved one and make their day extra special. Same-day cake and flower delivery is just a click away.</p>
                        <p>Each combo is prepared with care using fresh flowers and tasty cakes to match the occasion. Our team works with love to make sure every gift looks beautiful and feels special. Whether it's a last-minute surprise or a planned celebration, we're here to help.</p>
                        <p>Ordering is easy, just select your combo online, write a message, and we'll deliver it on time. With safe packaging and reliable delivery, your gift will arrive fresh, sweet, and full of joy, ready to make someone's day unforgettable.</p>
                        <h3>What are the Best Selling Flowers at Floral Hut?</h3>
                        <p>At Floral Hut, our most popular flowers include red roses, white lilies, orchids, and mixed flower bouquets. Our best-selling flower product is red roses, the natural selection for love and romantic moments like valentine's day and anniversaries. White lilies are considered a more formal flower and they have a gorgeous, peaceful look which is why people often choose them for formal events or thoughtful gifts. Orchids are enjoyed for their shape and long longevity, bouquet packs are massively popular, as they assort many cheerful colors into one bouquet. Mixed bouquets are often selected for birthdays, celebrations, and festive moments. We provide fresh arrangements of flowers for all special occasions like the ones below.</p>
                        <h3>Looking for the Best Flower Bouquet Near Me?</h3>
                        <p>Floral Hut offers a wide range of premium flower bouquets that are perfect for birthdays, anniversaries, and other special occasions. We deliver to all major areas in Chennai with care and speed. Want an easy way to order flowers online or Looking for flower bouquets near you with fast delivery service? Just browse our website, select your favorite bouquet, and we'll take care of the delivery.</p>
                        <p>We offer reliable flower delivery across multiple locations in chennai:</p>
                        <p>Adyar | Alwarpet | Anna nagar | Egmore | Guindy | Kilpauk | Kodambakkam | Mylapore | Nungambakkam | Perambur | Purasawalkam | Royapettah | T. Nagar | Teynampet | Vadapalani

                        </p>
                    </div>
                    <div className="support_card">
                        <div className="row">
                            {support.map((support, index) => (
                                <div className="col-xl-3 col-md-6" key={index}>
                                    <div className="support_card__box">
                                        <div className="icon">
                                            <img src={support.icon} className='img-fluid' loading='lazy' alt="icon" />
                                        </div>
                                        <div className="support_content">
                                            <h3>{support.title}</h3>
                                            <p>{support.parra}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Home