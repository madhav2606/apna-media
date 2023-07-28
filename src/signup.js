

const Create = () => {

// function consoleprint(){
//     count++;
//     let nameinput = document.getElementById('name')
//     console.log("Name:",nameinput.value);
//     let mailinput = document.getElementById('mailid')
//     console.log("Email:",mailinput.value);
//     let password = document.getElementById('password')
//     console.log("Password:",password.value);
//     let phNum = document.getElementById('phNum')
//     console.log("Phone Number:",phNum.value);    

   
//     console.log("Number of registrations:",count);
// }
const Validate =() => {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmpassword").value;
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}

const formValidation =  () => {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmpassword").value;
    var name = document.getElementById('name');
    var phNum  = document.getElementById('phNum')
    // var mailid = document.getElementById('mailid')
    var letters =  /^[A-Za-z ]+/;
    var phno = /^[1-9]{1}[0-9]{9}/;
    // var email = /^@gmail.com/;
    if(name.value.match(letters)){
        if(phNum.value.match(phno)){
            if(password === confirmPassword){
                // if(mailid.value.match(email)){
                    alert("Acoount has been created successfully");
                // }
           
            }       
        }
    }
    else{
        alert("invalid credentials")
    }
   
}
    
    

    return ( 
        <><br/><h1>Signup form</h1><br /><form style={{
            backgroundColor: 'red'
        }} className="formsignup" onSubmit={formValidation} id="form" name="myForm" action="" />
        <label for="name" style={{
            position: 'relative',
            left: '400px'
        }}>Name:</label><br /><input style={{
            position: 'relative',
            left: '400px',
            width: '450px',
            height: '30px'
        }} type="text" id="name" placeholder="Enter your name" minlength="5" title="Only Letters, Invalid Credentials" pattern="[a-zA-Z ]+" required /><br /><br /><label style={{
            position: 'relative',
            left: '400px'
        }} for="phNum">Phone number:</label><br /><input style={{
            position: 'relative',
            left: '400px',
            width: '450px',
            height: '30px'
        }} type="phNum" name="phonenumber" id="phNum" placeholder="Phone No." title="enter 10 digit number,  Invalid Credentials" pattern="[1-9]{1}[0-9]{9}" required /><br /><br /><label style={{
            position: 'relative',
            left: '400px'
        }} for="mail">Email:</label><br /><input style={{
            position: 'relative',
            left: '400px',
            width: '450px',
            height: '30px'
        }} type="email" name="email" id="mailid" placeholder="abc@gmail.com" pattern=".+@gmail.com" title="enter gmail account, Invalid credentials" required /><br /><br /><div class="formpart" /><br /><label style={{
            position: 'relative',
            left: '400px'
        }}for="password">Password:</label><br /><input style={{
            position: 'relative',
            left: '400px',
            width: '450px',
            height: '30px'
        }} type="password" name="password" id="password" placeholder="Enter your password" minlength="8" required /><br /><br /><label style={{
            position: 'relative',
            left: '400px'
        }} for="Confirmpassword">Confirm Password:</label><br /><input style={{
            position: 'relative',
            left: '400px',
            width: '450px',
            height: '30px'
        }} type="password" name="confirmpassword" id="confirmpassword" placeholder="Enter your password" minlength="8" required /><br /><div /><br /><br /><button className="signupsubmit" type="submit" onSubmit={Validate}>signup</button><form />
        </>
        
     );
     
}

<script src="indexsignup.js"></script>

 
export default Create;