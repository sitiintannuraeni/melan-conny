import DetailImages from "./Detailimg";
import DetailDesc from "./DetailDesc";
import DetailCard from "./DetailCard";

function DetailPage() {
  return (
    <>
      <div className="grid lg:grid-cols-2">
        <DetailImages />
        <DetailDesc />
      </div>
      <div class="flex flex-col max-w-full h-[500px] mt-28">
        <DetailCard />
      </div>
    </>
  );
}
export default DetailPage;

{
  /* <div className="text-center mt-1">
  <Typography className="text-lg font-bold">
    Versa Tees Oversized Black
  </Typography>
  <Typography></Typography>
</div>; */
}
