import React from 'react';

function Business(props) {
    return (
        <>
            <div className='my-5 mx-5 min-w-52 w-72 h-auto flex flex-col'>
                <div className='h-72 w-full overflow-hidden bg-black'>
                    <img src={props.image} alt={props.name} className='object-cover w-full h-full'/>
                </div>
                <div className='flex items-center h-16 w-full'>
                    <p className='text-left font-bold text-xl'>{props.name}</p>
                </div>
                <div className='flex flex-row justify-between'>
                    <div className='text-left justify-between flex flex-col'>
                        <p>{props.address}</p>
                        <p>{props.city}</p>
                        <p className='inline'>{props.state} {props.zipcode}</p>
                    </div>
                    <div className='text-right justify-between flex flex-col whitespace-nowrap'>
                        <p className='uppercase text-tan font-bold text-lg'>{props.category}</p>
                        <p className='uppercase text-tan font-bold'>{props.rating} stars</p>
                        <p className='whitespace-nowrap'>{props.review} reviews</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Business;
