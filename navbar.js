import React from 'react'
import { Link } from 'react-router-dom';
// import  './navbar.css'
function Navbar(){
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid menu_bod">
    <a class="navbar-brand" href="#">Ysquare Task</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ">
        {/* <Link to='/' class="nav-link active home_bod" aria-current="page">Home</Link> */}
        <Link to='/' class="nav-link card_bod" >Stop Watch</Link>
         <Link to='/login' class="nav-link super_bod" >Log IN</Link>
        <Link to='/tablefilter' class="nav-link noti_bod">Table Filter</Link>
      </div>
    </div>
  </div>
</nav>
        
        </>

    );
}
export default Navbar;