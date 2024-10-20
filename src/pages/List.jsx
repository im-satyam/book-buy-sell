import React, { useState } from "react";
import { useFirebase } from "../context/Firebase";
const ListingPage= ()=>{
     const firebase = useFirebase();
    const [name, setname] = useState("")
    const [isbnNumber, setisbnNumber] = useState("")
    const [price, setprice] = useState("")
    const [coverPic, setcoverPic] = useState("")
    const handelSubmit=async(e)=>{
        e.preventDefault();
        await firebase.handelNewListing(name,isbnNumber,price, coverPic)
    }

   return(
    <div className="container">
    <form onSubmit={handelSubmit}>
<div class="mb-3 mt-4">
  <label for="exampleInputEmail1" class="form-label">Enter Book Name</label>
  <input onChange={e=>setname(e.target.value)} value={name} type="text" class="form-control" />
 
</div>
<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">ISBN</label>
  <input onChange={e=>setisbnNumber(e.target.value)} value={isbnNumber} type="text" class="form-control" />
</div>
<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Enter the price</label>
  <input onChange={e=>setprice(e.target.value)} value={price} type="text" class="form-control" />
</div>
<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Cover Picture</label>
  <input onChange={e=>setcoverPic(e.target.files[0])}  type="file" class="form-control" />
</div>


<button type="submit" class="btn btn-primary">Create </button>
</form>

   </div>

   );
};
export default ListingPage;