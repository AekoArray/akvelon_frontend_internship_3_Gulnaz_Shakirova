function validateName(email) {
    let re = /^[a-zA-Z\s]{1,120}$/;
    if(re.test(email)){
        return true;
    } else {
        alert("Username is incorrect!");
        return false;
    }
}

function submitForm() {
    let name=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    if (validatePassword(password) && validateName(name)) {
        alert("You are successfully registered!")
    }
}

function validatePassword(password) {
    if(password.length < 8){
        alert("Password should contain at least 8 symbol!")
        return false;
    } else {
        return true;
    }
}