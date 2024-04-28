import React from 'react';

function Business(props) {
    const myStyle = {
        width: "300px",
        height: "500px",
        backgroundColor: "red",
        border: "5px solid blue",
        display: "inline-block",
        margin: "0 10px"
    };
    const myImg = {
        width: 200,
        height: 200
    };
    const myText = {
        color: "red"
    }
    return (
        <>
            <div style={myStyle}>
                <img src="/product-home.png" style={myImg}/>
                <p>{props.name}</p>
                <p>{props.address}</p>
                <p>{props.city}</p>
                <p>{props.state}</p>
                <p>{props.zipcode}</p>
                <p>{props.category}</p>
                <p>{props.rating}</p>
                <p>{props.review}</p>
            </div>
        </>
    )
}

export default Business;
