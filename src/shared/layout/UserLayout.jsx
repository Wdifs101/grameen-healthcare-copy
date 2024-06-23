
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import NewHeader from "../components/NewHeader/NewHeader";

const UserLayout = () => {
  return (
    <>

    <NewHeader></NewHeader>
  
      {/* <Header></Header> */}
      
     <div className="mt-[95px]">
     <Outlet></Outlet>
     <Footer></Footer>
     </div>
     {/* <Outlet></Outlet>
     <Footer></Footer> */}
    </>
  );
};

export default UserLayout;
