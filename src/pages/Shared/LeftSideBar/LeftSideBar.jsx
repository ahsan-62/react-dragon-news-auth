import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {


    const [categories,setCategories]=useState([]);

    useEffect(()=>{

        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
        

    },[])

    console.log(categories);

    return (
        <div>
            <h3 className='ml-3 text-3xl'>All Category</h3>

            <div className="grid gap-5 mt-5 ml-10">
                {
                    categories.map(category=><Link to={`/category/${category.id}`} key={category.id} className="block p-10 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" ><p className="text-xl font-semibold ">{category.name}</p></Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideBar;