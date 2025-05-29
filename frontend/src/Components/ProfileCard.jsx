import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProfileCard({ data, index }) {
    const { src, heading, desc } = data;
    const [showAlert, setShowAlert] = useState(false);


    const handleAddToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const newItem = { src, heading, desc };
        cartItems.push(newItem);
        localStorage.setItem('cart', JSON.stringify(cartItems));

        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 2000);
    };

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" style={{ position: 'relative' }}>
            {showAlert && (
                <div
                    style={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        backgroundColor: '#4caf50',
                        color: '#fff',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        zIndex: 999,
                    }}
                >
                    ✅ Item added to cart!
                </div>
            )}

            <div className="card h-100 shadow-sm">
                <Link to={`/products/${index}`}>
                    <img
                        src={src}
                        alt={heading}
                        className="card-img-top"
                        style={{ height: '250px', objectFit: 'cover' }}
                    />
                </Link>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-truncate">{heading || 'No Title'}</h5>
                    <p className="card-text">
                        {desc ? <i>{desc.substring(0, 50)}...</i> : <b>Description not found</b>}
                    </p>
                    <Link to={`/products/${index}`}>
                    <button className="btn btn-primary mt-auto" onClick={handleAddToCart}>
                        See Car Details
                    </button></Link>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;