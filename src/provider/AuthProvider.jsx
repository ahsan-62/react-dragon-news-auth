import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import PropTypes from "prop-types";
import { RotatingSquare } from "react-loader-spinner";

export const AuthContext=createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [loading,setLoading]=useState(true);

    const [user,setUser]=useState(null);

    //Create User with email and password(Firebase)

    const createUser=(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password);
       
    }

    const loginUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
        

    }

    //to find out current user

    useEffect(()=>{

        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        });

        return ()=>{
            unSubscribe();
        }
    },[]);

    const logOut=()=>{

        setLoading(true);
        return signOut(auth);
    }

    const authInfo={
        user,
        createUser,
        loginUser,
        logOut,
        loading
    };
    return (
        <AuthContext.Provider value={authInfo}>
             {
                loading?<p className='flex items-center justify-center h-screen'><RotatingSquare
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="rotating-square-loading"
                wrapperStyle={{}}
                wrapperClass=""
                /></p>:children
               }
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes={
    children:PropTypes.element  

}