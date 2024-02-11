import DetailImages from "./Detailimg";
import DetailDesc from "./DetailDesc";
import DetailCard from "./DetailCard";
import DetailLink from "./DetailLink";
import { useGetProductByIdQuery } from "../../services/apiProduct";
import { useParams } from "react-router-dom";

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
    console.log("is Loading Product");
    return <></>;
  }

  if (isError) {
    console.log("is Loading Product");
    return <></>;
  }

  if (isSuccess) {
    return (
      <>
        <div className="grid lg:grid-cols-2 mt-16">
          <DetailImages images={product.images} />
          <DetailDesc
            product_name={product.product_name}
            price={product.price}
            total_sold={product.total_sold}
            size={product.size}
            material={product.material}
            features={product.features}
            overview={product.overview}
            desc={product.desc}
          />
          <DetailLink />
        </div>
        <div className="flex flex-col max-w-full h-[500px] mt-28">
          <DetailCard />
        </div>
      </>
    );
  }
}
export default DetailPage;
