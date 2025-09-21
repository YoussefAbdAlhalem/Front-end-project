import React, { useEffect, useState } from 'react'
import HomeProductsStyles from "./homeProducts.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from 'axios';

const HomeProducts = () => {
    const [data, setData] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }, []);

    const handleAddToCart = (product) => {
        console.log('Added to cart:', product.title);
        // Add your cart logic here
    };

    const handleWishlist = (productId) => {
        if (wishlist.includes(productId)) {
            setWishlist(wishlist.filter(id => id !== productId));
            console.log('Removed from wishlist');
        } else {
            setWishlist([...wishlist, productId]);
            console.log('Added to wishlist');
        }
    };

    return (
        <section className={HomeProductsStyles["exclusive-products"]}>
            <div className={HomeProductsStyles["section-header"]}>
                <h2 className={HomeProductsStyles["section-title"]}>Exclusive Products</h2>
                <p className={HomeProductsStyles["section-subtitle"]}>Check out our special collection of premium products</p>
            </div>

            <div className={HomeProductsStyles["products-grid"]}>
                {data.slice(0, 8).map((product) => (
                    <div className={HomeProductsStyles["product-card"]} key={product.id}>
                        <div className={HomeProductsStyles["product-image-container"]}>
                            {/* Product Badges */}
                            <div className={`${HomeProductsStyles["product-badge"]} ${HomeProductsStyles["badge-new"]}`}>New</div>
                            <div className={`${HomeProductsStyles["product-badge"]} ${HomeProductsStyles["badge-sale"]}`}>-25%</div>

                            <img src={product.image} alt={product.title} className={HomeProductsStyles["product-image"]} />

                            {/* Product Actions */}
                            <div className={HomeProductsStyles["product-actions"]}>
                                <button
                                    className={HomeProductsStyles["action-btn"]}
                                    onClick={() => handleWishlist(product.id)}
                                    title={wishlist.includes(product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
                                >
                                    {wishlist.includes(product.id) ? '❤️' : '🤍'}
                                </button>
                                <button
                                    className={HomeProductsStyles["action-btn"]}
                                    title="Quick View"
                                >
                                    👁️
                                </button>
                            </div>

                        </div>

                        <div className={HomeProductsStyles["product-info"]}>
                            <h3 className={HomeProductsStyles["product-name"]}>{product.title}</h3>

                            {/* Product Rating */}
                            <div className={HomeProductsStyles["product-rating"]}>
                                <span className={HomeProductsStyles.star}>★</span>
                                <span className={HomeProductsStyles.star}>★</span>
                                <span className={HomeProductsStyles.star}>★</span>
                                <span className={HomeProductsStyles.star}>★</span>
                                <span className={`${HomeProductsStyles.star} ${HomeProductsStyles.empty}`}>★</span>
                                <span className={HomeProductsStyles["rating-count"]}>({product.rating.rate})</span>
                            </div>

                            {/* Product Price */}
                            <div className={HomeProductsStyles["product-price"]}>
                                <span className={HomeProductsStyles["current-price"]}>${(product.price * 0.75).toFixed(2)}</span>
                                <span className={HomeProductsStyles["original-price"]}>${product.price}</span>
                            </div>

                            <button
                                className={HomeProductsStyles["add-to-cart-btn"]}
                                onClick={() => handleAddToCart(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className={HomeProductsStyles["view-more-container"]}>
                <button className={HomeProductsStyles["view-more-btn"]}>
                    View All Products
                </button>
            </div>
        </section>
    )
}

export default HomeProducts