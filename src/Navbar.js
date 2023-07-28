const Navbar = () => {
    return ( 
        <header>
        <div className="container">
        <div className="logobox">
            <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/e5jvlklnfso3jvn6qmxg" alt="" />
            <span className="logotext"> Apna Social </span>

        </div>

        <div className="navlinks">
           <ul>
           <li><a href="/">Home</a></li>
            <li><a href="/signup">Signup</a></li>
            <li><a href="Signin">Signin</a></li>
           </ul>
        </div>
    </div>
    </header>

     );
}

export default Navbar;