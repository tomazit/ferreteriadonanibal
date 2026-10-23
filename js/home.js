import { loadProducts, productCard, escapeHtml, money } from './data.js';
import { initTheme, initMenu, initQuickView, initNewsletter, toast } from './ui.js';
import { initCart, addMany } from './cart.js';

initTheme(); initMenu(); initNewsletter(); initCart();
const projects={
  canilla:{ids:['PL-001','PL-002','PL-004'],labels:['Canilla monocomando para cocina','Flexible mallado 40 cm','Cinta teflón']},
  pintar:{ids:['PI-001','PI-003','PI-006','PI-005'],labels:['Látex interior blanco 20 L','Rodillo antigota 22 cm','Pincel cerda mixta','Fijador sellador']},
  tomacorriente:{ids:['EL-001','EL-002','EL-003'],labels:['Tomacorriente doble 10 A','Cable unipolar 2,5 mm','Disyuntor diferencial 25 A']}
};

(async () => { try {
  const products=await loadProducts(); initCart(products); initQuickView(products);
  const weekly=products.filter(p=>p.etiquetas.includes('oferta')).slice(0,4); const best=products.filter(p=>p.etiquetas.includes('más vendido')).slice(0,4);
  document.querySelector('#weekly-products').innerHTML=weekly.map(productCard).join(''); document.querySelector('#best-products').innerHTML=best.map(productCard).join('');
  const select=document.querySelector('#project-select'), list=document.querySelector('#project-materials');
  const renderProject=()=>{const project=projects[select.value];list.innerHTML=project.ids.map((id,index)=>{const item=products.find(p=>p.id===id);return item?`<div class="material-row"><span class="material-index">0${index+1}</span><span><b>${escapeHtml(item.nombre)}</b><small>${money(item.precio)} · ${item.stock===0?'Consultar disponibilidad':'En stock'}</small></span><span class="material-check">✓</span></div>`:''}).join('');document.querySelector('.project-count').textContent=`${project.ids.length} artículos`;};
  select.addEventListener('change',renderProject);renderProject();document.querySelector('#add-project').addEventListener('click',()=>addMany(projects[select.value].ids));
} catch(error){document.querySelector('#weekly-products').innerHTML='<p class="load-error">No pudimos cargar los productos. Recargá la página en un momento.</p>';console.error(error)} })();

document.querySelectorAll('.header-search,.hero-search').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const q=form.querySelector('input').value.trim();window.location.href=`catalogo.html${q?'?q='+encodeURIComponent(q):''}`}));
document.querySelector('#quote-form')?.addEventListener('submit',e=>{
  e.preventDefault();const form=e.currentTarget;let valid=true;const name=form.elements.nombre,contact=form.elements.contacto,message=form.elements.mensaje;
  const fail=(field,reason)=>{const el=form.querySelector(`[data-error="${field.name}"]`);el.textContent=reason;field.setAttribute('aria-invalid','true');valid=false};
  [name,contact,message].forEach(field=>{field.removeAttribute('aria-invalid');form.querySelector(`[data-error="${field.name}"]`).textContent=''});
  if(name.value.trim().length<2)fail(name,'Escribí tu nombre (al menos 2 caracteres).');
  if(!contact.value.trim()||(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.value.trim())&&!/^[+\d\s()-]{8,}$/.test(contact.value.trim())))fail(contact,'Ingresá un email válido o un teléfono con al menos 8 dígitos.');
  if(message.value.trim().length<10)fail(message,'Contanos un poco más (al menos 10 caracteres).');
  const feedback=form.querySelector('.form-feedback');if(!valid){feedback.textContent='Revisá los campos marcados para poder enviar.';form.querySelector('[aria-invalid="true"]')?.focus();return}
  feedback.textContent='¡Gracias! Recibimos tu consulta. Te respondemos a la brevedad.';feedback.classList.add('success');form.reset();toast('Consulta enviada correctamente.');
});
