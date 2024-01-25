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
      <div className="flex justify-between items-center mb-4">
        <Typography variant="h4" className="font-['Helvetica']">
          ELGANT SHIRT
        </Typography>
        <Button variant="outlined">View All</Button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <CardProduct img={product1} />
        <CardProduct img={product2} />
        <CardProduct img={product3} />
        <CardProduct img={product4} />
        <CardProduct img={product5} />
        <CardProduct img={product6} />
        <CardProduct img={product7} />
        <CardProduct img={product8} />
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
      <div className="px-3 lg:px-40 py-10 flex items-center justify-center">
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
