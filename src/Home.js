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
            id = {1}
            title="Converse"
            price={29.99}
            image="https://plus.unsplash.com/premium_photo-1665664652418-91f260a84842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
            rating={5}
          />
          <Product
            id = {2}
            title="Converse"
            price={29.99}
            image="https://plus.unsplash.com/premium_photo-1665664652418-91f260a84842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id = {3}
            title="Converse"
            price={29.99}
            image="https://plus.unsplash.com/premium_photo-1665664652418-91f260a84842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
            rating={5}
          />

          <Product
            id = {4}
            title="Converse"
            price={29.99}
            image="https://plus.unsplash.com/premium_photo-1665664652418-91f260a84842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
            rating={5}
          />

          <Product
            id = {5}
            title="Converse"
            price={29.99}
            image="https://plus.unsplash.com/premium_photo-1665664652418-91f260a84842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id = {6}
            title="Converse"
            price={29.99}
            image="https://plus.unsplash.com/premium_photo-1665664652418-91f260a84842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
            rating={5}
          />
        </div>
        </div>


      </div>
    </div>
  );
}

export default Home;
