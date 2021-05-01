import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className = "home">
            <img className = "home__image"
            src= "https://cdn.cultofmac.com/wp-content/uploads/2016/07/Prime-Day-Banner.jpg"
            alt = ""/>
            <div className="home__row">
            <Product
            id="12321341"
            title= "Dirt 3 Complete Edition (PC)"
            price= {18950.00}
            rating={5}
            image= "https://images-eu.ssl-images-amazon.com/images/I/91sPs0ELPnL._AC_UL160_SR160,160_.jpg"
            />
            <Product
            id="12321341"
            title= "Dettol Liquid Disinfectant Cleaner for Home, Lime Fresh, 500ml"
            price= {950.00}
            rating={5}
            image= "https://images-eu.ssl-images-amazon.com/images/I/71Wqw15jSiL._AC_UL160_SR160,160_.jpg"
            />
        </div>
        <div className="home__row">
        
        <Product
            id="12321341"
            title= "Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)"
            price= {18950.00}
            rating={3}
            image= "https://m.media-amazon.com/images/I/419Sb0zGlnL.jpg"
            />
            <Product
            id="12321341"
            title= "Fire TV Stick (3rd Gen, 2021) with all-new Alexa Voice Remote..."
            price= {1850.00}
            rating={4}
            image= "https://m.media-amazon.com/images/I/41GtvKKiqTS.jpg"
            />
             <Product
            id="12321341"
            title= "Ariel Matic Top Load Detergent Washing Powder - 4 kg with Free Detergent Powder - 2 kg"
            price= {809.00}
            rating={5}
            image= "https://images-eu.ssl-images-amazon.com/images/I/51hOejUOGTL._AC_SX184_.jpg"
            />
             <Product
            id="12321341"
            title= "Iris Reed Diffuser Fragrance Gift Set -French Lavender..."
            price= {562.00}
            rating={4}
            image= "https://images-eu.ssl-images-amazon.com/images/I/71n37608wwL._AC_UL115_.jpg"
            />
        </div>
        <div className="home__row">
        <Product
            id="12321341"
            title= "Samsung 24 inch (60.4 cm) IPS, Bezel Less,75 Hz Flat, Flicker Free LED Monitor-LF24T350FHWXXL (Dark Blue Gray)"
            price= {9399.00}
            rating={5}
            image= "https://m.media-amazon.com/images/I/61pI7loWpZS._AC_UY218_.jpg"
            />
         </div>

        </div>
    )
};

export default Home;