import nav from "../components/nav.js";

document.getElementById("nav").innerHTML=nav()
let show = (data) => {
    console.log(data);  
    data.map((ele) => {
      let img = document.createElement("img");
      img.src = ele.image;
      img.setAttribute("class","imgesss");
      
      let title = document.createElement("h3");
      title.setAttribute("class","titless");
      title.innerHTML = ele.title;
      
      let add = document.createElement("button");
      add.innerHTML = ele.add
      add.innerHTML = "+"
      add.setAttribute("class","add")

      let price = document.createElement("p");
      price.innerHTML = ele.price;
      price.setAttribute("class","pricess");

      let remove = document.createElement("button");
      remove.innerHTML = ele.remove
      remove.innerHTML = "-"
      remove.setAttribute("class","remove")

      let cartdiv = document.createElement("div");
      cartdiv.append(img,title,add,price,remove)
      cartdiv.setAttribute("class", "cartdiv")
      document.getElementById("cart").append(cartdiv)
    });

  };    

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
show(cart)
