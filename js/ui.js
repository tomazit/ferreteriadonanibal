import { money, escapeHtml, categoryIcon, icon } from './data.js';

export function initTheme() {
  const saved = localStorage.getItem('donanibal-theme');
  const preferred = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.dataset.theme = saved || preferred;
  const update = () => document.querySelectorAll('.theme-toggle').forEach(button => {
    const dark = document.documentElement.dataset.theme === 'dark';
    button.innerHTML = icon(dark ? 'sun' : 'moon','icon');
    button.setAttribute('aria-label', dark ? 'Activar tema claro' : 'Activar tema oscuro');
  });
  update();
  document.addEventListener('click', event => {
    if (!event.target.closest('.theme-toggle')) return;
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('donanibal-theme', next);
    update();
  });
}

export function initMenu() {
  const button = document.querySelector('.menu-toggle'); const nav = document.querySelector('.main-nav');
  button?.addEventListener('click', () => { const open = button.getAttribute('aria-expanded') !== 'true'; button.setAttribute('aria-expanded', String(open)); nav.classList.toggle('nav-open', open); });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('nav-open'); button?.setAttribute('aria-expanded', 'false'); }));
}

export function toast(message) {
  const region = document.querySelector('.toast-region'); if (!region) return;
  const item = document.createElement('div'); item.className = 'toast'; item.textContent = message; region.append(item); setTimeout(() => item.remove(), 3000);
}

export function initQuickView(products) {
  const backdrop = document.querySelector('.modal-backdrop'); const modal = document.querySelector('.quick-modal'); const content = document.querySelector('.quick-content');
  if (!backdrop || !modal) return;
  let returnFocus;
  const close = () => { backdrop.hidden = true; document.body.classList.remove('modal-open'); returnFocus?.focus(); };
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-quick]'); if (!button) return;
    const p = products.find(item => item.id === button.dataset.quick); if (!p) return;
    returnFocus = button; const stock = p.stock === 0 ? 'Sin stock' : p.stock <= 3 ? 'Últimas unidades' : 'Disponible';
    content.innerHTML = `<div class="quick-visual">${categoryIcon(p.categoria)}</div><div class="quick-details"><small class="product-category">${escapeHtml(p.categoria)} · ${escapeHtml(p.marca)}</small><h2 id="quick-title">${escapeHtml(p.nombre)}</h2><div class="product-stock ${p.stock===0?'out':p.stock<=3?'low':'available'}"><i></i>${stock}</div><p>${escapeHtml(p.descripcion)}</p><div class="quick-tags">${p.etiquetas.map(tag=>`<span>${escapeHtml(tag)}</span>`).join('')}</div><strong class="quick-price">${money(p.precio)}</strong><button class="button button-yellow full-width" data-add="${p.id}" ${p.stock===0?'disabled':''}>Agregar al carrito <span>→</span></button></div>`;
    backdrop.hidden = false; document.body.classList.add('modal-open'); modal.querySelector('.modal-close').focus();
  });
  backdrop.addEventListener('click', e => { if (e.target === backdrop || e.target.closest('.modal-close')) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !backdrop.hidden) close(); if (e.key === 'Tab' && !backdrop.hidden) { const focusable = [...modal.querySelectorAll('button:not(:disabled),a[href],input,select,textarea')]; const first=focusable[0], last=focusable.at(-1); if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()} else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()} } });
}

export function initNewsletter() {
  document.querySelector('#newsletter-form')?.addEventListener('submit', e => { e.preventDefault(); const input=e.currentTarget.querySelector('input'); const status=document.querySelector('.newsletter-status'); if(!input.checkValidity()){input.reportValidity();return} status.textContent='¡Gracias por sumarte!'; e.currentTarget.reset(); });
}
