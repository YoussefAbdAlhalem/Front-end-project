import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './singleProduct.module.css'

const SingleProduct = () => {
    const { id } = useParams(); // Destructure directly
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct(response.data);
                setError(null);
            } catch (err) {
                setError('Failed to fetch product. Please try again later.');
                console.error('Error fetching product:', err);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchProduct();
        }
    }, [id]);

    const handleQuantityChange = (e) => {
        const value = Math.max(1, Math.min(10, parseInt(e.target.value) || 1));
        setQuantity(value);
    };

    const handleAddToCart = () => {
        const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
        for (let i = 0; i < quantity; i++) {
            cart.push(product);
        }
        sessionStorage.setItem('cart', JSON.stringify(cart));
        alert(`${quantity} of ${product.title} added to cart!`);
    };

    if (loading) return <div className={styles.loading}>Loading product details...</div>;
    if (error) return <div className={styles.error}>{error}</div>;
    if (!product) return <div className={styles.error}>Product not found</div>;

    return (
        <div className={styles.singleProduct}>
            <div className={styles.productWrapper}>
                <div className={styles.productImageWrapper}>
                    <img src={product.image} alt={product.title} />
                </div>
                <div className={styles.productInfo}>
                    <h1 className={styles.productTitle}>{product.title}</h1>
                    <div className={styles.productPrice}>${product.price}</div>
                    <div className={styles.quantitySection}>
                        <div>Quantity</div>
                        <input
                            type="number"
                            min={1}
                            max={10}
                            value={quantity}
                            onChange={handleQuantityChange}
                        />
                        <button
                            className={styles.addToCartButton}
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>
                    </div>
                    <div className={styles.productDescription}>{product.description}</div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct