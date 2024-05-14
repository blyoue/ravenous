import React from 'react';
import Business from './Business';


function BusinessList({ businesses }) {
    return (
        <>
            <div className='flex justify-center bg-stone-100 w-full'>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 w-full h-full max-w-screen-lg justify-center bg-stone-100 my-8 flex-wrap gap-2'>
                    {businesses.map((business, index) => (
                        <div key={index} className="flex justify-center">
                            <Business 
                                name={business.name} 
                                address={business.location.address1} 
                                city={business.location.city}
                                state={business.location.state}
                                zipcode={business.location.zip_code}
                                category={business.categories[0].alias}
                                rating={business.rating}
                                review={business.review_count} 
                                image={business.image_url}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BusinessList;