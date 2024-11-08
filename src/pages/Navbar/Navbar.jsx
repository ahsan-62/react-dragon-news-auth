import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {


 const {user,logOut}=useContext(AuthContext);

 const handleLogOut=()=>{

    logOut();
 }

    const navLinks=<>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/contact">Career</NavLink></li>
    </>
    return (
        <div className="bg-green-500 navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {
            navLinks
        }
      </ul>
    </div>
  </div>
  <div className="hidden navbar-center lg:flex">
    <ul className="px-1 menu menu-horizontal">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
 {
    user?<> <h1>{user?.email}</h1> <button onClick={handleLogOut} className="btn btn-primary">Logout</button></>:<Link to="/login"><button className="btn btn-primary">Login</button></Link>
 }
  </div>
</div>
    );
};

export default Navbar;