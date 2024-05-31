import CardProduct from "../../components/CardProduct";
import { useGetProductsByGroupCategoryQuery } from "../../services/apiProduct";
import Product1 from "../../assets/product-14.png";
import Product2 from "../../assets/product-12.png";
import Product3 from "../../assets/product-13.png";
import { Typography } from "@material-tailwind/react";
import { baseUrlApi } from "../../services/apiCore";
import SkeletonStore from "./SkeletonStore";

function AllProduct() {
  const {
    data: productByCategory,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetProductsByGroupCategoryQuery();

  if (isLoading || isFetching) {
    return (
      <>
        <SkeletonStore />
      </>
    );
  }

  if (isSuccess) {
    return (
      <>
        {productByCategory.map((category, categoryIndex) => (
          <div className="mt-9" key={categoryIndex}>
            <Typography className="text-white text-xl font-bold">
              {category.category_name}
            </Typography>
            <div className="pb-28 grid grid-cols-4 mt-8 gap-20">
              {category.products.map((product, index) => {
                return (
                  <div key={index}>
                    <CardProduct
                      id={product.id}
                      img={`${baseUrlApi}/${product.images[0].path}`}
                      name={product.product_name}
                      price={product.price}
                      items={`${product.total_sold} items sold`}
                      is_wishlist={product.is_wishlist}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </>
    );
  }
}
export default AllProduct;
