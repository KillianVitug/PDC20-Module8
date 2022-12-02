function validate(){
    if(document.myForm.firstname.value==""){
        document.getElementById("nameErr").innerHTML = "Please Enter First Name";
        return false;
    }
    if(document.myForm.lastname.value==""){
        document.getElementById("nameErr").innerHTML = "Please Enter Last Name";
        return false;
    }

    if(document.myForm.email.value==""){
    document.getElementById("emailErr").innerHTML = "Please Enter Your Email";
    return false;
    } else {
        var  regex = /^\$+@\$+\.\$+$/;
        if(regex.test(document.myForm.email.value)==false){
            alert("Please Enter A Valid Email Address");
            return false;
        }
    }
    
    if(document.myForm.department.value==""){
        document.getElementById("deptErr").innerHTML = "Please Enter Department";
        return false;
    }
}