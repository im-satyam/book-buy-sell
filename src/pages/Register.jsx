import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
const RegisterPage=()=>{
  const firebase= useFirebase();
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const navigate = useNavigate();
  useEffect(() => {
    if(firebase.isLoggedin)
    {
      //Navigate to home
      navigate("/")
    }
  }, [firebase,navigate])
  const handelSubmit=async(e)=>{
    e.preventDefault();
    console.log("Signing a User")
  const res= await firebase.signUpUserWithEmailandPassword(email,password)
       console.log("User Signed", res)
  }
  console.log(firebase)
       return(
     <div className="container">
      <form onSubmit={handelSubmit}>
  <div class="mb-3 mt-4">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input onChange={e=>setemail(e.target.value)} value={email} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input onChange={e=>setpassword(e.target.value)} value={password} type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Create Account</button>
</form>

     </div>

       )
}
export default RegisterPage