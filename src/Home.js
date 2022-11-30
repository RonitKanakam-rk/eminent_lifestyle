import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://live.staticflickr.com/65535/49374353772_41fdcb7b8f_b.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Bricks"
            price={119.00}
            rating={3}
            image="https://5.imimg.com/data5/WF/PN/MY-6428258/cement-bricks-500x500.jpg"
          />
          <Product
            id="49538094"
            title="Ultra Tech Cement"
            price={239.00}
            rating={4}
            image="https://5.imimg.com/data5/SELLER/Default/2021/1/GD/QD/MG/122226138/ultra-tech-cement-500x500.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Iron pipes"
            price={199.00}
            rating={3}
            image="https://glimageurl.golocall.com/golocal-post/image/43739_fusionplus_1497500833.jpeg"
          />
          <Product
            id="23445930"
            title="PVC Pipes"
            price={989.00}
            rating={5}
            image="https://4.imimg.com/data4/OW/VY/MY-2174685/oswal-pvc-pipe-500x500.jpg"
          />
          <Product
            id="3254354345"
            title="PLYWOOD"
            price={598.00}
            rating={4}
            image="https://5.imimg.com/data5/QI/RQ/MY-62150349/laminated-plywood-500x500.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Asian Paint"
            price={1094.00}
            rating={4}
            image="https://5.imimg.com/data5/SELLER/Default/2020/9/BF/XO/BR/11524350/asian-paints-royal-luxury-emulsion-500x500-500x500.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
