import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import bannerStyles from './banner.module.css'

const banner = () => {
    return (
        <div className={`${bannerStyles.section} ${bannerStyles.pb_20}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className={`${bannerStyles.single_banner}`}>
                            <img src='./photos/banner.jpg' alt="shop_banner_img1" />
                            <div className={`${bannerStyles.single_banner_info}`}>
                                <h5 className={`${bannerStyles.single_bn_title1}`}>Super Sale</h5>
                                <h3 className={`${bannerStyles.single_bn_title}`}>New Collection</h3>
                                <a href="shop-left-sidebar.html" className={`${bannerStyles.single_bn_link}`}>Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className={`${bannerStyles.single_banner}`}>
                            <img src='./photos/banner.jpg' alt="shop_banner_img2" />
                            <div className={`${bannerStyles.single_banner_info}`}>
                                <h3 className={`${bannerStyles.single_bn_title}`}>New Season</h3>
                                <h4 className={`${bannerStyles.single_bn_title1}`}>Sale 40% Off</h4>
                                <a href="shop-left-sidebar.html" className={`${bannerStyles.single_bn_link}`}>Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default banner