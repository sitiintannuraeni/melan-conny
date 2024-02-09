import DetailImages from "./Detailimg";
import DetailDesc from "./DetailDesc";
import DetailCard from "./DetailCard";
import DetailLink from "./DetailLink";

function DetailPage() {
  return (
    <>
      <div className="grid lg:grid-cols-2">
        <DetailImages />
        <DetailDesc />
        <DetailLink />
      </div>
      <div className="flex flex-col max-w-full h-[500px] mt-28">
        <DetailCard />
      </div>
    </>
  );
}
export default DetailPage;
