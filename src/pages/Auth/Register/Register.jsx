import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const Register = () => {

    const {createUser}=useContext(AuthContext);

    const handleRegister=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,email,password);

        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
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
      <h1 className="text-3xl font-bold">Create Your Account</h1>
     
    </div>
    <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
      <form onSubmit={handleRegister} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>
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
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="mt-6 form-control">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>

      <div className="flex mb-3 text-center ">
        <p className="ml-8 ">Already have an account</p>
        <Link to="/login" className="link link-hover "><a className="ml-2 text-primary">Login</a></Link>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Register;