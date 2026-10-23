import { loadProducts, productCard, money, slug, escapeHtml } from './data.js';
import { initTheme, initMenu, initQuickView, initNewsletter, toast } from './ui.js';
import { initCart } from './cart.js';

initTheme();initMenu();initNewsletter();initCart();
const state={products:[],query:'',category:'',brands:new Set(),min:'',max:'',stock:false,sale:false,sort:'relevancia',shown:12};
const params=new URLSearchParams(location.search);state.query=params.get('q')||'';state.category=params.get('categoria')||'';state.sort=params.get('orden')||'relevancia';state.sale=params.get('oferta')==='1';
const $=selector=>document.querySelector(selector);
function initFilters(){
  const categories=[...new Set(state.products.map(p=>p.categoria))].sort((a,b)=>a.localeCompare(b,'es'));
  $('#category-filters').innerHTML=categories.map(category=>`<label class="check-row"><input type="radio" name="category" value="${escapeHtml(category)}" ${slug(category)===slug(state.category)?'checked':''}><span>${escapeHtml(category)}</span><small>${state.products.filter(p=>p.categoria===category).length}</small></label>`).join('');
  const brands=[...new Set(state.products.map(p=>p.marca))].sort((a,b)=>a.localeCompare(b,'es'));
  $('#brand-filters').innerHTML=brands.map(brand=>`<label class="check-row"><input type="checkbox" value="${escapeHtml(brand)}"><span>${escapeHtml(brand)}</span></label>`).join('');
  if(state.query){$('#catalog-query').value=state.query;$('#header-query').value=state.query}$('#sort-select').value=state.sort;$('#on-sale').checked=state.sale;
}
function filtered(){
  let result=state.products.filter(p=>{
    const hay=slug(`${p.nombre} ${p.categoria} ${p.marca} ${p.descripcion} ${p.etiquetas.join(' ')}`);
    return (!state.query||hay.includes(slug(state.query)))&&(!state.category||slug(p.categoria)===slug(state.category))&&(!state.brands.size||state.brands.has(p.marca))&&(!state.min||p.precio>=Number(state.min))&&(!state.max||p.precio<=Number(state.max))&&(!state.stock||p.stock>0)&&(!state.sale||p.etiquetas.includes('oferta'));
  });
  if(state.sort==='precio-asc')result.sort((a,b)=>a.precio-b.precio);else if(state.sort==='precio-desc')result.sort((a,b)=>b.precio-a.precio);else if(state.sort==='nombre')result.sort((a,b)=>a.nombre.localeCompare(b.nombre,'es'));else result.sort((a,b)=>Number(b.etiquetas.includes('más vendido'))-Number(a.etiquetas.includes('más vendido')));
  return result;
}
function render(){
  const result=filtered(),visible=result.slice(0,state.shown);$('#result-count').textContent=`${result.length} ${result.length===1?'producto':'productos'} encontrados`;$('#catalog-products').innerHTML=visible.map(productCard).join('');$('#catalog-empty').hidden=result.length>0;$('#catalog-products').hidden=result.length===0;$('#page-info').textContent=result.length?`Mostrando ${visible.length} de ${result.length}`:'';$('#load-more').hidden=visible.length>=result.length||result.length===0;
  const chips=[];if(state.category)chips.push(`<button data-clear="category">${escapeHtml(state.category)} ×</button>`);state.brands.forEach(b=>chips.push(`<button data-clear-brand="${escapeHtml(b)}">${escapeHtml(b)} ×</button>`));if(state.query)chips.push(`<button data-clear="query">“${escapeHtml(state.query)}” ×</button>`);if(state.sale)chips.push('<button data-clear="sale">Ofertas ×</button>');$('#active-filters').innerHTML=chips.join('');
}
function clearAll(){state.query='';state.category='';state.brands.clear();state.min='';state.max='';state.stock=false;state.sale=false;$('#catalog-query').value='';$('#header-query').value='';$('#price-min').value='';$('#price-max').value='';$('#in-stock').checked=false;$('#on-sale').checked=false;document.querySelectorAll('[name="category"]').forEach(el=>el.checked=false);document.querySelectorAll('#brand-filters input').forEach(el=>el.checked=false);state.shown=12;render()}
(async () => { try{
 state.products=await loadProducts();initCart(state.products);initQuickView(state.products);initFilters();render();
 $('#catalog-query').addEventListener('input',e=>{state.query=e.target.value;$('#header-query').value=state.query;state.shown=12;render()});
 $('.catalog-head-search')?.addEventListener('submit',e=>{e.preventDefault();state.query=$('#header-query').value;$('#catalog-query').value=state.query;state.shown=12;render()});
 $('#sort-select').addEventListener('change',e=>{state.sort=e.target.value;render()});
 $('#category-filters').addEventListener('change',e=>{if(e.target.name==='category'){state.category=e.target.value;state.shown=12;render()}});
 $('#brand-filters').addEventListener('change',e=>{if(e.target.matches('input')){e.target.checked?state.brands.add(e.target.value):state.brands.delete(e.target.value);state.shown=12;render()}});
 $('#price-min').addEventListener('input',e=>{state.min=e.target.value;render()});$('#price-max').addEventListener('input',e=>{state.max=e.target.value;render()});$('#in-stock').addEventListener('change',e=>{state.stock=e.target.checked;render()});$('#on-sale').addEventListener('change',e=>{state.sale=e.target.checked;render()});
 $('#active-filters').addEventListener('click',e=>{const clear=e.target.closest('[data-clear]');if(clear){if(clear.dataset.clear==='category'){state.category='';document.querySelectorAll('[name="category"]').forEach(el=>el.checked=false)}if(clear.dataset.clear==='query'){state.query='';$('#catalog-query').value=''}if(clear.dataset.clear==='sale'){state.sale=false;$('#on-sale').checked=false}render()}const brand=e.target.closest('[data-clear-brand]');if(brand){state.brands.delete(brand.dataset.clearBrand);[...$('#brand-filters').querySelectorAll('input')].find(el=>el.value===brand.dataset.clearBrand).checked=false;render()}});
 $('#clear-filters').addEventListener('click',clearAll);$('#reset-empty').addEventListener('click',clearAll);$('#load-more').addEventListener('click',()=>{state.shown+=12;render()});
 $('.filter-close').addEventListener('click',()=>$('.filter-panel').classList.remove('filters-open'));
 const mobileFilter=document.createElement('button');mobileFilter.className='mobile-filter-button button button-outline';mobileFilter.textContent='☷ Filtros';$('.catalog-toolbar').append(mobileFilter);mobileFilter.addEventListener('click',()=>$('.filter-panel').classList.add('filters-open'));
}catch(error){$('#catalog-products').innerHTML='<p class="load-error">No pudimos cargar los productos. Probá recargar la página.</p>';console.error(error)} })();
