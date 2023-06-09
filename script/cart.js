import nav from "../components/nav.js";

document.getElementById("nav").innerHTML = nav();
let show = (data) => {
  console.log(data);
  data.map((ele, index) => {
    let img = document.createElement("img");
    img.src = ele.image;
    img.setAttribute("class", "imgesss");

    let title = document.createElement("h3");
    title.setAttribute("class", "titless");
    title.innerHTML = ele.title;

    let price = document.createElement("p");
    price.innerHTML = ele.price;
    price.setAttribute("class", "pricess");

    let add = document.createElement("button");
    add.innerHTML = ele.add;
    add.innerHTML = "+";
    add.setAttribute("class", "add");

    add.addEventListener("click", () => {
      console.log("add clicked");
      cart[index].qty += 1;
      localStorage.setItem("cart", JSON.stringify(cart));
      window.location.reload();
    });

    let num = document.createElement("p");
    num.innerHTML = ele.qty;
    num.setAttribute("class", "qtytyyy");

    let remove = document.createElement("button");
    remove.innerHTML = ele.remove;
    remove.innerHTML = "-";
    remove.setAttribute("class", "remove");

    remove.addEventListener("click", () => {
      console.log(ele);
      let qty = cart[index].qty;
      if (qty == 1) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));

        console.log(cart);
        window.location.reload();
      } else {
        cart[index].qty -= 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        window.location.reload();
      }
    });

    let cartdiv = document.createElement("div");
    cartdiv.append(img, title, price, add, num, remove);
    cartdiv.setAttribute("class", "cartdiv");
    document.getElementById("cart").append(cartdiv);
  });
};

let cart = JSON.parse(localStorage.getItem("cart")) || [];
show(cart);

cartui(cart);
let ui=()=>{
  let parent2 = document.createElement("div");
  let lable = document.createElement("lable");
  lable.innerHTML = "code:";
  let lable2 = document.createElement("lable2");
  lable2.innerHTML = "price:";
  let promocode = document.createElement("promocode");
  promocode.Placeholder = "Enter in promo code";
  promocode.setAttribut("class", "promocode");
  let dprice = document.createElement("p");

  let apply = document.createElement("Sub");
  apply.innerHTML = "enter the apply";
  apply.setAttribute("class", "enter the apply");

  parent2.append(lable, promocode, apply);
  document.getElementById("page").append(parent2);
  document.getElementById("price").append(lable2, totalprice);

  parent2.setAttribute("class", "parent2");
  lable.setAttribute("class", "lable");

  promocode.addEventListener("keypress", (e) => {
    console.log(e.key);
    if (e.key == "Enter") {
      console.log(promocode.value);
      if (promocode.value == "code20") {
        totalprice -= totalprice / 100 + 20;
        console.log(totalprice);
        dprice.innerHTML = `final price: ${totalprice}`;
        parent2.append(dprice);
        dprice.setAttribute("class", "dprice");
      }
    }
  });

  let price = "";
  for (let i = 1; i < totalprice.length; i++) {
    price += totalprice[i];
  }
  document.getElementById("price").append(price);
};
ui();
