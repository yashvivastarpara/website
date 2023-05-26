document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();
    let user={
    email : document.getElementById("email").Value,
    password : document.getElementById("password").Value,
    };
    localStorage.setItem("user", JSON.stringify(user));
    console.log(user);
})