let myform= document.getElementById("form2");
let username= document.getElementById("username");
let password= document.getElementById("password");

myform.onsubmit = function validate (event){
    event.preventDefault();
    
    if (username.value==''){
        alert("Please Enter Username");
        return;
    }
    if (password.value==''){
        alert ("Please Enter Password");
        return;
    }
    myform.submit();
}