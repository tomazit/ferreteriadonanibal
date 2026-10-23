# Revisión de diseño desktop

Fecha: 23 de octubre de 2026.
Estado: propuesta pendiente de aprobación. Solo se documenta el diseño; la implementación queda en espera.

## Diagnóstico

Revisión visual del inicio completo y del catálogo a 1440 px de ancho en Brave.

- El hero presenta bien la identidad y la entrada al catálogo. Su fotografía tiene más personalidad que las imágenes de producto actuales. Conviene conservarlo como primer foco y reducir los mensajes accesorios que compiten con su llamada principal.
- El inicio tiene unos 4800 px hasta terminar el contacto. Varias secciones reciben el mismo encabezado, separación y peso, aunque cumplen funciones diferentes. La alternancia entre blanco y gris no alcanza para dar ritmo.
- Ofertas y Favoritos son dos grillas de cuatro tarjetas consecutivas, de aproximadamente 581 px cada una. Ocupan más de 1100 px con prácticamente la misma composición. La segunda se percibe como una repetición.
- Dos Favoritos ya aparecen en Ofertas: HE-001, taladro percutor 650 W, y PL-001, canilla monocomando. La canilla también aparece en el proyecto inicial.
- Las tarjetas de producto dedican mucho espacio a círculos con iconos de categoría. Un martillo y una cinta métrica llegan a compartir la misma imagen. Esto impide reconocer el producto y hace que todo el surtido parezca igual.
- Armá tu proyecto es el rasgo comercial más propio de una ferretería que asesora. Actualmente llega después de dos grandes bloques de venta; merece aparecer antes y funcionar como cambio de ritmo.
- Guías repite otra grilla de cuatro tarjetas del mismo tamaño. Las fotos sí aportan contenido, pero el formato vuelve a uniformar la página.
- Profesionales ocupa otro bloque oscuro grande, con una composición parecida a la de Proyectos. Compite con un servicio más general y podría ser una franja mucho más breve.
- Testimonios tiene tres cajas altas, con mucho espacio entre la cita y el nombre. Su peso es excesivo para contenido de apoyo.
- Contacto combina mapa, datos y formulario de forma útil, pero el formulario domina el cierre y la información secundaria vuelve a ser muy pequeña. El footer puede ser más compacto y legible.
- El catálogo necesita densidad y comparación, no el mismo ritmo editorial del inicio. Su introducción ocupa demasiado alto y vuelve a mostrar un buscador además del header. Marca, categoría, stock, filtros y recuentos tienen texto demasiado pequeño.
- El amarillo unificado funciona como acento, pero el texto amarillo grande sobre una superficie clara sigue teniendo poco contraste. Conviene usarlo sobre carbón o como superficie con texto oscuro.

## Jerarquía y secuencia propuestas

1. **Hero + categorías:** conservar fotografía y entrada principal al catálogo. Categorías como navegación compacta de ocho accesos, con iconos presentes y sin tratarlas como productos. Mantener el borde recto, la alineación con el logo y el buscador único del header.
2. **Ofertas:** principal bloque comercial. Una única grilla de cuatro tarjetas completas, con producto reconocible y ahorro explícito. Fondo claro; el precio debe dominar sobre marca y stock.
3. **Armá tu proyecto:** adelantarlo para interrumpir la secuencia de productos. Bloque editorial en dos columnas, con selector y lista de materiales; conservar una sola sección oscura protagonista en el cuerpo del inicio.
4. **Favoritos:** convertirlo en una lista compacta de cuatro filas, con miniatura, nombre, precio y acción. Evitar otra fila de cuatro tarjetas grandes. Permitir una comparación rápida sin competir con Ofertas.
5. **Consejos:** una guía destacada con foto grande y tres enlaces editoriales apilados a su lado. Menos cajas y menos texto introductorio repetido. No añadir carruseles automáticos.
6. **Cierre:** Profesionales como franja horizontal breve con beneficios y una llamada; testimonios como una cita destacada más el resumen de valoración; contacto como destino final claro para visitar o pedir presupuesto. Footer subordinado, con enlaces agrupados y texto legible.

