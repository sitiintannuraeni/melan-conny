import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { openDialogLogin } from "../slice/menuSlice";

function ProtectedLayouts() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (!isLoggedIn) {
    dispatch(openDialogLogin());
    return <Navigate to={"/"} replace />;
  }
  return (
    <>
      <Outlet />
    </>
  );
}
export default ProtectedLayouts;
