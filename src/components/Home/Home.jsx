import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div className="w-full lg:h-screen relative pt-20">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;