Objetivo de ritmo: entrada editorial → navegación breve → compra → asesoramiento → selección compacta → contenido editorial → contacto. Reducir la altura de los bloques secundarios, manteniendo pausas mayores alrededor de Ofertas y Proyectos.

## Tarjeta de producto propuesta

- Imagen específica del producto en un marco 4:3, fondo neutro uniforme y sin círculo decorativo. Usar `object-fit: contain`, escala óptica consistente y márgenes equivalentes para que una herramienta pequeña no llene todo el cuadro mientras un taladro queda diminuto.
- Priorizar fotos o recortes fieles al producto. Evitar reutilizar una imagen de categoría para productos diferentes. Si faltan recursos, usar una ilustración coherente y explícita como provisional; nunca una foto de otro artículo o modelo.
- Orden: imagen y porcentaje de descuento → marca y nombre → precio anterior tachado → precio actual destacado → disponibilidad y acción de agregar.
- Nombre de 15–16 px con espacio para dos líneas; marca/categoría y stock de al menos 12–13 px. Precio actual de aproximadamente 22–24 px en la tarjeta completa. Mantener líneas base alineadas entre tarjetas.
- Mostrar el precio anterior mediante `del` solo si existe un precio anterior válido mayor al actual. Calcular el porcentaje a partir de ambos precios y mostrarlo junto a la imagen. Quitar el rótulo genérico OFERTA cuando haya un porcentaje concreto.
- Texto secundario con contraste mínimo de 4.5:1 tanto en tema claro como oscuro. El precio anterior puede tener menor peso que el actual, pero debe seguir siendo legible. Estado de stock con texto además de color.
- Acción de agregar visible con etiqueta clara; la vista rápida seguirá siendo accesible desde la imagen y el nombre. Evitar que información necesaria dependa del hover.
- Mantener la misma jerarquía en inicio y catálogo; Favoritos usa una variante horizontal compacta del mismo contenido.

## Datos y repetición de productos

- El catálogo actual contiene precio vigente y etiquetas; no contiene imágenes por producto ni precio anterior. Es necesario incorporar estos datos para completar las tarjetas. No deducir un precio anterior a partir de la etiqueta oferta ni inventar porcentajes comerciales. Si se usan datos de demostración para este portfolio, deben quedar identificados como ficticios en los datos/documentación.
- Campos propuestos: imagen, descripción de imagen y precioAnterior opcional. El descuento se calcula; no se mantiene un porcentaje independiente que pueda quedar desactualizado.
- Preparar imágenes individuales para todos los productos visibles de la selección inicial y asignar cada recurso por ID. Extender el mismo criterio al resto del catálogo.
- Reservar primero los IDs de los materiales de los proyectos. Excluirlos de las selecciones comerciales del inicio; seleccionar después Ofertas y, finalmente, Favoritos excluyendo todos los IDs ya usados.
- Dentro de cada selección, buscar variedad de categorías. Si no alcanza el surtido elegible, mostrar menos productos antes que repetir uno o etiquetar como favorito/oferta un artículo que no lo sea.
- La exclusión se aplica entre bloques del inicio. El catálogo completo seguirá mostrando el surtido disponible, porque es el destino de búsqueda y compra.

## Catálogo y coherencia general

- Compactar título, descripción, recuento y ordenamiento para mostrar productos antes. Usar una sola búsqueda en el header, con alcance de catálogo en esa página.
- Mantener filtros en una columna lateral y grilla de tres productos en desktop. Hacer más legibles opciones, contadores y controles.
- Conservar la identidad de carbón, amarillo y esquinas de 0–2 px. Usar amarillo como superficie con texto oscuro o como acento sobre carbón; asegurar contraste cuando aparezca sobre fondos claros.
- Revisar tema oscuro, carrito y vista rápida con la nueva tarjeta. Mantener compatibilidad con apertura local en Brave y regenerar los bundles al implementar cambios en datos o JavaScript.

## Alcance autorizado en esta etapa

Solo revisión y escritura de este documento. No se modifican HTML, CSS, JavaScript, datos ni recursos visuales hasta recibir aprobación del plan.
