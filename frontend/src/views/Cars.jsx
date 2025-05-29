import React, { useState } from 'react'
import ProfileCard from '../Components/ProfileCard';
import data from '../data.json';

function Cars() {
    const cardsPerPage = 8;
    const [page, setPage] = useState(1);

    const displayedCards = data.slice(0, page * cardsPerPage);

    const loadMore = () => {
        setPage(prevPage => prevPage + 1);
    };
    return (
        <>
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
        </>
    )
}

export default Cars
