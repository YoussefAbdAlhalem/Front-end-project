import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import sliderStyles from './slider.module.css'

const Slider = () => {

    return (
        <div className={sliderStyles.slider}>
            <div className={`carousel slide ${sliderStyles.carousel}`}
                id="carouselDemo"
                data-bs-wrap="true"
                data-bs-ride="carousel">

                <div className={`carousel-inner ${sliderStyles.inner}`}>
                    <div className={`carousel-item active ${sliderStyles.item}  background_bg active`}>
                        <img src="/photos/banner1.jpg" className={`w-100 ${sliderStyles.image}`} alt="Slide 1" />
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className={`	banner_content overflow-hidden ${sliderStyles.slide}`}>
                                        <h5 className="mb-3 staggered-animation font-weight-light" data-animation="slideInLeft" data-animation-delay="0.5s">50% off in all products</h5>
                                        <h2 className={`"staggered-animation" data-animation="slideInLeft" data-animation-delay="1s" ${sliderStyles.middle}`}>Man Fashion</h2>
                                        {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a className={`${sliderStyles.btn} ${sliderStyles.btnFillOut} rounded-0 staggered-animation text-uppercase`} href="shop-left-sidebar.html" data-animation="slideInLeft" data-animation-delay="1.5s">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`carousel-caption ${sliderStyles.caption}`}>
                        </div>

                    </div>

                    <div className={`carousel-item ${sliderStyles.item} active`}
                        data-bs-interval="2000">
                        <img src="/photos/banner2.jpg" className={`w-100 ${sliderStyles.image}`} alt="Slide 2" />
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className={`banner_content  overflow-hidden ${sliderStyles.slide}`}>
                                        <h5 className="mb-3 staggered-animation font-weight-light" data-animation="slideInLeft" data-animation-delay="0.5s">Taking your Viewing Experience to Next Level</h5>
                                        <h2 className={`"staggered-animation" data-animation="slideInLeft" data-animation-delay="1s" ${sliderStyles.middle}`}>Summer Sale</h2>
                                        
                                            <a className={`${sliderStyles.btn} ${sliderStyles.btnFillOut} rounded-0 staggered-animation text-uppercase`} href="shop-left-sidebar.html" data-animation="slideInLeft" data-animation-delay="1.5s">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`carousel-caption ${sliderStyles.caption}`}>
                        </div>
                    </div>

                </div>

                <button className={`carousel-control-prev ${sliderStyles.controlPrev} `}
                    type="button"
                    data-bs-target="#carouselDemo"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>

                <button className={`carousel-control-next ${sliderStyles.controlNext}`}
                    type="button"
                    data-bs-target="#carouselDemo"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
    )
}

export default Slider
