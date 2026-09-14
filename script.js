const products=[
{id:1,name:"Cà phê sữa",price:35000,cat:"coffee",catName:"CÀ PHÊ",img:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85",desc:"Cà phê rang xay đậm đà kết hợp sữa đặc."},
{id:2,name:"Cà phê đen",price:30000,cat:"coffee",catName:"CÀ PHÊ",img:"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=85",desc:"Hương cà phê nguyên bản, thơm và mạnh vị."},
{id:3,name:"Bạc xỉu",price:39000,cat:"coffee",catName:"CÀ PHÊ",img:"https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=800&q=85",desc:"Vị sữa béo nhẹ, cà phê thơm vừa đủ."},
{id:4,name:"Cà phê muối",price:36000,cat:"coffee",catName:"CÀ PHÊ",img:"https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=800&q=85",desc:"Kem muối béo mặn phủ trên cà phê đá xay."},
{id:5,name:"Cappuccino",price:42000,cat:"coffee",catName:"CÀ PHÊ",img:"https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=85",desc:"Espresso hoà cùng sữa nóng đánh bông mịn."},
{id:6,name:"Cold brew",price:44000,cat:"coffee",catName:"CÀ PHÊ",img:"https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=85",desc:"Cà phê ủ lạnh 12 giờ, vị êm và thanh."},
{id:7,name:"Trà đào cam sả",price:42000,cat:"tea",catName:"TRÀ",img:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=85",desc:"Trà thanh mát cùng đào, cam và sả."},
{id:8,name:"Matcha latte",price:45000,cat:"tea",catName:"TRÀ",img:"https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=800&q=85",desc:"Matcha thơm dịu, sữa mịn và cân bằng."},
{id:9,name:"Trà chanh mật ong",price:32000,cat:"tea",catName:"TRÀ",img:"https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=85",desc:"Thức uống thanh nhẹ cho ngày nóng."},
{id:10,name:"Trà vải",price:33000,cat:"tea",catName:"TRÀ",img:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=85",desc:"Trà trái cây ngọt thanh với vải thơm nức."},
{id:11,name:"Trà sen vàng",price:38000,cat:"tea",catName:"TRÀ",img:"https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=85",desc:"Trà ô long ướp sen, vị nhẹ và thanh tao."},
{id:12,name:"Croissant bơ",price:38000,cat:"cake",catName:"BÁNH",img:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=85",desc:"Bánh croissant giòn lớp ngoài, mềm thơm bên trong."},
{id:13,name:"Tiramisu",price:48000,cat:"cake",catName:"BÁNH",img:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=85",desc:"Tiramisu mềm mịn với cà phê và cacao."},
{id:14,name:"Bánh phô mai nướng",price:39000,cat:"cake",catName:"BÁNH",img:"https://images.unsplash.com/photo-1567171466295-4afa63d45416?auto=format&fit=crop&w=800&q=85",desc:"Béo thơm, mềm ẩm, ăn kèm cà phê rất hợp."},
{id:15,name:"Bánh brownie",price:35000,cat:"cake",catName:"BÁNH",img:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=85",desc:"Đậm vị chocolate, ẩm mềm ở giữa."}
];
let cart=JSON.parse(localStorage.getItem("coffeeCart")||"[]");
let orderHistory=JSON.parse(localStorage.getItem("coffeeHistory")||"[]");

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

function saveHistory(){localStorage.setItem("coffeeHistory",JSON.stringify(orderHistory));}
function renderHistory(){
  const box=document.getElementById("historyItems");
  if(!box) return;
  if(!orderHistory.length){box.innerHTML='<div class="empty">Chưa có đơn hàng nào ☕<br><br>Lịch sử đặt hàng sẽ hiện ở đây.</div>';return;}
  box.innerHTML=orderHistory.slice().reverse().map(order=>`
  <div class="history-row">
    <div class="history-top"><span>Đơn #${order.id}</span><span>${order.time}</span></div>
    <div class="history-items">${order.items.map(i=>`${i.qty}× ${i.name}`).join(", ")}</div>
    <div class="history-total"><span>Tổng cộng</span><b>${money(order.total)}</b></div>
  </div>`).join("");
}
function openHistory(){renderHistory();document.getElementById("historyPanel").classList.add("open");document.getElementById("overlay").classList.remove("hidden");}
function closeHistory(){document.getElementById("historyPanel").classList.remove("open");document.getElementById("overlay").classList.add("hidden");}

function checkout(){
  if(!cart.length){alert("Bạn chưa chọn sản phẩm.");return;}
  const total=cart.reduce((s,item)=>{const p=products.find(x=>x.id===item.id);return s+p.price*item.qty;},0);
  const order={
    id:orderHistory.length+1,
    time:new Date().toLocaleString("vi-VN"),
    items:cart.map(item=>({name:products.find(x=>x.id===item.id).name,qty:item.qty})),
    total
  };
  orderHistory.push(order);
  saveHistory();
  cart=[];
  saveCart();
  closeCart();
  alert("Đặt hàng thành công! Xem lại trong mục Lịch sử.");
}
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");renderProducts(btn.dataset.category)}));
renderProducts();renderCart();
