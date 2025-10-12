import React, { useState, useEffect } from 'react'
import styles from './cart.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from '../Components/Navbar/Navbar';
// Helper function to get cart items from session storage
const Cart = ({ item }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(JSON.parse(sessionStorage.getItem('cart')) || []);
  }, []);

  return (
    <>
      <Navbar />
      {
        cartItems && cartItems.length > 0 ? (
          <>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Object.values(cartItems.reduce((acc, item) => {
                  if (acc[item.id]) {
                    acc[item.id].quantity++;
                  } else {
                    acc[item.id] = { ...item, quantity: 1 };
                  }
                  return acc;
                }, {})).map((item) => (
                  <tr key={item.id}>
                    <td><img src={item.image} alt={item.title} className={styles.productImage} /></td>
                    <td>{width > 800 ? item.title : item.title.slice(0, 10)}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>{item.quantity}</td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="d-flex flex-column">
                      <button className="btn btn-danger btn-sm mb-2" onClick={() => { // Changed from "Remove All" to "Remove"
                        // Retrieve the current cart from state
                        let currentCart = [...cartItems];
                        // Determine how to update the cart based on the item's quantity
                        const updatedCart = item.quantity === 1
                          // If the item's quantity is 1, filter out all instances of this item
                          // (effectively removing it completely from the cart)
                          ? currentCart.filter(cartItem => cartItem.id !== item.id)
                          : (() => {
                            const indexToRemove = currentCart.findIndex(cartItem => cartItem.id === item.id);
                            if (indexToRemove !== -1) {
                              currentCart.splice(indexToRemove, 1);
                            }
                            return currentCart;
                          })();
                        sessionStorage.setItem('cart', JSON.stringify(updatedCart));
                        setCartItems(updatedCart); // Update state to reflect changes
                      }}>{item.quantity > 1 ? '-1' : 'Remove'}</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="d-flex justify-content-start">
              <h4>Total: ${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</h4>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <button className="btn btn-primary">Proceed to Checkout</button>
            </div>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )
      }
      <div className="container my-5">
      </div >
    </>
  )
}

export default Cart