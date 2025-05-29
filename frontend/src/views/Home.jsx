import React, { useState } from 'react';
import './Home.css';
import ProfileCard from '../Components/ProfileCard';
import data from '../data.json';

function Home() {

  const cardsPerPage = 8;
  const [page, setPage] = useState(1);

  const displayedCards = data.slice(0, page * cardsPerPage);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <header className="hero" id="home">

        <div className="hero-content" id="booking">
          <h1>FIND YOUR CAR & LIMOUSINE</h1>
          <p>We have many best rental car collections.</p>
          <form className="search-form">
            <select name="vehicle-type">
              <option>Select Vehicle Type</option>
              <option>Sedan</option>
              <option>SUV</option>
              <option>Limousine</option>
            </select>
            <a href="#car">
              <button type="button">FIND YOUR CAR</button>
            </a>
          </form>
        </div>
      </header>

      <section className="steps">
        {["Choose a vehicle", "Pick location & date", "Book your car", "Finish process"].map((step, index) => (
          <div className="step" key={index}>
            <h3>{`0${index + 1}`}</h3>
            <h4>{step}</h4>
            <p>Sed euismod mauris corper libero.</p>
          </div>
        ))}
      </section>

      <section className="cars" id="services">
        <h2>GREAT CARS RENTAL & LIMOUSINE SERVICES</h2>
        <div className="car-gallery">
          {["e1.jpg", "e2.jpg", "e3.jpg"].map((img, idx) => (
            <div className="car" key={idx}>
              <img src={`images/${img}`} alt={`Car ${idx + 1}`} />
              <h3>{["Hyundai", "Jeep", "BMW"][idx]}</h3>
            </div>
          ))}
        </div>
        <div className="car-gallery">
          {["e4.jpg", "e6.jpg", "e5.jpg"].map((img, idx) => (
            <div className="car" key={idx + 3}>
              <img src={`images/${img}`} alt={`Car ${idx + 4}`} />
              <h3>{["Benz", "Ford", "Range Rover"][idx]}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="filter">
        <h2>FIND BY TYPE</h2>
        <div className="buttons">
          {['All', 'Coupe', 'Sedan', 'SUV'].map((type, index) => (
            <button key={index}>{type}</button>
          ))}
        </div>
      </section>

      <section className="car-grid" id="car">
        <div className="container">
          <div className="row my-4">
            {displayedCards.map((item, index) => (
              <ProfileCard key={index} data={item} index={index} />
            ))}
          </div>

          {displayedCards.length < data.length && (
            <div className="qwer">
              <button className="qwe" onClick={loadMore}>Load More</button>
            </div>
          )}
        </div>
      </section>

      <section className="contact-info" id="contact">
        <div className="overlay">
          <h2>CONTACT INFO</h2>
          <h3>Call Us 666 333 9999</h3>
          <a href="#" className="btn">CONTACT US</a>
        </div>
      </section>

      <section className="pricing" id="get">
        <h1>SAVE BY CHOOSING THE BEST PLAN</h1>
        <div className="toggle">
          <span>Monthly</span>
          <input type="checkbox" id="billing-toggle" />
          <span>Yearly</span>
        </div>
        <div className="plans">
          {[
            { title: "ESSENTIAL", price: "$350.70", features: ["Quisque rhoncus", "Lorem ipsum dolor", "Vivamus velit mir", "Velit mir", "Elit mir ivamus"] },
            { title: "RECOMMENDED", price: "$530.60", recommended: true, features: ["Quisque rhoncus", "Lorem ipsum dolor", "Vivamus velit mir", "Elit mir ivamus", "Lorem ipsum dolor", "Ipsum dolor"] },
            { title: "PRO", price: "$840.30", features: ["Quisque rhoncus", "Lorem ipsum dolor", "Vivamus velit mir", "Elit mir ivamus", "Ivamus mir vamus", "Quisque rhoncusr", "lit mir iamus"] }
          ].map((plan, index) => (
            <div className={`plan${plan.recommended ? ' recommended' : ''}`} key={index}>
              <h3>{plan.title}</h3>
              <p className="price">{plan.price}</p>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              <button className={plan.recommended ? 'highlight' : ''}>CHOOSE PLAN</button>
            </div>
          ))}
        </div>
      </section>

      <section className="steps">
        {[
          { icon: "🚗", title: "Choose a vehicle" },
          { icon: "📍", title: "Pick location & date" },
          { icon: "💳", title: "Book your car" },
          { icon: "💬", title: "Confirm and enjoy" }
        ].map((item, index) => (
          <div className="step" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
          </div>
        ))}
      </section>

      <footer id="about">
        <div className="footer-content">
          <div className="footer-section">
            <h2>🚗 Car Rent</h2>
            <div className="social-icons">
              {['🌐', '📸', '🐦', '💼', '📺'].map((icon, index) => (
                <span key={index}>{icon}</span>
              ))}
            </div>
          </div>
          <div className="footer-section">
            <h3>CONTACT INFO</h3>
            <p>📞 Call: 666 333 9999</p>
            <p>🕗 8:00–18:00, Sat: Closed</p>
          </div>
          <div className="footer-section">
            <h3>SUBSCRIBE OUR 🚗 Car Rent</h3>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;