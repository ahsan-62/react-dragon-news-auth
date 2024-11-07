
import { Outlet } from "react-router-dom";


const Root = () => {


    return (
        <div className="mx-auto max-w-7xl font-poppins">
            <Outlet/>
        </div>
    );
};

export default Root;