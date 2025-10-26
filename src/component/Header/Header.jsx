import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.webp'
import './Header.css'
import flower from '../../assets/flower1.webp'
import Cakes from '../../assets/Cakes.webp'
import Combos from '../../assets/Combos.webp'
import Flowers from '../../assets/Flowers.webp'
import Birthday from '../../assets/Birthday.webp'
import Occassion from '../../assets/Occassion.webp'
import Anniversary from '../../assets/Anniversary.webp'

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    window.addEventListener("scroll", function () {
        var header = this.document.querySelector(".myNav");
        header.classList.toggle("sticky", this.window.scrollY > 0);
    });
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <header>
                <nav>
                    <div className="myNav">
                        <div className="myNav_content">
                            <div className="logo">
                                <Link to="/"><img src={logo} className='img-fluid' loading='lazy' alt="logo" /></Link>
                            </div>
                            <div className="menu">
                                <ul>
                                    <li className='dropdown_menu'><Link to="#">flower arrangement <i class="fa-solid fa-angle-down"></i></Link>
                                        <div className="dropdown_menu__list">
                                            <div className="dropdown_box">
                                                <img src={flower} className='img-fluid' loading='lazy' alt="flower" />
                                            </div>
                                            <div className="dropdown_box">
                                                <h6>Blossom Arrangement</h6>
                                                <div className="dropdown_box__links">
                                                    <Link to="/Product">Flower Vase</Link>
                                                    <Link to="/">Flower Bouquets</Link>
                                                    <Link to="/">Flower Basket</Link>
                                                    <Link to="/">Flower Bunch</Link>
                                                    <Link to="/">Wooden Base</Link>
                                                </div>
                                            </div>
                                            <div className="dropdown_box">
                                                <h6>Flower Arrangement For Every Occasion</h6>
                                                <div className="dropdown_box__links">
                                                    <Link to="/">Birthday</Link>
                                                    <Link to="/"> Anniversary</Link>
                                                    <Link to="/"> Congratulations</Link>
                                                    <Link to="/"> Romantic Flowers</Link>
                                                    <Link to="/"> Wedding Flowers</Link>
                                                    <Link to="/">House Warming</Link>
                                                    <Link to="/">Condolences</Link>

                                                </div>
                                            </div>
                                            <div className="dropdown_box">
                                                <h6>Flower By Color</h6>
                                                <div className="dropdown_box__links">
                                                    <Link to="/">Red</Link>
                                                    <Link to="/">Yellow</Link>
                                                    <Link to="/">Pink</Link>
                                                    <Link to="/">Purple</Link>
                                                    <Link to="/">Blue</Link>
                                                    <Link to="/">Orange</Link>
                                                    <Link to="/">White</Link>
                                                    <Link to="/">Peach</Link>

                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='dropdown_menu'><Link to="#">cakes <i class="fa-solid fa-angle-down"></i></Link>
                                        <div className="dropdown_menu__list">
                                            <div className="dropdown_box">
                                                <img src={Cakes} className='img-fluid' loading='lazy' alt="flower" />
                                            </div>
                                            <div className="dropdown_box">
                                                <h6>Blossom Arrangement</h6>
                                                <div className="dropdown_box__links">
                                                        <Link to="/Product">Flower Vase</Link>
                                                    <Link to="/">Flower Bouquets</Link>
                                                    <Link to="/">Flower Basket</Link>
                                                    <Link to="/">Flower Bunch</Link>
                                                    <Link to="/">Wooden Base</Link>
                                                </div>
                                            </div>
                                            <div className="dropdown_box">
                                                <h6>Flower Arrangement For Every Occasion</h6>
                                                <div className="dropdown_box__links">
                                                    <Link to="/">Birthday</Link>
                                                    <Link to="/"> Anniversary</Link>
                                                    <Link to="/"> Congratulations</Link>
                                                    <Link to="/"> Romantic Flowers</Link>
                                                    <Link to="/"> Wedding Flowers</Link>
                                                    <Link to="/">House Warming</Link>
                                                    <Link to="/">Condolences</Link>

                                                </div>
                                            </div>
                                            <div className="dropdown_box">
                                                <h6>Flower By Color</h6>
                                                <div className="dropdown_box__links">
                                                    <Link to="/">Red</Link>
                                                    <Link to="/">Yellow</Link>
                                                    <Link to="/">Pink</Link>
                                                    <Link to="/">Purple</Link>
                                                    <Link to="/">Blue</Link>
                                                    <Link to="/">Orange</Link>
                                                    <Link to="/">White</Link>
                                                    <Link to="/">Peach</Link>

                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='dropdown_menu'><Link to="#">combos <i class="fa-solid fa-angle-down"></i></Link>
                                        <div className="dropdown_menu__list">
                                            <div className="dropdown_box">
                                                <img src={Combos} className='img-fluid' loading='lazy' alt="flower" />
                                            </div>
                                            <div className="dropdown_box">
                                                <h6>Blossom Arrangement</h6>
                                                <div className="dropdown_box__links">
                                                        <Link to="/Product">Flower Vase</Link>
                                                    <Link to="/">Flower Bouquets</Link>
                                                    <Link to="/">Flower Basket</Link>
                                                    <Link to="/">Flower Bunch</Link>
                                                    <Link to="/">Wooden Base</Link>
                                                </div>
                                            </div>
                                            <div className="dropdown_box">
                                                <h6>Flower Arrangement For Every Occasion</h6>
                                                <div className="dropdown_box__links">
                                                    <Link to="/">Birthday</Link>
                                                    <Link to="/"> Anniversary</Link>
                                                    <Link to="/"> Congratulations</Link>
                                                    <Link to="/"> Romantic Flowers</Link>
                                                    <Link to="/"> Wedding Flowers</Link>
                                                    <Link to="/">House Warming</Link>
                                                    <Link to="/">Condolences</Link>

                                                </div>
                                            </div>
                                            <div className="dropdown_box">
                                                <h6>Flower By Color</h6>
                                                <div className="dropdown_box__links">
                                                    <Link to="/">Red</Link>
                                                    <Link to="/">Yellow</Link>
                                                    <Link to="/">Pink</Link>
                                                    <Link to="/">Purple</Link>
                                                    <Link to="/">Blue</Link>
                                                    <Link to="/">Orange</Link>
                                                    <Link to="/">White</Link>
                                                    <Link to="/">Peach</Link>

                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='dropdown_menu'><Link to="#">flowers <i class="fa-solid fa-angle-down"></i></Link>
                                        <div className="dropdown_menu__list">
                                            <div className="dropdown_box">
                                                <img src={Flowers} className='img-fluid' loading='lazy' alt="flower" />
                                            </div>
                                            <div className="dropdown_box">
                                                <h6>Blossom Arrangement</h6>
                                                <div className="dropdown_box__links">
                                                        <Link to="/Product">Flower Vase</Link>
                                                    <Link to="/">Flower Bouquets</Link>
                                                    <Link to="/">Flower Basket</Link>
                                                    <Link to="/">Flower Bunch</Link>
                                                    <Link to="/">Wooden Base</Link>
                                                </div>
                                            </div>
                                            <div className="dropdown_box">
                                                <h6>Flower Arrangement For Every Occasion</h6>
                                                <div className="dropdown_box__links">
                                                    <Link to="/">Birthday</Link>
                                                    <Link to="/"> Anniversary</Link>
                                                    <Link to="/"> Congratulations</Link>
                                                    <Link to="/"> Romantic Flowers</Link>
                                                    <Link to="/"> Wedding Flowers</Link>
                                                    <Link to="/">House Warming</Link>
                                                    <Link to="/">Condolences</Link>

                                                </div>
                                            </div>
                                            <div className="dropdown_box">
                                                <h6>Flower By Color</h6>
                                                <div className="dropdown_box__links">
                                                    <Link to="/">Red</Link>
                                                    <Link to="/">Yellow</Link>
                                                    <Link to="/">Pink</Link>
                                                    <Link to="/">Purple</Link>
                                                    <Link to="/">Blue</Link>
                                                    <Link to="/">Orange</Link>
                                                    <Link to="/">White</Link>
                                                    <Link to="/">Peach</Link>

                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='dropdown_menu'><Link to="#">occasion <i class="fa-solid fa-angle-down"></i></Link>
                                        <div className="dropdown_menu__list">
                                            <div className="dropdown_box">
                                                <img src={Occassion} className='img-fluid' loading='lazy' alt="flower" />
                                            </div>
                                            <div className="dropdown_box">
                                                <h6>Blossom Arrangement</h6>
                                                <div className="dropdown_box__links">
                                                        <Link to="/Product">Flower Vase</Link>
                                                    <Link to="/">Flower Bouquets</Link>
                                                    <Link to="/">Flower Basket</Link>
                                                    <Link to="/">Flower Bunch</Link>
                                                    <Link to="/">Wooden Base</Link>
                                                </div>
                                            </div>
                                            <div className="dropdown_box">
                                                <h6>Flower Arrangement For Every Occasion</h6>
                                                <div className="dropdown_box__links">
                                                    <Link to="/">Birthday</Link>
                                                    <Link to="/"> Anniversary</Link>
                                                    <Link to="/"> Congratulations</Link>
                                                    <Link to="/"> Romantic Flowers</Link>
                                                    <Link to="/"> Wedding Flowers</Link>
                                                    <Link to="/">House Warming</Link>
                                                    <Link to="/">Condolences</Link>

                                                </div>
                                            </div>
                                            <div className="dropdown_box">
                                                <h6>Flower By Color</h6>
                                                <div className="dropdown_box__links">
                                                    <Link to="/">Red</Link>
                                                    <Link to="/">Yellow</Link>
                                                    <Link to="/">Pink</Link>
                                                    <Link to="/">Purple</Link>
                                                    <Link to="/">Blue</Link>
                                                    <Link to="/">Orange</Link>
                                                    <Link to="/">White</Link>
                                                    <Link to="/">Peach</Link>

                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='dropdown_menu'><Link to="#">birthday <i class="fa-solid fa-angle-down"></i></Link>
                                        <div className="dropdown_menu__list">
                                            <div className="dropdown_box">
                                                <img src={Birthday} className='img-fluid' loading='lazy' alt="flower" />
                                            </div>
                                            <div className="dropdown_box">
                                                <h6>Blossom Arrangement</h6>
                                                <div className="dropdown_box__links">
                                                        <Link to="/Product">Flower Vase</Link>
                                                    <Link to="/">Flower Bouquets</Link>
                                                    <Link to="/">Flower Basket</Link>
                                                    <Link to="/">Flower Bunch</Link>
                                                    <Link to="/">Wooden Base</Link>
                                                </div>
                                            </div>
                                            <div className="dropdown_box">
                                                <h6>Flower Arrangement For Every Occasion</h6>
                                                <div className="dropdown_box__links">
                                                    <Link to="/">Birthday</Link>
                                                    <Link to="/"> Anniversary</Link>
                                                    <Link to="/"> Congratulations</Link>
                                                    <Link to="/"> Romantic Flowers</Link>
                                                    <Link to="/"> Wedding Flowers</Link>
                                                    <Link to="/">House Warming</Link>
                                                    <Link to="/">Condolences</Link>

                                                </div>
                                            </div>
                                            <div className="dropdown_box">
                                                <h6>Flower By Color</h6>
                                                <div className="dropdown_box__links">
                                                    <Link to="/">Red</Link>
                                                    <Link to="/">Yellow</Link>
                                                    <Link to="/">Pink</Link>
                                                    <Link to="/">Purple</Link>
                                                    <Link to="/">Blue</Link>
                                                    <Link to="/">Orange</Link>
                                                    <Link to="/">White</Link>
                                                    <Link to="/">Peach</Link>

                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='dropdown_menu'><Link to="#">anniversary <i class="fa-solid fa-angle-down"></i></Link>
                                        <div className="dropdown_menu__list">
                                            <div className="dropdown_box">
                                                <img src={Anniversary} className='img-fluid' loading='lazy' alt="flower" />
                                            </div>
                                            <div className="dropdown_box">
                                                <h6>Blossom Arrangement</h6>
                                                <div className="dropdown_box__links">
                                                        <Link to="/Product">Flower Vase</Link>
                                                    <Link to="/">Flower Bouquets</Link>
                                                    <Link to="/">Flower Basket</Link>
                                                    <Link to="/">Flower Bunch</Link>
                                                    <Link to="/">Wooden Base</Link>
                                                </div>
                                            </div>
                                            <div className="dropdown_box">
                                                <h6>Flower Arrangement For Every Occasion</h6>
                                                <div className="dropdown_box__links">
                                                    <Link to="/">Birthday</Link>
                                                    <Link to="/"> Anniversary</Link>
                                                    <Link to="/"> Congratulations</Link>
                                                    <Link to="/"> Romantic Flowers</Link>
                                                    <Link to="/"> Wedding Flowers</Link>
                                                    <Link to="/">House Warming</Link>
                                                    <Link to="/">Condolences</Link>

                                                </div>
                                            </div>
                                            <div className="dropdown_box">
                                                <h6>Flower By Color</h6>
                                                <div className="dropdown_box__links">
                                                    <Link to="/">Red</Link>
                                                    <Link to="/">Yellow</Link>
                                                    <Link to="/">Pink</Link>
                                                    <Link to="/">Purple</Link>
                                                    <Link to="/">Blue</Link>
                                                    <Link to="/">Orange</Link>
                                                    <Link to="/">White</Link>
                                                    <Link to="/">Peach</Link>

                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="header_icon">
                                <ul>
                                    <li><i class="fa-solid fa-magnifying-glass"></i></li>
                                    <li><Link to="/"><i class="fa-solid fa-user"></i></Link></li>
                                    <li><Link to="/"><i class="fa-solid fa-cart-shopping"></i></Link></li>
                                    <li><Link to="/" className='cart_btn'><span> 0</span> Item</Link></li>
                                </ul>
                                <div className="menu_icon" onClick={() => setIsMenuOpen(true)}>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" dataSlot="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm0 10.5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 2 10Z" clip-rule="evenodd"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* mobile nav */}
                    <div className={`mobileNav ${isMenuOpen ? 'active' : ''}`}>
                        <div className="mobileNav_content">
                            <div className="mobile_header">
                                <div className="logo">
                                    <Link to="/"><img src={logo} className='img-fluid' loading='lazy' alt="logo" /></Link>
                                </div>
                                <div className="close_icon" onClick={() => setIsMenuOpen(false)}>
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                            </div>
                            <div className="mobile_menu">
                                <ul>
                                    <li className={`outer_menu ${activeIndex === 0 ? "active" : ""}`}
                                        onClick={() => handleToggle(0)}>
                                        <Link className="main_menu">
                                            Flower Arrangement <i className="fa-solid fa-chevron-down"></i>
                                        </Link>

                                        <div className="outer_menu__list"
                                            style={{
                                                display: activeIndex === 0 ? "block" : "none",
                                                padding: "0 1rem 0 2rem",
                                            }}>
                                            <ul>
                                                <li>
                                                    <Link className="main_menu" style={{ padding: "0 1rem 12px 0" }}>
                                                        Blossom Arrangement <i className="fa-solid fa-chevron-down"></i>
                                                    </Link>
                                                    <div className="mega_dropdown__list">
                                                        <ul>
                                                            <li><Link to="/" className='main_menu'>Flower Vase</Link></li>
                                                            <li><Link to="/" className='main_menu'>  Flower Bouquets</Link></li>
                                                            <li><Link to="/" className='main_menu'>  Flower Basket</Link></li>
                                                            <li><Link to="/" className='main_menu'>  Flower Bunch</Link></li>
                                                            <li><Link to="/" className='main_menu'>  Wooden Base</Link></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <Link className="main_menu" style={{ padding: "0 1rem 12px 0" }}>
                                                        Flower Arrangement For Every Occasion{" "}
                                                        <i className="fa-solid fa-chevron-down"></i>
                                                    </Link>
                                                    <div className="mega_dropdown__list">
                                                        <ul>
                                                            <li><Link to="/" className='main_menu'>Flower Vase</Link></li>
                                                            <li><Link to="/" className='main_menu'>  Flower Bouquets</Link></li>
                                                            <li><Link to="/" className='main_menu'>  Flower Basket</Link></li>
                                                            <li><Link to="/" className='main_menu'>  Flower Bunch</Link></li>
                                                            <li><Link to="/" className='main_menu'>  Wooden Base</Link></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <Link className="main_menu" style={{ padding: "0 1rem 12px 0" }}>
                                                        Flower By Color <i className="fa-solid fa-chevron-down"></i>
                                                    </Link>
                                                    <div className="mega_dropdown__list">
                                                        <ul>
                                                            <li><Link to="/" className='main_menu'>Flower Vase</Link></li>
                                                            <li><Link to="/" className='main_menu'>  Flower Bouquets</Link></li>
                                                            <li><Link to="/" className='main_menu'>  Flower Basket</Link></li>
                                                            <li><Link to="/" className='main_menu'>  Flower Bunch</Link></li>
                                                            <li><Link to="/" className='main_menu'>  Wooden Base</Link></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className={`outer_menu ${activeIndex === 1 ? "active" : ""}`}
                                        onClick={() => handleToggle(1)} >
                                        <Link className="main_menu">
                                            Cakes <i className="fa-solid fa-chevron-down"></i>
                                        </Link>

                                        <div className="outer_menu__list" style={{
                                            display: activeIndex === 1 ? "block" : "none",
                                            padding: "0 1rem 0 2rem",
                                        }}>
                                            <ul>
                                                <li>
                                                    <Link className="main_menu" style={{ padding: "0 1rem 12px 0" }}>
                                                        Chocolate Cake <i className="fa-solid fa-chevron-down"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="main_menu" style={{ padding: "0 1rem 12px 0" }}>
                                                        Red Velvet Cake <i className="fa-solid fa-chevron-down"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="main_menu" style={{ padding: "0 1rem 12px 0" }}>
                                                        Fruit Cake <i className="fa-solid fa-chevron-down"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className={`outer_menu ${activeIndex === 2 ? "active" : ""}`}
                                        onClick={() => handleToggle(2)}>
                                        <Link className="main_menu">
                                            Combos <i className="fa-solid fa-chevron-down"></i>
                                        </Link>

                                        <div
                                            className="outer_menu__list"
                                            style={{
                                                display: activeIndex === 2 ? "block" : "none",
                                                padding: "0 1rem 0 2rem",
                                            }}
                                        >
                                            <ul>
                                                <li>
                                                    <Link className="main_menu" style={{ padding: "0 1rem 12px 0" }}>
                                                        Cake & Flower Combo <i className="fa-solid fa-chevron-down"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="main_menu" style={{ padding: "0 1rem 12px 0" }}>
                                                        Chocolate & Bouquet <i className="fa-solid fa-chevron-down"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="main_menu" style={{ padding: "0 1rem 12px 0" }}>
                                                        Anniversary Combo <i className="fa-solid fa-chevron-down"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className={`outer_menu ${activeIndex === 3 ? "active" : ""}`}
                                        onClick={() => handleToggle(3)}>
                                        <Link className="main_menu">
                                            flowers <i className="fa-solid fa-chevron-down"></i>
                                        </Link>

                                        <div
                                            className="outer_menu__list"
                                            style={{
                                                display: activeIndex === 3 ? "block" : "none",
                                                padding: "0 1rem 0 2rem",
                                            }}
                                        >
                                            <ul>
                                                <li>
                                                    <Link className="main_menu" style={{ padding: "0 1rem 12px 0" }}>
                                                        Cake & Flower Combo <i className="fa-solid fa-chevron-down"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="main_menu" style={{ padding: "0 1rem 12px 0" }}>
                                                        Chocolate & Bouquet <i className="fa-solid fa-chevron-down"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="main_menu" style={{ padding: "0 1rem 12px 0" }}>
                                                        Anniversary Combo <i className="fa-solid fa-chevron-down"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className={`outer_menu ${activeIndex === 4 ? "active" : ""}`}
                                        onClick={() => handleToggle(4)}>
                                        <Link className="main_menu">
                                            Occassion <i className="fa-solid fa-chevron-down"></i>
                                        </Link>

                                        <div
                                            className="outer_menu__list"
                                            style={{
                                                display: activeIndex === 4 ? "block" : "none",
                                                padding: "0 1rem 0 2rem",
                                            }}
                                        >
                                            <ul>
                                                <li>
                                                    <Link className="main_menu" style={{ padding: "0 1rem 12px 0" }}>
                                                        Cake & Flower Combo <i className="fa-solid fa-chevron-down"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="main_menu" style={{ padding: "0 1rem 12px 0" }}>
                                                        Chocolate & Bouquet <i className="fa-solid fa-chevron-down"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="main_menu" style={{ padding: "0 1rem 12px 0" }}>
                                                        Anniversary Combo <i className="fa-solid fa-chevron-down"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className={`outer_menu ${activeIndex === 5 ? "active" : ""}`}
                                        onClick={() => handleToggle(5)}>
                                        <Link className="main_menu">
                                            birthday <i className="fa-solid fa-chevron-down"></i>
                                        </Link>

                                        <div
                                            className="outer_menu__list"
                                            style={{
                                                display: activeIndex === 5 ? "block" : "none",
                                                padding: "0 1rem 0 2rem",
                                            }}
                                        >
                                            <ul>
                                                <li>
                                                    <Link className="main_menu" style={{ padding: "0 1rem 12px 0" }}>
                                                        Cake & Flower Combo <i className="fa-solid fa-chevron-down"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="main_menu" style={{ padding: "0 1rem 12px 0" }}>
                                                        Chocolate & Bouquet <i className="fa-solid fa-chevron-down"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="main_menu" style={{ padding: "0 1rem 12px 0" }}>
                                                        Anniversary Combo <i className="fa-solid fa-chevron-down"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className={`outer_menu ${activeIndex === 6 ? "active" : ""}`}
                                        onClick={() => handleToggle(6)}>
                                        <Link className="main_menu">
                                            birthday <i className="fa-solid fa-chevron-down"></i>
                                        </Link>

                                        <div
                                            className="outer_menu__list"
                                            style={{
                                                display: activeIndex === 6 ? "block" : "none",
                                                padding: "0 1rem 0 2rem",
                                            }}
                                        >
                                            <ul>
                                                <li>
                                                    <Link className="main_menu" style={{ padding: "0 1rem 12px 0" }}>
                                                        Cake & Flower Combo <i className="fa-solid fa-chevron-down"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="main_menu" style={{ padding: "0 1rem 12px 0" }}>
                                                        Chocolate & Bouquet <i className="fa-solid fa-chevron-down"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="main_menu" style={{ padding: "0 1rem 12px 0" }}>
                                                        Anniversary Combo <i className="fa-solid fa-chevron-down"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><Link to="/" className='main_menu'>Contact us</Link></li>
                                </ul>
                                <div className="coompany-info">
                                    <Link to="tel:"><i class="fa-solid fa-phone"></i>+91 9874563210</Link>
                                    <Link to="mailto="><i class="fa-solid fa-envelope"></i>order@floralhut.in</Link>
                                    <h6>Show us your love & follow</h6>
                                    <Link to="/"><i class="fa-brands fa-facebook-f"></i>facebook</Link>
                                    <Link to="/"><i class="fa-brands fa-instagram"></i>Instagram</Link>
                                    <Link to="/"><i class="fa-brands fa-youtube"></i>Youtube</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header