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
      <div className="">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 pl-[41px]">
          <CardProduct
            img={ProductA}
            name="Versa Tees Oversized Black"
            harga="Rp 129.000"
            items="9,763 items sold"
          />
          <CardProduct
            img={ProductB}
            name=" Versa Tees Oversized White"
            harga="Rp 119.000"
            items="2,854 items sold"
          />
          <CardProduct
            img={ProductC}
            name="Elgant Basic Shirt White"
            harga="Rp 185.000"
            items="1,297 items sold"
          />
          <CardProduct
            img={ProductD}
            name="Elgant Short Sleeve Shirt White"
            harga="Rp 170.000"
            items="391 items sold"
          />
        </div>
      </div>
    </>
  );
}

export default DetailCard;
