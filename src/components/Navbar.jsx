import React from "react";
const MyNavbar =()=>{
    return(
      <nav className="navbar navbar-expand-lg bg-body-tertiary ml-20">
  <div className="container-fluid">
    <a className="navbar-brand">Welcome </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/book/list">Add Listing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
};
export default MyNavbar;