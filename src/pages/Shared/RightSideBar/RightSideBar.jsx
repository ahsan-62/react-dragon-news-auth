import { AiFillGoogleCircle } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import {  FaSquareTwitter,FaSquareInstagram } from "react-icons/fa6";
import swim from '../../../assets/swimming.png'
import classroom from '../../../assets/class.png'
import playground from '../../../assets/playground.png'
import bg from '../../../assets/bg.png'


const RightSideBar = () => {
    return (
        <div>
            <div>
                <h3 className="mb-3 text-xl font-semibold">Login With</h3>
                <div>
                    <div className="flex justify-center w-3/4 gap-1 py-3 border rounded-lg ">
                        
                        <button className='text-center text-blue-400 '><AiFillGoogleCircle className="inline mr-1"/>Login With Google</button>
                 </div>
                    <div className="flex justify-center w-3/4 py-3 mt-2 border rounded-lg ">
                        <button className='text-center'><VscGithub className="inline mr-1"/>Login With Github</button>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h3 className="mb-3 text-xl font-semibold">Find Us On</h3>
                <div className="w-3/4 py-3 pl-10 border ">
                    <Link to="/"><FaFacebookSquare className="inline mr-1 text-blue-600"/>Facebook</Link>
                </div>
                <div className="w-3/4 py-3 pl-10 border ">
                    <Link to="/"><FaSquareTwitter className="inline mr-1 text-pink-600"/>Twitter</Link>
                </div>
                <div className="w-3/4 py-3 pl-10 border ">
                    <Link to="/"><FaSquareInstagram className="inline mr-1 text-red-500"/>Instagram</Link>
                </div>
            </div>

            <div>
                <h3 className="mt-8 mb-3 text-xl font-semibold">Q Zone</h3>
                <div>
                <div className="shadow-xl card bg-base-100 ">
                <figure className="px-10 pt-10">
                    <img
                    src={swim}
                    alt="Swimming"
                    className="rounded-xl" />
                </figure>

                <figure className="px-10 pt-10">
                    <img
                    src={classroom}
                    alt="Classroom"
                    className="rounded-xl" />
                </figure>
                <figure className="px-10 pt-10">
                    <img
                    src={playground }
                    alt="playground"
                    className="rounded-xl" />
                </figure>
                </div>
                </div>
            </div>

            <div className="mt-8">
                <img className="w-full" src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightSideBar;