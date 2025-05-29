import React from 'react'

function Services() {
    return (
        <>
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
        </>
    )
}

export default Services
