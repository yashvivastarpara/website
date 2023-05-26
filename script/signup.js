document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();
    let user={
    name : document.getElementById("name").Value,
    password : document.getElementById("password").Value,
    cpassword : document.getElementById("cpassword").Value,
    number : document.getElementById("number").Value,
    };
    localStorage.setItem("user", JSON.stringify(user));
    console.log(user);
})