import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* <img className="home__image" src="./images/background.jpg" alt="" /> */}
        <div className="product__container">
          <div className="home__row">
            <Product
              id={1}
              title="Converse"
              Description="Converse Unisex-Adult M7652c All Star Ox Optical White Sneaker"
              price={29.99}
              image="https://plus.unsplash.com/premium_photo-1665664652418-91f260a84842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
              rating={5}
            />
            <Product
              id={2}
              title="Iphone 15 Pro"
              price={ 999 }
              Description="Apple iPhone 15 Pro (128 GB) - Blue TitaniumiPhone 15 Pro: 6.7 inch Super Retina XDR display, A16 Bionic chip, advanced triple-lens camera with 8K video, 5G connectivity, all-day battery life"
              image="../images/download.jpg"
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product
              id={3}
              title="H&M"
              Description="H&M Poweder Brown oversized Sweatshirt"
              price={40}
              image="../images/images.jpg"
              rating={5}
            />

            <Product
              id={4}
              title="Casio Vintage Edition"
              price={94.95}
              Description="Casio Vintage Digital Grey Dial Unisex A-158WA-1Q ( D011 )"
              image="../images/casio.jpg"
              rating={5}
            />

            <Product
              id={5}
              title="Sugar Makeup Kit"
              price={30}
              Description="SUGAR Makeup Kit for Women | Kajal, Lipstick, Lipblam & Blush | Amazon Exclusive Hamper | Combo of 4"
              image="../images/cosmetics.jpg"
              rating={5}
            />
          </div>
          <div className="home__row">
            <Product
              id={6}
              title="Samsung TV"
              Description="Samsung 138 cm (55 inches) 4K Ultra HD Smart QLED TV QA55QE1CAKLXL (Titan Gray)"
              price={130}
              image="../images/tv.jpg"
              rating={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
