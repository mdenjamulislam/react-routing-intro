import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div className="w-full h-screen relative pt-20" data-theme="dark">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;