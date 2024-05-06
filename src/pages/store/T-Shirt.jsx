import { Typography } from "@material-tailwind/react";
import Banner from "../../assets/banner-utama.png";
import Logo from "../../assets/logo-auth.png";
import { useGetProductsByGroupCategoryQuery } from "../../services/apiProduct";
import { CardProduct1 } from "../../components/CardProduct1";
import { baseUrlApi } from "../../services/apiCore";

function T_Shirt() {
  const {
    data: productByCategory,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetProductsByGroupCategoryQuery();

  if (isSuccess) {
    return (
      <>
        <img
          src={Banner}
          alt="banner"
          className="w-full h-[570px] object-cover"
        />
        <div className="flex items-center justify-center">
          <div className="bg-[#EA017E] h-[16px] w-[80px] lg:mt-6 mt-[-265px] rounded-full" />
        </div>
        {productByCategory.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <div className="w-full mt-10 px-32 ">
              <Typography className="text-white text-2xl font-bold">
                {category.category_name}
              </Typography>
              <div className="grid grid-cols-4 pb-20 gap-8 mt-5">
                {category.products.map((product, index) => {
                  return (
                    <>
                      <CardProduct1
                        key={index}
                        id={product.id}
                        img={`${baseUrlApi}/${product.images[0].path}`}
                        name={product.product_name}
                        price={product.price}
                        items={`${product.total_sold} items sold`}
                        is_wishlist={product.is_wishlist}
                      />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}
export default T_Shirt;
