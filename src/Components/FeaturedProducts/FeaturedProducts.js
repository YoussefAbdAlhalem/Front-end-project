import React, { useEffect, useState } from 'react'
import FeaturedProductsStyles from "../FeaturedProducts/FeaturedProducts.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from 'axios';

const FeaturedProducts = ({ key, element }) => {
    const [data, setData] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }, []);
    let cartItems = JSON.parse(window.sessionStorage.getItem('cart')) || []
    const handleAddToCart = (x) => {
        cartItems.push(x);
        window.sessionStorage.setItem('cart', JSON.stringify(cartItems));
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
        <section className={FeaturedProductsStyles["exclusive-products"]}>
            <div className={FeaturedProductsStyles["section-header"]}>
                <h2 className={FeaturedProductsStyles["section-title"]}>Exclusive Products</h2>
                <p className={FeaturedProductsStyles["section-subtitle"]}>Check out our special collection of premium products</p>
            </div>

            <div className={FeaturedProductsStyles["products-grid"]}>
                {data.slice(0, 4).map((product) => (
                    <div className={FeaturedProductsStyles["product-card"]} key={product.id}>
                        <div className={FeaturedProductsStyles["product-image-container"]}>
                            <img src={product.image} alt={product.title} className={FeaturedProductsStyles["product-image"]} />

                            {/* Product Actions */}
                            <div className={FeaturedProductsStyles["product-actions"]}>
                                <button
                                    className={FeaturedProductsStyles["action-btn"]}
                                    onClick={() => handleWishlist(product.id)}
                                    title={wishlist.includes(product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
                                >
                                    {wishlist.includes(product.id) ? '❤️' : '🤍'}
                                </button>
                                <button
                                    className={FeaturedProductsStyles["action-btn"]}
                                    title="View Product"
                                    onClick={() => window.location.href = `/products/${product.id}`}
                                >
                                    ➡️

                                </button>
                            </div>

                        </div>

                        <div className={FeaturedProductsStyles["product-info"]}>
                            <h3 className={FeaturedProductsStyles["product-name"]}>{product.title}</h3>

                            {/* Product Rating */}
                            <div className={FeaturedProductsStyles["product-rating"]}>
                                <span className={FeaturedProductsStyles.star}>★</span>
                                <span className={FeaturedProductsStyles.star}>★</span>
                                <span className={FeaturedProductsStyles.star}>★</span>
                                <span className={FeaturedProductsStyles.star}>★</span>
                                <span className={`${FeaturedProductsStyles.star} ${FeaturedProductsStyles.empty}`}>★</span>
                                <span className={FeaturedProductsStyles["rating-count"]}>({product.rating.rate})</span>
                            </div>

                            {/* Product Price */}
                            <div className={FeaturedProductsStyles["product-price"]}>
                                <span className={FeaturedProductsStyles["current-price"]}>${(product.price * 0.75).toFixed(2)}</span>
                                <span className={FeaturedProductsStyles["original-price"]}>${product.price}</span>
                            </div>

                            <button
                                className={FeaturedProductsStyles["add-to-cart-btn"]}
                                onClick={() => handleAddToCart(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeaturedProducts