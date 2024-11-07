import Navbar from "./Navbar/Navbar";
import Header from "./Shared/Header/Header";
import LeftSideBar from "./Shared/LeftSideBar/LeftSideBar";
import RightSideBar from "./Shared/RightSideBar/RightSideBar";
import SliderShow from "./SliderShow/SliderShow";

const Home = () => {
    return (
        <div>
            <Header/>
            <SliderShow/>
            <Navbar/>
            <div className="grid mt-8 lg:grid-cols-4">
                <div className="col-span-1 bg-blue-50">
                    <LeftSideBar/>
                </div>
                <div className="col-span-2">
                    <h3 className="text-3xl">Main Content</h3>
                </div>
                <div className="col-span-1">
                    <RightSideBar/>
                </div>
            </div>
        </div>
    );
};

export default Home;