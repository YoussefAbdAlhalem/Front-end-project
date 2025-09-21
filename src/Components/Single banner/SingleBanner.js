import React from 'react'
import SingleBannerStyles from "./singleBanner.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; 
const SingleBanner = () => {
    return (

        <div className={`${SingleBannerStyles.section} ${SingleBannerStyles.bg_light_blue2} pb-0 pt-md-0`}>
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-md-6 offset-md-1">
                        <div className={`${SingleBannerStyles.medium_divider} d-none d-md-block clearfix`}></div>
                        <div className="trand_banner_text text-center text-md-start">
                            <div className="heading_s1 mb-3">
                                <span className="sub_heading">New season trends!</span>
                                <h2>Best Summer Collection</h2>
                            </div>
                            <h5 className="mb-4">Sale Get up to 50% Off</h5>
                            <a href="shop-left-sidebar.html" className={`${SingleBannerStyles.btn} ${SingleBannerStyles.btnFillOut} rounded-0`}>Shop Now</a>
                        </div>
                        <div className={`${SingleBannerStyles.medium_divider} clearfix`}></div>
                    </div>
                    <div className="col-md-5">
                        <div className={`text-center ${SingleBannerStyles.trading_img}`}>
                            <img src="/photos/Man.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default SingleBanner