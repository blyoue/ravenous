# Ravenous

Ravenous is a React-based web application that allows users to search for businesses based on their preferences. This project is part of the Codecademy "Build Front-End Web Applications from Scratch" course.

## Features

- Search for businesses based on term, location, and sorting options.
- Display a list of businesses with details including name, address, category, rating, and review count.    
- Handle errors gracefully and inform users when no businesses are found.

## Tools and Libraries Used

- React
- Tailwind CSS
- Yelp API

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js and npm should be installed on your machine.
- You need a Yelp API key to fetch business data.

### Installation

1. Clone the repository

    ```bash
    git clone https://github.com/blyoue/ravenous.git
    cd ravenous
    ```

2. Install NPM packages

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your Yelp API key

    ```env
    REACT_APP_YELP_API_KEY=your_yelp_api_key_here
    ```

4. Start the development server

    ```bash
    npm start
    ```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

1. Enter a search term (e.g., "Pizza") in the search bar.
2. Enter a location (e.g., "New York").
3. Choose a sorting option (Best Match, Highest Rated, Most Reviewed).
4. Click "Let's Go" to search for businesses.

## Project Structure

- `src/`
  - `components/`
    - `App.js`: Main component that holds the state and handles the search functionality.
    - `SearchBar.js`: Component for the search bar.
    - `BusinessList.js`: Component to display a list of businesses.
    - `Business.js`: Component to display individual business details.
  - `utils/`
    - `Busfetch.js`: Utility module to fetch data from the Yelp API.
  - `index.js`: Entry point of the application.

## Error Handling

- If the API call fails or returns no results, the app will display a message indicating that no businesses were found.

## Acknowledgements

- This project is a part of the Codecademy course.
- Thanks to the Yelp API for providing business data.
- This application needs to be running with a CORS proxy activated. The current implementation uses the CORS Anywhere proxy. You can set up your own CORS proxy or use an existing one.