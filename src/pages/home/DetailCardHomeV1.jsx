import { useSelector } from "react-redux";

function DetailCardHomeV1() {
  const dialogDetailCardHome = useSelector(
    (state) => state.menu.dialogDetailCardHome
  );
  return (
    <>
      <div
        className={`w-full h-[100hv] bg-black/50 z-[999] ${dialogDetailCardHome ? "fixed" : "hidden"} top-0 overflow-hidden`}
      >
        <div className="w-full max-w-2xl mx-auto top-16">
          <div className="w-full mx-auto bg-white top-16 shadow-xl rounded-lg relative z-[999]">
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailCardHomeV1;
