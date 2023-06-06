import nav from "../components/nav.js";

document.getElementById("nav").innerHTML=nav();
document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();
    let user=JSON.parse(localStorage.getItem("user"));
    console.log(user);
    let email = document.getElementById("email").Value;
    let password = document.getElementById("password").Value;

    if(email== user.email && password== user.password){
        alert("Please enter");
        window.location.href="../website.html";
    }
    else{
        alert("Invalid email");
    }
})  