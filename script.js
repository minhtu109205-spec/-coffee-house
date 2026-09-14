@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap');

:root{
  --ink:#211308;
  --ink-soft:#3a2717;
  --cream:#F7F0E1;
  --paper:#FCF9F2;
  --copper:#B06B33;
  --copper-dark:#8A4F22;
  --moss:#4C5C3A;
  --berry:#8C3B34;
  --line:rgba(33,19,8,0.14);
  --shadow:0 10px 24px rgba(33,19,8,0.10);
}

*{box-sizing:border-box;margin:0;padding:0;}

body{
  font-family:'Be Vietnam Pro', sans-serif;
  color:var(--ink);
  background:var(--paper);
  line-height:1.6;
  -webkit-font-smoothing:antialiased;
}

h1,h2,h3{font-family:'Playfair Display', serif; font-weight:600; line-height:1.15;}
a{color:inherit; text-decoration:none;}
button{font-family:inherit; cursor:pointer; border:none; background:none;}
img{display:block; max-width:100%;}

.container{max-width:1120px; margin:0 auto; padding:0 28px;}

/* Header */
.header{position:sticky; top:0; z-index:40; background:rgba(252,249,242,0.92); backdrop-filter:blur(8px); border-bottom:1px solid var(--line);}
.nav{display:flex; align-items:center; justify-content:space-between; height:76px;}
.logo{font-family:'Playfair Display', serif; font-size:22px; font-weight:700; color:var(--ink);}
.logo span{color:var(--copper);}
.header nav{display:flex; align-items:center; gap:32px;}
.header nav a:not(.logo){font-size:15px; font-weight:500; color:var(--ink-soft); position:relative; padding:4px 0;}
.header nav a:not(.logo)::after{content:""; position:absolute; left:0; bottom:0; width:0; height:2px; background:var(--copper); transition:width .25s ease;}
.header nav a:not(.logo):hover::after{width:100%;}
.header-actions{display:flex; align-items:center; gap:10px;}
.icon-btn{display:flex; align-items:center; gap:6px; border:1px solid var(--line); border-radius:999px; padding:9px 16px; font-size:14px; font-weight:500; background:var(--paper); transition:border-color .2s;}
.icon-btn:hover{border-color:var(--copper);}
.icon-btn b{background:var(--copper); color:#fff; font-size:11px; font-weight:700; min-width:18px; height:18px; border-radius:999px; display:inline-flex; align-items:center; justify-content:center; padding:0 4px;}

/* Hero */
.hero{position:relative; background:linear-gradient(180deg,#2A1810 0%, #201309 100%); color:var(--cream); overflow:hidden; padding:96px 0 120px;}
.hero-content{display:grid; grid-template-columns:1.1fr 0.9fr; gap:48px; align-items:center; position:relative; z-index:2;}
.eyebrow{font-size:13px; font-weight:600; letter-spacing:.04em; color:var(--copper); margin-bottom:14px;}
.hero h1{font-size:52px; color:#fff; margin-bottom:20px;}
.hero h1 span{color:var(--copper);}
.hero-text{font-size:17px; color:rgba(247,240,225,0.78); max-width:440px; margin-bottom:32px;}

.primary-btn{display:inline-flex; align-items:center; gap:8px; background:var(--copper); color:#fff; font-weight:600; font-size:15px; padding:14px 26px; border-radius:8px; transition:background .2s, transform .15s;}
.primary-btn:hover{background:var(--copper-dark);}
.primary-btn:active{transform:scale(.98);}
.primary-btn.full{width:100%; justify-content:center;}

.phin{position:relative; width:100%; height:340px;}
.phin-cup{position:absolute; left:50%; bottom:20px; transform:translateX(-50%); width:130px; height:90px; background:var(--cream); border-radius:0 0 60px 60px; box-shadow:inset 0 -14px 0 rgba(33,19,8,0.12);}
.phin-cup::before{content:""; position:absolute; top:-10px; left:-14px; right:-14px; height:20px; background:var(--cream); border-radius:999px;}
.phin-filter{position:absolute; left:50%; bottom:110px; transform:translateX(-50%); width:96px; height:70px; background:linear-gradient(180deg, #C98A4E, var(--copper)); clip-path:polygon(14% 0, 86% 0, 100% 100%, 0 100%);}
.phin-filter::after{content:""; position:absolute; left:50%; bottom:-46px; transform:translateX(-50%); width:3px; height:46px; background:var(--ink-soft); opacity:.5;}
.phin-drip{position:absolute; left:50%; bottom:64px; transform:translateX(-50%); width:6px; height:6px; border-radius:50%; background:var(--copper); animation:drip 1.8s ease-in infinite;}
@keyframes drip{0%{opacity:0; transform:translate(-50%,0) scale(.6);}15%{opacity:1;}80%{opacity:1; transform:translate(-50%,36px) scale(1);}100%{opacity:0; transform:translate(-50%,40px) scale(.9);}}
.phin-steam{position:absolute; left:50%; bottom:200px; transform:translateX(-50%); width:2px; height:60px; background:linear-gradient(180deg, transparent, rgba(247,240,225,.35), transparent); filter:blur(2px); animation:steam 4s ease-in-out infinite;}
@keyframes steam{0%,100%{opacity:.2; transform:translateX(-50%) translateY(0);}50%{opacity:.5; transform:translateX(-50%) translateY(-16px);}}
@media (prefers-reduced-motion: reduce){.phin-drip, .phin-steam{animation:none;}}

/* Section shell */
.section{padding:88px 0;}
.section-head{display:flex; justify-content:space-between; align-items:flex-end; gap:24px; margin-bottom:40px; flex-wrap:wrap;}
.section-head h2{font-size:32px;}
.filters{display:flex; gap:8px; flex-wrap:wrap;}
.filter{border:1px solid var(--line); border-radius:999px; padding:8px 18px; font-size:14px; font-weight:500; color:var(--ink-soft); transition:all .2s;}
.filter:hover{border-color:var(--copper);}
.filter.active{background:var(--ink); color:var(--cream); border-color:var(--ink);}

/* Product grid */
.product-grid{display:grid; grid-template-columns:repeat(auto-fill, minmax(250px, 1fr)); gap:24px;}
.product{background:var(--paper); border:1px solid var(--line); border-radius:14px; overflow:hidden; transition:box-shadow .2s, transform .2s;}
.product:hover{box-shadow:var(--shadow); transform:translateY(-3px);}
.product img{width:100%; height:170px; object-fit:cover; cursor:pointer; background:var(--cream);}
.product-body{padding:16px 18px 18px;}
.product-cat{display:inline-block; font-size:11px; font-weight:700; letter-spacing:.04em; color:var(--copper-dark); margin-bottom:10px;}
.product-body h3{font-size:17px; margin-bottom:6px;}
.product-desc{font-size:13.5px; color:var(--ink-soft); opacity:.85; margin-bottom:14px; min-height:38px;}
.product-bottom{display:flex; align-items:center; justify-content:space-between; padding-top:12px; border-top:1px solid var(--line);}
.price{font-weight:700; font-size:16px;}
.add{font-size:13px; font-weight:600; color:#fff; background:var(--ink); padding:8px 14px; border-radius:8px; transition:background .2s;}
.add:hover{background:var(--copper);}

/* About */
.about{background:var(--cream); padding:88px 0;}
.about-grid{display:grid; grid-template-columns:0.8fr 1.2fr; gap:56px; align-items:center;}
.about-image{height:320px; border-radius:16px; background:linear-gradient(150deg, #C98A4E, #7A4A22);}
.about h2{font-size:30px; margin-bottom:16px;}
.about p{color:var(--ink-soft); max-width:480px; margin-bottom:28px;}
.stats{display:flex; gap:36px;}
.stats strong{display:block; font-family:'Playfair Display', serif; font-size:26px; color:var(--copper-dark);}
.stats span{font-size:13px; color:var(--ink-soft);}

/* Contact */
.contact-box{display:flex; align-items:center; justify-content:space-between; gap:24px; flex-wrap:wrap; background:var(--ink); color:var(--cream); border-radius:20px; padding:48px 52px;}
.contact h2{font-size:28px; color:#fff; margin-bottom:12px;}
.contact p{color:rgba(247,240,225,0.75);}

/* Footer */
footer{border-top:1px solid var(--line); padding:32px 0;}
.footer{display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;}
.footer p{font-size:13px; color:var(--ink-soft); opacity:.75;}

/* Modal */
.modal{position:fixed; inset:0; z-index:100; display:flex; align-items:center; justify-content:center; padding:20px;}
.modal.hidden{display:none;}
.modal-card{background:var(--paper); width:100%; max-width:560px; border-radius:16px; overflow:hidden; max-height:88vh; overflow-y:auto; position:relative; box-shadow:0 30px 60px rgba(0,0,0,0.25);}
.modal-card img{width:100%; height:220px; object-fit:cover; background:var(--cream);}
.modal-info{padding:26px 28px 28px;}
.modal-info h2{font-size:24px; margin:4px 0 10px;}
.modal-info p{color:var(--ink-soft); margin-bottom:18px;}
.modal-price{display:block; font-size:22px; margin-bottom:18px;}
.close{position:absolute; top:14px; right:14px; width:32px; height:32px; border-radius:50%; background:rgba(255,255,255,0.9); font-size:20px; display:flex; align-items:center; justify-content:center; z-index:2;}

/* Side panels (cart & history) */
.overlay{position:fixed; inset:0; background:rgba(33,19,8,0.45); z-index:90;}
.overlay.hidden{display:none;}
.side-panel{position:fixed; top:0; right:0; height:100vh; width:100%; max-width:400px; background:var(--paper); z-index:95; transform:translateX(100%); transition:transform .3s ease; display:flex; flex-direction:column; box-shadow:-20px 0 40px rgba(0,0,0,0.15);}
.side-panel.open{transform:translateX(0);}
.panel-header{display:flex; align-items:center; justify-content:space-between; padding:22px 24px; border-bottom:1px solid var(--line);}
.panel-header h2{font-size:19px;}
.panel-header button{font-size:22px; color:var(--ink-soft);}
.panel-items{flex:1; overflow-y:auto; padding:16px 24px;}
.empty{color:var(--ink-soft); opacity:.7; font-size:14px; padding:40px 0; text-align:center;}

.cart-row{display:flex; gap:12px; padding:14px 0; border-bottom:1px solid var(--line);}
.cart-row img{width:52px; height:52px; border-radius:10px; object-fit:cover; flex-shrink:0;}
.cart-row h4{font-size:14.5px; margin-bottom:2px;}
.cart-row small{font-size:12.5px; color:var(--ink-soft); opacity:.8;}
.qty{display:flex; align-items:center; gap:8px; margin-top:6px;}
.qty button{width:24px; height:24px; border-radius:6px; border:1px solid var(--line); font-size:14px; display:flex; align-items:center; justify-content:center;}
.qty b{font-size:13.5px; min-width:16px; text-align:center; font-weight:600;}

.panel-footer{padding:20px 24px; border-top:1px solid var(--line);}
.total{display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; font-size:15px;}
.total strong{font-size:20px;}

.history-row{border:1px solid var(--line); border-radius:12px; padding:14px 16px; margin-bottom:14px;}
.history-top{display:flex; justify-content:space-between; font-size:13px; color:var(--ink-soft); margin-bottom:8px;}
.history-items{font-size:13.5px; color:var(--ink-soft); margin-bottom:8px; line-height:1.5;}
.history-total{display:flex; justify-content:space-between; font-weight:700; font-size:14.5px; border-top:1px solid var(--line); padding-top:8px;}

@media (max-width:860px){
  .hero-content{grid-template-columns:1fr;}
  .phin{height:220px; order:-1;}
  .hero h1{font-size:38px;}
  .about-grid{grid-template-columns:1fr;}
  .header nav{display:none;}
  .contact-box{flex-direction:column; align-items:flex-start;}
}
