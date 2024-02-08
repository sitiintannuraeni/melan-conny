import { useDispatch, useSelector } from "react-redux";

function DetailCardHome() {
  const dialogDetailCardHome = useSelector((state) =>
    state.menu.dialogDetailCardHome()
  );
  const dispatch = useDispatch();
  return <></>;
}
export default DetailCardHome;
