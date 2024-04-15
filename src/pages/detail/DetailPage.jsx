import DetailImages from "./Detailimg";
import DetailDesc from "./DetailDesc";
import DetailCard from "./DetailCard";
import DetailLink from "./DetailLink";
import { useGetProductByIdQuery } from "../../services/apiProduct";
import { useParams } from "react-router-dom";
import SkeletonDetailPage from "./SkeletonDetailPage";

function DetailPage() {
  const { id: productId } = useParams();
  const {
    data: product,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetProductByIdQuery(productId);

  if (isLoading || isFetching) {
    return (
      <>
        <SkeletonDetailPage />
      </>
    );
  }

  if (isError) {
    console.log("is Error Product");
    return <></>;
  }

  if (isSuccess) {
    return (
      <>
        <div className="lg:px-10 px-2">
          <div className="lg:grid lg:grid-cols-2 flex flex-col lg:py-12 md:py-14 py-9 ">
            <div className="w-full lg:max-w-md md:max-w-2xl mx-auto">
              <DetailImages images={product.images} />
            </div>
            <div className=" ">
              <DetailDesc
                id={product.id}
                product_name={product.product_name}
                image={product.images[0].url}
                price={product.price}
                total_sold={product.total_sold}
                size={product.size}
                material={product.material}
                features={product.features}
                overview={product.overview}
                desc={product.desc}
              />
            </div>
          </div>
          <DetailLink />
          <div className="flex flex-col max-w-full ">
            <DetailCard />
          </div>
        </div>
      </>
    );
  }
}
export default DetailPage;
