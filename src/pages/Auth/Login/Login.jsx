import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";





const Login = () => {

  const navigate=useNavigate();

  const {loginUser}=useContext(AuthContext);

  const handleLogin=(e)=>{
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password);
    loginUser(email,password)
    .then(result=>{
        const user=result.user;
        console.log(user);
        navigate('/');
        // form.reset();
        
    })
    .catch(error=>{
        console.log(error);
    })
  }
    return (
        <div>
            <Navbar />
            <div>
            <div className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"  name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="mt-6 form-control">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      <div className="flex mb-3 text-center ">
        <p className="ml-8 ">Are you new here?</p>
        <Link to="/register" className="link link-hover "><a className="ml-2 text-primary">Register</a></Link>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Login;