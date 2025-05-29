import React from 'react'

function GetPro() {
    return (
        <>
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
        </>
    )
}

export default GetPro
