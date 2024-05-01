import React from 'react';
import Business from './Business';


function BusinessList({ businesses }) {
    return (
        <>
            <div className='flex justify-center bg-stone-100'>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 w-full h-full max-w-screen-lg justify-center bg-stone-100 py-8 flex-wrap p-auto'>
                    {businesses.map((business) => (
                        <div key={business.id} className="flex justify-center">
                            <Business 
                                name={business.name} 
                                address={business.address} 
                                city={business.city}
                                state={business.state}
                                zipcode={business.zipcode}
                                category={business.category}
                                rating={business.rating}
                                review={business.review} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BusinessList;