import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openDialogLogin } from "../slice/menuSlice";

function Layouts() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (!isLoggedIn) {
    dispatch(openDialogLogin());
    return <Navigate to={"/"} replace />;
  }

  return <Outlet />;
}

export default Layouts;
