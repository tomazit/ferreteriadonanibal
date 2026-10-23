import products from '../data/productos.json';

export async function loadProducts() {
  return products;
}

export const money = value => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(value);
export const slug = value => value.toLocaleLowerCase('es-AR').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
export const icon = (name, className = '') => `<svg class="${className}" aria-hidden="true" focusable="false"><use href="#${name}"></use></svg>`;

export function productCard(product) {
  const stockClass = product.stock === 0 ? 'out' : product.stock <= 3 ? 'low' : 'available';
  const stockLabel = product.stock === 0 ? 'Sin stock' : product.stock <= 3 ? 'Últimas unidades' : 'Disponible';
  const sale = product.etiquetas.includes('oferta');
  return `<article class="product-card" data-product-id="${product.id}">
    <button class="product-visual" data-quick="${product.id}" aria-label="Ver detalles de ${escapeHtml(product.nombre)}"><span class="product-mark">${categoryIcon(product.categoria)}</span>${sale ? '<span class="sale-badge">OFERTA</span>' : ''}<span class="quick-hint">Vista rápida ↗</span></button>
    <div class="product-info"><small class="product-category">${escapeHtml(product.categoria)} · ${escapeHtml(product.marca)}</small><button class="product-name" data-quick="${product.id}">${escapeHtml(product.nombre)}</button><div class="product-stock ${stockClass}"><i></i>${stockLabel}${product.stock > 0 && product.stock <= 3 ? ` · ${product.stock}` : ''}</div><div class="product-card-bottom"><strong>${money(product.precio)}</strong><button class="add-cart-button" data-add="${product.id}" ${product.stock === 0 ? 'disabled' : ''} aria-label="Agregar ${escapeHtml(product.nombre)} al carrito">+</button></div></div></article>`;
}

export function categoryIcon(category) {
  const icons = { 'Herramientas manuales':'hammer','Herramientas eléctricas':'bolt','Plomería':'faucet','Electricidad':'plug','Pinturas':'paint','Jardín':'plant','Fijaciones':'nut','Seguridad':'shield' };
  return icon(icons[category] || 'wrench','icon product-icon');
}

export function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, char => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[char]));
}
