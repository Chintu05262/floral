import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonial.css'

const Testimonial = () => {
    const testimonial = [
        {
            parra: "I hired Floral Hut Events for my sister's engagement party, and I was impressed by their professionalism and creativity. Rahul and his team transformed the venue with stunning floral designs that perfectly matched the theme. It was a pleasure working with them, and I highly recommend their services!",
            name: "Rahul Sharma",
        },
        {
            parra: "I hired Floral Hut Events for my sister's engagement party, and I was impressed by their professionalism and creativity. Rahul and his team transformed the venue with stunning floral designs that perfectly matched the theme. It was a pleasure working with them, and I highly recommend their services!",
            name: "Alisha Reddy",
        },
        {
            parra: "I hired Floral Hut Events for my sister's engagement party, and I was impressed by their professionalism and creativity. Rahul and his team transformed the venue with stunning floral designs that perfectly matched the theme. It was a pleasure working with them, and I highly recommend their services!",
            name: "Priya Patel",
        },

    ]
 const [testimonialSlides, setTestimonialSlides] = useState(2);

  useEffect(() => {
    const updateTestimonialSlides = () => {
      const width = window.innerWidth;
      if (width <= 768) setTestimonialSlides(1);
      else if (width <= 1200) setTestimonialSlides(1);
      else setTestimonialSlides(2);
    };

    updateTestimonialSlides(); // run once on mount
    window.addEventListener("resize", updateTestimonialSlides);

    return () => window.removeEventListener("resize", updateTestimonialSlides);
  }, []);

  const testimonial_slider = {
    infinite: true,
    autoplay: true,
    slidesToShow: testimonialSlides,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    mobileFirst: true,
  };

    return (
        <>
            <section className='testimonial_wrapper global_wrapper'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5"></div>
                        <div className="col-lg-7">
                            <Slider {...testimonial_slider} className="testimonial_slider">
                                {testimonial.map((testimonial, index) => (

                                    <div className="testimonial_box" key={index}>
                                        <div className="testimonial_box__content">
                                            <p>{testimonial.parra}</p>
                                            <div className="ratings">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                            <h6>{testimonial.name}</h6>
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

export default Testimonial