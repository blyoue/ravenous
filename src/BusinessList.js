import React from 'react';
import Business from './Business';


function BusinessList() {
    const businesses = [
        {
            name: "a",
            address: "a",
            city: "a",
            state: "a",
            zipcode: "a",
            category: "a",
            rating: "a",
            review: "a", 
            count: "a"
        },
        {
            name: "b",
            address: "b",
            city: "b",
            state: "b",
            zipcode: "b",
            category: "b",
            rating: "b",
            review: "b", 
            count: "b"
        }
    ];
    return (
        <>
            <div>
                {businesses.map((business) => (
                        <Business 
                        name={business.name} 
                        address={business.address} 
                        city={business.city}
                        state={business.state}
                        zipcode={business.zipcode}
                        category={business.category}
                        rating={business.rating}
                        review={business.review} />
                ))}
            </div>
        </>
    )
}

export default BusinessList;