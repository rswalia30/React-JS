// import Body from "./Components/Body";
import { useState } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

const App = () => {

  const [userInfo, setUserInfo] = useState({
    name: "Rohit Singh Walia",
    email: "waliarohit2001@gmail.com",
  });

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={
        {
          user: userInfo,
          setUser: setUserInfo
        }
      }>
        <Navbar />
        <button className="border border-red-500 p-3 m-3 bg-violet-700 text-white"
          onClick={() => setUserInfo({
            name: "Akshay Saini",
            email: "support@namastedev.com",
          })}>Change User Everywhere</button>
        <Outlet />
        <Footer />
      </UserContext.Provider >
    </Provider>
  )
}

export default App;