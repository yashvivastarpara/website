import nav from "../components/nav.js";

document.getElementById("nav").innerHTML=nav();
let show = (data) => {
    console.log(data);
    document.getElementById("products").innerHTML = "";
  
    data.map((ele) => {
      let img = document.createElement("img");
      img.src = ele.image;
      let title = document.createElement("h3");
      title.innerHTML = ele.title;
      let price = document.createElement("p");
      price.innerHTML = ele.price;
      let category = document.createElement("p");
      category.innerHTML = ele.category;
      // let rating = document.createElement("h5");
      // rating.innerHTML = ele.rating;
      let btn = document.createElement("button");
      btn.innerHTML = "add to cart";
      let btn2 = document.createElement("button");
      btn2.innerHTML = "but now";
      let divbtn = document.createElement("div");
      divbtn.append(btn, btn2);
      let div = document.createElement("div");
      div.append(img, title, price, category, divbtn);
      document.getElementById("products").append(div);
      btn.addEventListener("click", () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        console.log(cart);
        let exists = false;
        cart.map((item, idx) => {
          if (item.id == ele.id) {
            cart[idx].qty += 1;
            localStorage.setItem("cart", JSON.stringify(cart));
            exists = true;
          }
        });
        if (!exists) {
          cart.push({ ...ele, qty: 1 });
          localStorage.setItem("cart", JSON.stringify(cart));
          alert("added to cart");
        }
      });
    });
  };
  fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => show(data));  