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

  console.log(product, "name");

  if (isLoading || isFetching) {
    console.log("is Loading Product");
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
          <div className="grid lg:grid-cols-2 py-12 ">
            <div className="w-full max-w-md mx-auto">
              <DetailImages images={product.images} />
            </div>
            <div>
              <DetailDesc
                id={product.id}
                product_name={product.product_name}
                price={product.price}
                total_sold={product.total_sold}
                size={product.size}
                material={product.material}
                features={product.features}
                overview={product.overview}
                desc={product.desc}
              />
            </div>
            <DetailLink />
          </div>
          <div className="flex flex-col max-w-full ">
            <DetailCard />
          </div>
        </div>
      </>
    );
  }
}
export default DetailPage;
