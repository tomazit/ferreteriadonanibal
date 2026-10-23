import { money, escapeHtml, categoryIcon } from './data.js';
import { toast } from './ui.js';

const STORAGE_KEY = 'donanibal-cart-v1';
let products = [];
let cart = [];

let initialized = false;
export function initCart(productList = []) {
  products = productList;
  if (!initialized) {
  try { cart = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch { cart = []; }
  const drawer=document.querySelector('.cart-drawer'); const backdrop=document.querySelector('.drawer-backdrop');
  const open=()=>{ drawer.classList.add('is-open'); drawer.setAttribute('aria-hidden','false'); backdrop.hidden=false; document.body.classList.add('drawer-open'); drawer.querySelector('.drawer-close').focus(); };
  const close=()=>{ drawer.classList.remove('is-open'); drawer.setAttribute('aria-hidden','true'); backdrop.hidden=true; document.body.classList.remove('drawer-open'); };
  document.querySelectorAll('.cart-trigger').forEach(btn=>btn.addEventListener('click',open));
  document.querySelector('.drawer-close')?.addEventListener('click',close); backdrop?.addEventListener('click',close);
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&drawer.classList.contains('is-open')) close();});
  document.addEventListener('click',e=>{
    const add=e.target.closest('[data-add]'); if(add){e.preventDefault();addProduct(add.dataset.add);}
    const step=e.target.closest('[data-step]'); if(step){changeQty(step.dataset.id,Number(step.dataset.step));}
    const remove=e.target.closest('[data-remove]'); if(remove) removeProduct(remove.dataset.remove);
  });
  document.querySelectorAll('input[name="delivery"]').forEach(r=>r.addEventListener('change',()=>{const addr=document.querySelector('.delivery-address');addr.hidden=r.value!=='envio'||!r.checked;if(!addr.hidden)addr.focus();}));
  document.querySelector('.checkout-button')?.addEventListener('click',checkout);
  initialized = true;
  }
  if (products.length) cart = cart.filter(row => products.some(p => p.id === row.id));
  renderCart();
}

export function addProduct(id, quantity=1, announce=true) {
  const p=products.find(item=>item.id===id); if(!p||p.stock===0){toast('Este producto no está disponible por el momento.');return}
  const current=cart.find(row=>row.id===id); const next=(current?.quantity||0)+quantity;
  if(next>p.stock){toast(`Hay ${p.stock} unidades disponibles de ${p.nombre}.`);return}
  if(current) current.quantity=next; else cart.push({id,quantity}); save(); if(announce) toast(`${p.nombre} se agregó al carrito.`);
}
export function addMany(ids){ids.forEach(id=>addProduct(id,1,false));renderCart();toast('Lista agregada al carrito.');}
function changeQty(id,delta){const row=cart.find(item=>item.id===id);const p=products.find(item=>item.id===id);if(!row||!p)return;const next=row.quantity+delta;if(next<=0){removeProduct(id);return}if(next>p.stock){toast(`Hay ${p.stock} unidades disponibles de ${p.nombre}.`);return}row.quantity=next;save();}
function removeProduct(id){cart=cart.filter(row=>row.id!==id);save();}
function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(cart));renderCart();}
function renderCart(){
  const items=document.querySelector('.cart-items');if(!items)return;const count=cart.reduce((sum,row)=>sum+row.quantity,0);document.querySelectorAll('.cart-count').forEach(el=>el.textContent=count);
  const empty=document.querySelector('.cart-empty'),footer=document.querySelector('.cart-footer');empty.hidden=count>0;footer.hidden=count===0;
  items.innerHTML=cart.map(row=>{const p=products.find(item=>item.id===row.id);return p?`<article class="cart-item"><div class="cart-item-icon">${categoryIcon(p.categoria)}</div><div class="cart-item-main"><b>${escapeHtml(p.nombre)}</b><small>${money(p.precio)} c/u</small><div class="quantity-control"><button data-step="-1" data-id="${p.id}" aria-label="Quitar una unidad de ${escapeHtml(p.nombre)}">−</button><span>${row.quantity}</span><button data-step="1" data-id="${p.id}" aria-label="Agregar una unidad de ${escapeHtml(p.nombre)}">+</button></div></div><div class="cart-item-side"><b>${money(p.precio*row.quantity)}</b><button data-remove="${p.id}" class="remove-item">Quitar</button></div></article>`:''}).join('');
  const total=cart.reduce((sum,row)=>{const p=products.find(item=>item.id===row.id);return sum+(p?p.precio*row.quantity:0)},0);document.querySelectorAll('.cart-subtotal').forEach(el=>el.textContent=money(total));
}
function checkout(){
  if(!cart.length){toast('Tu carrito está vacío.');return}const method=document.querySelector('input[name="delivery"]:checked')?.value||'retiro';const address=document.querySelector('.delivery-address').value.trim();if(method==='envio'&&!address){document.querySelector('.delivery-address').focus();toast('Completá la dirección de entrega.');return}
  const lines=cart.map(row=>{const p=products.find(item=>item.id===row.id);return `• ${row.quantity} x ${p.nombre} — ${money(p.precio*row.quantity)}`});const total=cart.reduce((sum,row)=>{const p=products.find(item=>item.id===row.id);return sum+p.precio*row.quantity},0);
  const text=`Hola Don Aníbal, quiero hacer este pedido:\n\n${lines.join('\n')}\n\nSubtotal: ${money(total)}\nEntrega: ${method==='retiro'?'Retiro en sucursal':`Envío a ${address}`}\n\n¿Me confirman disponibilidad y forma de pago?`;window.open(`https://wa.me/5493415550187?text=${encodeURIComponent(text)}`,'_blank','noopener,noreferrer');
}
