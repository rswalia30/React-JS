import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import Body from "./components/Body";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Body /> */}
      <Outlet />
      <Footer />
    </>
  )
}

export default App;