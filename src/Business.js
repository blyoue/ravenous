import React from 'react';

function Business(props) {
    return (
        <>
            <div className='my-5 mx-5 min-w-52 w-64 h-auto p-2 flex flex-col'>
                <div className='max-h-full max-w-full'>
                    <img src="/pizza.jpg" alt={props.name}/>
                </div>
                <div className='text-left pt-3 pb-1'>
                    <p className='font-bold'>{props.name}</p>
                </div>
                <div className='flex flex-row '>
                    <div className='text-sm w-4/6 text-left  justify-between flex flex-col'>
                        <p>{props.address}</p>
                        <p>{props.city}</p>
                        <p className='inline'>{props.state}</p> <p className='inline'>{props.zipcode}</p>
                    </div>
                    <div className='text-sm text-right w-2/6  justify-between flex flex-col'>
                        <p className='uppercase text-tan font-bold text-base'>{props.category}</p>
                        <p className='uppercase text-tan'>{props.rating} stars</p>
                        <p>{props.review} reviews</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Business;
