
let count = 0;

function consoleprint(){
    count++;
    let nameinput = document.getElementById('name')
    console.log("Name:",nameinput.value);
    let mailinput = document.getElementById('mailid')
    console.log("Email:",mailinput.value);
    let password = document.getElementById('password')
    console.log("Password:",password.value);
    let phNum = document.getElementById('phNum')
    console.log("Phone Number:",phNum.value);    

   
    console.log("Number of registrations:",count);
}
function Validate() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmpassword").value;
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}

function formValidation(){
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmpassword").value;
    var name = document.getElementById('name');
    var phNum  = document.getElementById('phNum')
    var mailid = document.getElementById('mailid')
    var letters =  /^[A-Za-z ]+/;
    var phno = /^[1-9]{1}[0-9]{9}/;
    var email = /^@gmail.com/;
    if(name.value.match(letters)){
        if(phNum.value.match(phno)){
            if(password == confirmPassword){
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