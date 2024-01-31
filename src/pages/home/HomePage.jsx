import { Alert, Button, Typography } from "@material-tailwind/react";
import product1 from "../../assets/product-1.png";
import product2 from "../../assets/product-2.png";
import product3 from "../../assets/product-3.png";
import product4 from "../../assets/product-4.png";
import product5 from "../../assets/product-5.png";
import product6 from "../../assets/product-6.png";
import product7 from "../../assets/product-7.png";
import product8 from "../../assets/product-8.png";
import CardProduct from "../../components/CardProduct";
import banner from "../../assets/banner.png";

function ListProducts() {
  return (
    <div className="p-4">
      <div className="grid justify-items-center items-center mb-12">
        <Typography variant="h4" className="font-['Helvetica']">
          TOP SELLING
        </Typography>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <CardProduct
          img={product1}
          name="Elgant Basic Shirt Clean Look Black"
          harga="Rp 185.000"
          items="9,763 items sold"
        />
        <CardProduct
          img={product2}
          name="Elgant Short Sleeve Shirt Black"
          harga="Rp 170.000"
          items="2,854 items sold"
        />
        <CardProduct
          img={product3}
          name="Elgant Basic Shirt Sky Blue"
          harga="Rp 185.000"
          items="1,297 items sold"
        />
        <CardProduct
          img={product4}
          name="Elgant Short Sleeve Shirt Sky Blue"
          harga="Rp 185.000"
          items="391 items sold"
        />
        <CardProduct
          img={product5}
          name="Versa Tees Oversized Black"
          harga="Rp 129.000"
          items="3,345 items sold"
        />
        <CardProduct
          img={product6}
          name="Versa Tees Oversized Black"
          harga="Rp 119.000"
          items="4,3949 items sold"
        />
        <CardProduct
          img={product7}
          name="Elgant Basic Shirt White"
          harga="Rp 185.000"
          items="5,502 items sold"
        />
        <CardProduct
          img={product8}
          name="Elgant Short Sleeve Shirt White"
          harga="Rp 170.000"
          items="1,849 items sold"
        />
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <img
        src={banner}
        alt="banner"
        className="h-full w-full"
        style={{ objectFit: "cover" }}
      />
      <div className="px-3 lg:px-40 py-10 flex items-center justify-center mb-8">
        <Alert
          variant="outlined"
          className="flex justify-start lg:justify-center items-center border-gray-500 font-light"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          doloremque voluptatibus unde eos cum facere.
        </Alert>
      </div>
      <ListProducts />
    </>
  );
}

export default HomePage;
