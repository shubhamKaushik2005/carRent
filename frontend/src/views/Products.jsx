import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';
import './Products.css';

function Products() {
  const [data, setData] = useState([]);
  const [dd, setDd] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    axios.get('http://localhost:3000')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (data.length > 0 && id !== undefined) {
      const index = parseInt(id);
      const item = data.find((_, i) => i === index);
      setDd(item);
    }
  }, [data, id]);

  if (id !== undefined && !dd) return <div>Loading...</div>;

  if (id !== undefined && dd) {
    return (
      <div className="container">
        <div className="product-container">
          <div className="product-image" align="center">
            <img src={dd.src} alt={dd.name} />
          </div>
          <div className="product-content">
            <h1 align="center">{dd.heading}</h1>
            <h1 align="center">${dd.price}</h1>
            <h2>{dd.desc}</h2>
            <p>How two young dreamers built a crowd-favourite eatery in Ranchi</p>
            <p>
              Brothers Nishant and Vikash Ranjan had a dream—to create a space where
              people could come together over warm vibes while enjoying unforgettable meals.
              But bringing this idea to life was no easy feat!
            </p>
            <p>
              It required grit, resourcefulness and a whole lot of faith in their passion for food.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!data || data.length === 0) return <p>Loading...</p>;

  return (
    <div className="container">
      {data.map((item, index) => (
        <div className="product-container" key={index}>
          <div className="product-image" align="center">
            <img src={item.src} alt={item.name} />
          </div>
          <div className="product-content">
            <h1 align="center">{item.heading}</h1>
            <h1 align="center">${item.price}</h1>
            <h2>{item.desc}</h2>
            <p>How two young dreamers built a crowd-favourite eatery in Ranchi</p>
            <p>
              Brothers Nishant and Vikash Ranjan had a dream—to create a space where
              people could come together over warm vibes while enjoying unforgettable meals.
              But bringing this idea to life was no easy feat!
            </p>
            <p>
              It required grit, resourcefulness and a whole lot of faith in their passion for food.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
