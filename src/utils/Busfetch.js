async function Busfetch(term, location, sort) {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const yelpBaseUrl = 'https://api.yelp.com/v3';
    const businessEndpoint = '/businesses/search';
    const query = `?location=${location}&term=${term}&sort_by=${sort}&limit=20`;
    const urlToFetch = cors + yelpBaseUrl + businessEndpoint + query;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer DHH4I4aXZoUIC0hVQ8j13e-wm7EnX642-Rjf2EE0ep9iJA7YA9bVNUQV-p3CEiRawpZWzQ4911v73iznh8du3Vs_lByx1FBLurPO11y5rrFUj6PAEMrVUHUb_HlAZnYx'
        }
    };
    console.log(urlToFetch);
    try {
        const response = await fetch(urlToFetch, options);
        if(response.ok){
            const jsonResponse = await response.json();
            console.log(jsonResponse.businesses);
            return jsonResponse.businesses || [];
        } else {
            throw new Error('Network response was not ok.');
        }
    }
    catch (error) {
        console.log(error);
        return [];
    };
}


export default Busfetch;