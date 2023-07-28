const Signin = () => {
    
    return (   
        
        <>
        <br /><br /><h1>Signin Form</h1>
        <br />
        <form className="formsignin" action="">
        <div className="imgcontainer">
            <img src="https://webstockreview.net/images/clipart-desk-work-18.png" alt="" class="avatar" />
        </div>

        <div className="containersignin">
            <label for="uname"><b>Username</b></label>
            <input className="name" type="text"   placeholder="Enter Username" name="uname" required />

            <label for="psw"><b>Password</b></label>
            <input type="password" className="password" placeholder="Enter Password" name="psw" required />

            <br /><br />
            <button className="signinsubmit" type="submit">login</button>

            <label>
                <input className="remember" type="checkbox" name="remember" /> Remember me
            </label>
        </div>

    </form></>
     );
}
 
export default Signin;