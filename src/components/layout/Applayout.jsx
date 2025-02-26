import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";

const Applayout = () => {
    return (
        <>
            <Header />
            <ScrollToTop />
            
            <Outlet />
            <Footer />
        </>
    );
};

export default Applayout;