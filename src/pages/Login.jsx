import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
const LoginPage=()=>{
  const firebase= useFirebase();
  const navigate = useNavigate();
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
useEffect(() => {
    if(firebase.isLoggedin)
        {
    //Navigate to home
    navigate("/")
  }
}, [firebase,navigate])

  const handelSubmit=async(e)=>{
    e.preventDefault();
    console.log("Login a User")
  const res= await firebase.signinuserwithEmailandPass(email,password)
       console.log("Successfull", res)
  }
  
       return(
     <div className="container">
      <form onSubmit={handelSubmit}>
  <div class="mb-3 mt-4">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input onChange={e=>setemail(e.target.value)} value={email} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input onChange={e=>setpassword(e.target.value)} value={password} type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Login </button>
</form>
<h1 className="mt-5 mb-5">OR</h1>
<button onClick={firebase.signinwithgoogle} type="submit" class="btn btn-primary">Signin with Google </button>
     </div>

       )
}
export default LoginPage