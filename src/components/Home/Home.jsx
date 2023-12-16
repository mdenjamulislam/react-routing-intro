import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation(); // useLocation provide path location 
    console.log(location);
    return (
        <div className="w-full lg:h-screen relative pt-20">
            <Header></Header>
            {
                navigation.state === "loading" ? <p>Loading...</p> :
                <Outlet></Outlet>
            }
        </div>
    );
};

export default Home;