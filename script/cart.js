import nav from "../components/nav.js";

document.getElementById("nav").innerHTML=nav()
let show = (data) => {
    console.log(data);  
    data.map((ele) => {
      let img = document.createElement("img");
      img.src = ele.image;
      let title = document.createElement("h3");
      title.innerHTML = ele.title;
      let price = document.createElement("p");
      price.innerHTML = ele.price;
      let add = document.createElement("button")
      add.innerHTML = ele.add
      let remove = document.createElement("button")
      remove.innerHTML = ele.remove
      let div = document.createElement("div")
      div.append(img,title,price,add,remove)
      document.getElementById("cart").append(div)
    });

  };    

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
show(cart)
