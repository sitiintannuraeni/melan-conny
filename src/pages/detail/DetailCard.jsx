import ProductA from "../../assets/product-4.png";
import ProductB from "../../assets/product-7.png";
import ProductC from "../../assets/product-8.png";
import ProductD from "../../assets/product-5.png";
import { useState } from "react";
import CardProduct from "../../components/CardProduct";

function DetailCard() {
  const [products, setProducts] = useState([]);

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-4 lg:px-10 pb-10">
        <CardProduct
          img={ProductA}
          name="Versa Tees Oversized Black"
          price="Rp 129.000"
          items="9,763 items sold"
        />
        <CardProduct
          img={ProductB}
          name=" Versa Tees Oversized White"
          price="Rp 119.000"
          items="2,854 items sold"
        />
        <CardProduct
          img={ProductC}
          name="Elgant Basic Shirt White"
          price="Rp 185.000"
          items="1,297 items sold"
        />
        <CardProduct
          img={ProductD}
          name="Elgant Short Sleeve Shirt White"
          price="Rp 170.000"
          items="391 items sold"
        />
      </div>
    </>
  );
}

export default DetailCard;
