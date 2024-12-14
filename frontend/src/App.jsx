import { Outlet } from "react-router-dom";
import Navigation from "./pages/Auth/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

const App = () => {
  // const [theme, setTheme] = useState('night');
  return (
    <>
      {/* <div className={`${theme}`}> */}
      <ToastContainer />
      <Navigation />
      {/* theme={theme} setTheme={setTheme} */}
      <MainHeader />
      <main className='py-3 main'>
        <Outlet />
      </main>
      <Footer />
      {/* </div> */}
    </>
  );
};

export default App;
