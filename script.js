const products=[
{id:1,name:"Cà phê sữa",price:35000,cat:"coffee",catName:"CÀ PHÊ",img:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85",desc:"Cà phê rang xay đậm đà kết hợp sữa đặc."},
{id:2,name:"Cà phê đen",price:30000,cat:"coffee",catName:"CÀ PHÊ",img:"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=85",desc:"Hương cà phê nguyên bản, thơm và mạnh vị."},
{id:3,name:"Bạc xỉu",price:39000,cat:"coffee",catName:"CÀ PHÊ",img:"https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=800&q=85",desc:"Vị sữa béo nhẹ, cà phê thơm vừa đủ."},
{id:4,name:"Trà đào cam sả",price:42000,cat:"tea",catName:"TRÀ",img:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=85",desc:"Trà thanh mát cùng đào, cam và sả."},
{id:5,name:"Matcha latte",price:45000,cat:"tea",catName:"TRÀ",img:"https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=800&q=85",desc:"Matcha thơm dịu, sữa mịn và cân bằng."},
{id:6,name:"Trà chanh mật ong",price:32000,cat:"tea",catName:"TRÀ",img:"https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=85",desc:"Thức uống thanh nhẹ cho ngày nóng."},
{id:7,name:"Croissant bơ",price:38000,cat:"cake",catName:"BÁNH",img:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=85",desc:"Bánh croissant giòn lớp ngoài, mềm thơm bên trong."},
{id:8,name:"Tiramisu",price:48000,cat:"cake",catName:"BÁNH",img:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=85",desc:"Tiramisu mềm mịn với cà phê và cacao."}
];
let cart=JSON.parse(localStorage.getItem("coffeeCart")||"[]");

const money=n=>n.toLocaleString("vi-VN")+"đ";
function renderProducts(category="all"){
  const grid=document.getElementById("productGrid");
  grid.innerHTML=products.filter(p=>category==="all"||p.cat===category).map(p=>`
  <article class="product">
    <img src="${p.img}" alt="${p.name}" onclick="showProduct(${p.id})">
    <div class="product-body">
      <div class="product-cat">${p.catName}</div>
      <h3>${p.name}</h3><p class="product-desc">${p.desc}</p>
      <div class="product-bottom"><span class="price">${money(p.price)}</span>
      <button class="add" onclick="addToCart(${p.id})">+ Thêm</button></div>
    </div>
  </article>`).join("");
}
function showProduct(id){
  const p=products.find(x=>x.id===id);
  document.getElementById("modalImage").src=p.img;
  document.getElementById("modalImage").alt=p.name;
  document.getElementById("modalCategory").textContent=p.catName;
  document.getElementById("modalName").textContent=p.name;
  document.getElementById("modalDescription").textContent=p.desc;
  document.getElementById("modalPrice").textContent=money(p.price);
  document.getElementById("modalAdd").onclick=()=>{addToCart(p.id);closeModal();};
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("overlay").classList.remove("hidden");
}
function closeModal(){document.getElementById("modal").classList.add("hidden");document.getElementById("overlay").classList.add("hidden")}
function addToCart(id){const item=cart.find(x=>x.id===id);if(item)item.qty++;else cart.push({id,qty:1});saveCart();openCart();}
function changeQty(id,delta){const item=cart.find(x=>x.id===id);if(!item)return;item.qty+=delta;if(item.qty<=0)cart=cart.filter(x=>x.id!==id);saveCart();}
function saveCart(){localStorage.setItem("coffeeCart",JSON.stringify(cart));renderCart();}
function renderCart(){
  document.getElementById("cartCount").textContent=cart.reduce((s,x)=>s+x.qty,0);
  const box=document.getElementById("cartItems");
  if(!cart.length){box.innerHTML='<div class="empty">Giỏ hàng đang trống ☕<br><br>Hãy chọn một món nhé!</div>';document.getElementById("cartTotal").textContent="0đ";return;}
  let total=0;
  box.innerHTML=cart.map(item=>{const p=products.find(x=>x.id===item.id);total+=p.price*item.qty;return`
  <div class="cart-row"><img src="${p.img}" alt=""><div><h4>${p.name}</h4><small>${money(p.price)}</small><div class="qty"><button onclick="changeQty(${p.id},-1)">−</button><b>${item.qty}</b><button onclick="changeQty(${p.id},1)">+</button></div></div></div>`}).join("");
  document.getElementById("cartTotal").textContent=money(total);
}
function openCart(){document.getElementById("cartPanel").classList.add("open");document.getElementById("overlay").classList.remove("hidden");renderCart();}
function closeCart(){document.getElementById("cartPanel").classList.remove("open");document.getElementById("overlay").classList.add("hidden");}
function checkout(){
  if(!cart.length){alert("Bạn chưa chọn sản phẩm.");return;}
  alert("Đặt hàng thành công! Đây là chức năng mô phỏng cho bài tập.");
}
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");renderProducts(btn.dataset.category)}));
renderProducts();renderCart();