import nav from "../components/nav.js";

document.getElementById("nav").innerHTML=nav()
let show = (data) => {
    console.log(data);  
    data.map((ele,index) => {
      
      let img = document.createElement("img");
      img.src = ele.image;
      img.setAttribute("class","imgesss");
      
      let title = document.createElement("h3");
      title.setAttribute("class","titless");
      title.innerHTML = ele.title;

      
      let price = document.createElement("p");
      price.innerHTML = ele.price;
      price.setAttribute("class","pricess");
      
      let add = document.createElement("button");
      add.innerHTML = ele.add
      add.innerHTML = "+"
      add.setAttribute("class","add")

      add.addEventListener("click",()=>{
        console.log("add clicked");
        cart[index].qty += 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        window.location.reload();
      })
 
      let num=document.createElement("p");
      num.innerHTML = ele.qty;
      num.setAttribute("class", "qtytyyy")

      let remove = document.createElement("button");
      remove.innerHTML = ele.remove
      remove.innerHTML = "-"
      remove.setAttribute("class","remove")

      remove.addEventListener("click",()=>{
        console.log(ele);
        let qty =cart[index].qty;
        if(qty ==1){
          cart.splice(index,1);
          localStorage.setItem("cart",JSON.stringify(cart));

          console.log(cart);
          window.location.reload();
        }
        else{
          cart[index].qty -=1;
          localStorage.setItem("cart", JSON.stringify(cart));
        window.location.reload();
        }
        
      })

      let cartdiv = document.createElement("div");
      cartdiv.append(img,title,price,add,num,remove)
      cartdiv.setAttribute("class", "cartdiv")
      document.getElementById("cart").append(cartdiv)
    });

  };    

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
show(cart)
