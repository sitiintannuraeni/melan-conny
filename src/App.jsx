import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container max-w-full">
        <Header />
        <main className="pt-[62px]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
export default App;
