(() => {
  // data/productos.json
  var productos_default = [
    {
      id: "HM-001",
      nombre: "Martillo de uña 20 oz",
      categoria: "Herramientas manuales",
      marca: "Bremen",
      precio: 18900,
      stock: 18,
      descripcion: "Cabeza forjada y mango antideslizante para uso diario.",
      etiquetas: [
        "más vendido",
        "acero"
      ]
    },
    {
      id: "HM-002",
      nombre: "Set de destornilladores 6 piezas",
      categoria: "Herramientas manuales",
      marca: "Stanley",
      precio: 24500,
      stock: 9,
      descripcion: "Puntas planas y Phillips con mango ergonómico.",
      etiquetas: [
        "kit",
        "oferta"
      ]
    },
    {
      id: "HM-003",
      nombre: "Pinza universal 8 pulgadas",
      categoria: "Herramientas manuales",
      marca: "Bremen",
      precio: 17200,
      stock: 2,
      descripcion: "Agarre firme y filos templados de alta durabilidad.",
      etiquetas: [
        "últimas unidades"
      ]
    },
    {
      id: "HM-004",
      nombre: "Llave francesa 10 pulgadas",
      categoria: "Herramientas manuales",
      marca: "Crossmaster",
      precio: 28900,
      stock: 7,
      descripcion: "Apertura regulable con escala grabada en milímetros.",
      etiquetas: [
        "profesional"
      ]
    },
    {
      id: "HM-005",
      nombre: "Cinta métrica 5 m reforzada",
      categoria: "Herramientas manuales",
      marca: "Stanley",
      precio: 11200,
      stock: 24,
      descripcion: "Cinta con freno, gancho magnético y carcasa resistente.",
      etiquetas: [
        "más vendido"
      ]
    },
    {
      id: "HM-006",
      nombre: "Nivel de aluminio 60 cm",
      categoria: "Herramientas manuales",
      marca: "Bremen",
      precio: 15800,
      stock: 6,
      descripcion: "Tres burbujas de lectura y cuerpo de aluminio liviano.",
      etiquetas: [
        "obra"
      ]
    },
    {
      id: "HM-007",
      nombre: "Arco de sierra 12 pulgadas",
      categoria: "Herramientas manuales",
      marca: "Stanley",
      precio: 14900,
      stock: 10,
      descripcion: "Marco metálico con tensión regulable para cortes limpios.",
      etiquetas: [
        "corte"
      ]
    },
    {
      id: "HE-001",
      nombre: "Taladro percutor 650 W",
      categoria: "Herramientas eléctricas",
      marca: "Bosch",
      precio: 149900,
      stock: 5,
      descripcion: "Velocidad variable y función percutora para mampostería.",
      etiquetas: [
        "más vendido",
        "oferta"
      ]
    },
    {
      id: "HE-002",
      nombre: "Amoladora angular 115 mm 750 W",
      categoria: "Herramientas eléctricas",
      marca: "DeWalt",
      precio: 132500,
      stock: 3,
      descripcion: "Potencia y control para corte y desbaste en obra.",
      etiquetas: [
        "profesional"
      ]
    },
    {
      id: "HE-003",
      nombre: "Atornillador inalámbrico 12 V",
      categoria: "Herramientas eléctricas",
      marca: "DeWalt",
      precio: 219e3,
      stock: 0,
      descripcion: "Dos baterías, cargador y maletín incluidos.",
      etiquetas: [
        "inalámbrico"
      ]
    },
    {
      id: "HE-004",
      nombre: "Mecha para pared 8 mm",
      categoria: "Herramientas eléctricas",
      marca: "Bosch",
      precio: 6900,
      stock: 31,
      descripcion: "Punta de carburo para perforaciones precisas.",
      etiquetas: [
        "accesorio"
      ]
    },
    {
      id: "HE-005",
      nombre: "Prolongador eléctrico 10 m",
      categoria: "Herramientas eléctricas",
      marca: "Kalop",
      precio: 22400,
      stock: 8,
      descripcion: "Cable reforzado con tomacorriente de uso industrial.",
      etiquetas: [
        "obra"
      ]
    },
    {
      id: "HE-006",
      nombre: "Disco de corte metal 115 mm",
      categoria: "Herramientas eléctricas",
      marca: "Tyrolit",
      precio: 3200,
      stock: 45,
      descripcion: "Corte rápido con bajo espesor y buen rendimiento.",
      etiquetas: [
        "consumible"
      ]
    },
    {
      id: "HE-007",
      nombre: "Lijadora orbital 240 W",
      categoria: "Herramientas eléctricas",
      marca: "Bosch",
      precio: 184900,
      stock: 2,
      descripcion: "Base con velcro y sistema de aspiración de polvo.",
      etiquetas: [
        "últimas unidades"
      ]
    },
    {
      id: "PL-001",
      nombre: "Canilla monocomando para cocina",
      categoria: "Plomería",
      marca: "FV",
      precio: 112900,
      stock: 4,
      descripcion: "Cierre cerámico y acabado cromado de fácil limpieza.",
      etiquetas: [
        "más vendido",
        "oferta"
      ]
    },
    {
      id: "PL-002",
      nombre: "Flexible mallado 40 cm 1/2 pulgada",
      categoria: "Plomería",
      marca: "Hidro 3",
      precio: 6800,
      stock: 26,
      descripcion: "Conexión flexible reforzada para agua fría o caliente.",
      etiquetas: [
        "instalación"
      ]
    },
    {
      id: "PL-003",
      nombre: "Sifón extensible para pileta",
      categoria: "Plomería",
      marca: "Duratop",
      precio: 7400,
      stock: 13,
      descripcion: "Sifón universal adaptable a distintas instalaciones.",
      etiquetas: [
        "instalación"
      ]
    },
    {
      id: "PL-004",
      nombre: "Cinta teflón 12 mm x 10 m",
      categoria: "Plomería",
      marca: "Tacsa",
      precio: 1600,
      stock: 50,
      descripcion: "Sellado confiable de roscas en conexiones de agua.",
      etiquetas: [
        "consumible"
      ]
    },
    {
      id: "PL-005",
      nombre: "Caño PVC 3 m 40 mm",
      categoria: "Plomería",
      marca: "Awaduct",
      precio: 8900,
      stock: 12,
      descripcion: "Tubo para desagüe domiciliario, liviano y resistente.",
      etiquetas: [
        "PVC"
      ]
    },
    {
      id: "PL-006",
      nombre: "Válvula para tanque 1/2 pulgada",
      categoria: "Plomería",
      marca: "FV",
      precio: 15600,
      stock: 1,
      descripcion: "Repuesto de cierre preciso para tanque de agua.",
      etiquetas: [
        "repuesto"
      ]
    },
    {
      id: "PL-007",
      nombre: "Rejilla acero inoxidable 10 x 10 cm",
      categoria: "Plomería",
      marca: "Hidro 3",
      precio: 4100,
      stock: 23,
      descripcion: "Terminación durable para desagües de piso.",
      etiquetas: [
        "baño"
      ]
    },
    {
      id: "EL-001",
      nombre: "Tomacorriente doble 10 A",
      categoria: "Electricidad",
      marca: "Kalop",
      precio: 5900,
      stock: 22,
      descripcion: "Módulo blanco con borne seguro y diseño moderno.",
      etiquetas: [
        "más vendido"
      ]
    },
    {
      id: "EL-002",
      nombre: "Cable unipolar 2,5 mm rojo 10 m",
      categoria: "Electricidad",
      marca: "Prysmian",
      precio: 12900,
      stock: 17,
      descripcion: "Cable normalizado para instalaciones domiciliarias.",
      etiquetas: [
        "instalación"
      ]
    },
    {
      id: "EL-003",
      nombre: "Disyuntor diferencial 25 A",
      categoria: "Electricidad",
      marca: "Sica",
      precio: 38500,
      stock: 6,
      descripcion: "Protección diferencial para tableros eléctricos.",
      etiquetas: [
        "seguridad"
      ]
    },
    {
      id: "EL-004",
      nombre: "Térmica bipolar 20 A",
      categoria: "Electricidad",
      marca: "Schneider",
      precio: 21900,
      stock: 0,
      descripcion: "Interruptor termomagnético de montaje en riel DIN.",
      etiquetas: [
        "protección"
      ]
    },
    {
      id: "EL-005",
      nombre: "Portalámpara cerámico E27",
      categoria: "Electricidad",
      marca: "Cambre",
      precio: 2800,
      stock: 19,
      descripcion: "Apto para lámparas de uso doméstico y alta temperatura.",
      etiquetas: [
        "iluminación"
      ]
    },
    {
      id: "EL-006",
      nombre: "Reflector LED 50 W exterior",
      categoria: "Electricidad",
      marca: "Macroled",
      precio: 27500,
      stock: 10,
      descripcion: "Luz fría de alto rendimiento con protección IP65.",
      etiquetas: [
        "exterior"
      ]
    },
    {
      id: "EL-007",
      nombre: "Lámpara LED A60 9 W luz cálida",
      categoria: "Electricidad",
      marca: "Macroled",
      precio: 2900,
      stock: 34,
      descripcion: "Bajo consumo y luz confortable para el hogar.",
      etiquetas: [
        "iluminación"
      ]
    },
    {
      id: "PI-001",
      nombre: "Látex interior blanco 20 L",
      categoria: "Pinturas",
      marca: "Alba",
      precio: 89400,
      stock: 7,
      descripcion: "Pintura lavable de gran cobertura para interiores.",
      etiquetas: [
        "más vendido",
        "oferta"
      ]
    },
    {
      id: "PI-002",
      nombre: "Esmalte sintético brillante 1 L",
      categoria: "Pinturas",
      marca: "Sherwin Williams",
      precio: 24700,
      stock: 11,
      descripcion: "Protección duradera para metal y madera.",
      etiquetas: [
        "interior/exterior"
      ]
    },
    {
      id: "PI-003",
      nombre: "Rodillo antigota 22 cm",
      categoria: "Pinturas",
      marca: "Doble A",
      precio: 8900,
      stock: 15,
      descripcion: "Terminación pareja en paredes con mínimo salpicado.",
      etiquetas: [
        "accesorio"
      ]
    },
    {
      id: "PI-004",
      nombre: "Enduido interior 4 L",
      categoria: "Pinturas",
      marca: "Tersuave",
      precio: 16800,
      stock: 1,
      descripcion: "Rellena imperfecciones y deja superficies lisas.",
      etiquetas: [
        "últimas unidades"
      ]
    },
    {
      id: "PI-005",
      nombre: "Fijador sellador concentrado 1 L",
      categoria: "Pinturas",
      marca: "Alba",
      precio: 11800,
      stock: 9,
      descripcion: "Mejora la adherencia de pintura sobre paredes nuevas.",
      etiquetas: [
        "preparación"
      ]
    },
    {
      id: "PI-006",
      nombre: "Pincel cerda mixta 2 pulgadas",
      categoria: "Pinturas",
      marca: "Doble A",
      precio: 6400,
      stock: 21,
      descripcion: "Pincel versátil para sintéticos y pinturas al agua.",
      etiquetas: [
        "accesorio"
      ]
    },
    {
      id: "PI-007",
      nombre: "Lija al agua grano 120",
      categoria: "Pinturas",
      marca: "Norton",
      precio: 950,
      stock: 40,
      descripcion: "Hoja abrasiva para preparación y terminación fina.",
      etiquetas: [
        "consumible"
      ]
    },
    {
      id: "JA-001",
      nombre: "Manguera reforzada 1/2 pulgada 15 m",
      categoria: "Jardín",
      marca: "Kushiro",
      precio: 31900,
      stock: 8,
      descripcion: "Flexible, resistente a la intemperie y fácil de enrollar.",
      etiquetas: [
        "más vendido"
      ]
    },
    {
      id: "JA-002",
      nombre: "Pala de punta con cabo",
      categoria: "Jardín",
      marca: "Tramontina",
      precio: 22900,
      stock: 5,
      descripcion: "Hoja de acero robusta para tareas de jardín y huerta.",
      etiquetas: [
        "jardinería"
      ]
    },
    {
      id: "JA-003",
      nombre: "Tijera de podar 8 pulgadas",
      categoria: "Jardín",
      marca: "Bahco",
      precio: 28400,
      stock: 2,
      descripcion: "Corte limpio en ramas con empuñadura cómoda.",
      etiquetas: [
        "poda"
      ]
    },
    {
      id: "JA-004",
      nombre: "Aspersor circular con base",
      categoria: "Jardín",
      marca: "Kushiro",
      precio: 7900,
      stock: 16,
      descripcion: "Riego uniforme para patios y jardines medianos.",
      etiquetas: [
        "riego"
      ]
    },
    {
      id: "JA-005",
      nombre: "Pistola de riego regulable",
      categoria: "Jardín",
      marca: "Kushiro",
      precio: 8900,
      stock: 0,
      descripcion: "Múltiples patrones de riego con conexión rápida.",
      etiquetas: [
        "riego"
      ]
    },
    {
      id: "FI-001",
      nombre: "Tornillo para madera 6 x 2 pulgadas (100 u)",
      categoria: "Fijaciones",
      marca: "Fixser",
      precio: 9800,
      stock: 20,
      descripcion: "Rosca profunda para uniones firmes en madera.",
      etiquetas: [
        "más vendido"
      ]
    },
    {
      id: "FI-002",
      nombre: "Tarugo nylon 8 mm (50 unidades)",
      categoria: "Fijaciones",
      marca: "Fischer",
      precio: 5200,
      stock: 28,
      descripcion: "Fijación confiable en hormigón y mampostería.",
      etiquetas: [
        "kit"
      ]
    },
    {
      id: "FI-003",
      nombre: "Clavo punta París 2 pulgadas 1 kg",
      categoria: "Fijaciones",
      marca: "Acindar",
      precio: 7900,
      stock: 14,
      descripcion: "Clavo de acero para carpintería y construcción.",
      etiquetas: [
        "obra"
      ]
    },
    {
      id: "FI-004",
      nombre: "Tirafondo hexagonal 1/4 x 3 pulgadas",
      categoria: "Fijaciones",
      marca: "Fixser",
      precio: 850,
      stock: 0,
      descripcion: "Unión de alta resistencia para madera y soportes.",
      etiquetas: [
        "fijación"
      ]
    },
    {
      id: "FI-005",
      nombre: "Candado de bronce 40 mm",
      categoria: "Fijaciones",
      marca: "Trabex",
      precio: 14800,
      stock: 9,
      descripcion: "Cuerpo macizo con dos llaves de seguridad.",
      etiquetas: [
        "seguridad"
      ]
    },
    {
      id: "SE-001",
      nombre: "Guantes moteados de algodón",
      categoria: "Seguridad",
      marca: "Libus",
      precio: 3900,
      stock: 32,
      descripcion: "Protección liviana con puntos antideslizantes.",
      etiquetas: [
        "más vendido"
      ]
    },
    {
      id: "SE-002",
      nombre: "Anteojos de seguridad transparentes",
      categoria: "Seguridad",
      marca: "Libus",
      precio: 6800,
      stock: 18,
      descripcion: "Lentes envolventes con protección contra impactos.",
      etiquetas: [
        "protección"
      ]
    },
    {
      id: "SE-003",
      nombre: "Casco de seguridad amarillo",
      categoria: "Seguridad",
      marca: "Libus",
      precio: 17900,
      stock: 6,
      descripcion: "Casco regulable para protección en obra.",
      etiquetas: [
        "obra"
      ]
    },
    {
      id: "SE-004",
      nombre: "Protector auditivo copa",
      categoria: "Seguridad",
      marca: "3M",
      precio: 22500,
      stock: 3,
      descripcion: "Atenúa el ruido en trabajos con maquinaria.",
      etiquetas: [
        "protección"
      ]
    },
    {
      id: "SE-005",
      nombre: "Chaleco reflectivo naranja",
      categoria: "Seguridad",
      marca: "Libus",
      precio: 12900,
      stock: 12,
      descripcion: "Alta visibilidad para trabajos en exteriores.",
      etiquetas: [
        "visibilidad"
      ]
    },
    {
      id: "HM-008",
      nombre: "Alicate de punta larga 6 pulgadas",
      categoria: "Herramientas manuales",
      marca: "Bremen",
      precio: 13900,
      stock: 8,
      descripcion: "Puntas finas para manipular cables y piezas pequeñas.",
      etiquetas: [
        "electricidad"
      ]
    },
    {
      id: "HM-009",
      nombre: "Llave tubo crique con tubos 10 piezas",
      categoria: "Herramientas manuales",
      marca: "Crossmaster",
      precio: 35900,
      stock: 4,
      descripcion: "Set compacto de tubos métricos para mantenimiento.",
      etiquetas: [
        "kit"
      ]
    },
    {
      id: "HM-010",
      nombre: "Cutter profesional con traba metálica",
      categoria: "Herramientas manuales",
      marca: "Stanley",
      precio: 7900,
      stock: 16,
      descripcion: "Hoja segmentada de 18 mm y cuerpo reforzado.",
      etiquetas: [
        "corte"
      ]
    },
    {
      id: "HM-011",
      nombre: "Serrucho carpintero 20 pulgadas",
      categoria: "Herramientas manuales",
      marca: "Bahco",
      precio: 24900,
      stock: 5,
      descripcion: "Dentado universal para cortes rápidos en madera.",
      etiquetas: [
        "carpintería"
      ]
    },
    {
      id: "HM-012",
      nombre: "Prensa sargento rápida 300 mm",
      categoria: "Herramientas manuales",
      marca: "Bremen",
      precio: 18200,
      stock: 7,
      descripcion: "Sujeción de una mano para armado y encolado.",
      etiquetas: [
        "taller"
      ]
    },
    {
      id: "HM-013",
      nombre: "Juego de llaves Allen métricas 9 piezas",
      categoria: "Herramientas manuales",
      marca: "Crossmaster",
      precio: 11900,
      stock: 10,
      descripcion: "Medidas de 1,5 a 10 mm con soporte organizador.",
      etiquetas: [
        "kit"
      ]
    },
    {
      id: "HE-008",
      nombre: "Taladro atornillador 18 V con batería",
      categoria: "Herramientas eléctricas",
      marca: "DeWalt",
      precio: 329e3,
      stock: 3,
      descripcion: "Mandril rápido, dos velocidades y batería de litio.",
      etiquetas: [
        "profesional",
        "inalámbrico"
      ]
    },
    {
      id: "HE-009",
      nombre: "Sierra circular 7 1/4 pulgadas 1400 W",
      categoria: "Herramientas eléctricas",
      marca: "Bosch",
      precio: 245e3,
      stock: 2,
      descripcion: "Corte regulable en profundidad para trabajos de madera.",
      etiquetas: [
        "profesional"
      ]
    },
    {
      id: "HE-010",
      nombre: "Pistola de calor 2000 W",
      categoria: "Herramientas eléctricas",
      marca: "Gamma",
      precio: 68900,
      stock: 6,
      descripcion: "Dos niveles de temperatura para múltiples tareas.",
      etiquetas: [
        "taller"
      ]
    },
    {
      id: "HE-011",
      nombre: "Mecha para madera 10 mm",
      categoria: "Herramientas eléctricas",
      marca: "Bosch",
      precio: 4200,
      stock: 22,
      descripcion: "Punta centradora para perforaciones limpias.",
      etiquetas: [
        "accesorio"
      ]
    },
    {
      id: "HE-012",
      nombre: "Disco diamantado turbo 115 mm",
      categoria: "Herramientas eléctricas",
      marca: "Tyrolit",
      precio: 11900,
      stock: 11,
      descripcion: "Para corte de cerámica, piedra y materiales de obra.",
      etiquetas: [
        "consumible"
      ]
    },
    {
      id: "HE-013",
      nombre: "Mezclador eléctrico 1200 W",
      categoria: "Herramientas eléctricas",
      marca: "Gamma",
      precio: 198e3,
      stock: 1,
      descripcion: "Velocidad variable para preparar pintura y adhesivos.",
      etiquetas: [
        "últimas unidades"
      ]
    },
    {
      id: "PL-008",
      nombre: "Juego de grifería para baño cromo",
      categoria: "Plomería",
      marca: "FV",
      precio: 159900,
      stock: 3,
      descripcion: "Conjunto de lavatorio, ducha y accesorios cromados.",
      etiquetas: [
        "baño"
      ]
    },
    {
      id: "PL-009",
      nombre: "Flexible mallado 60 cm 1/2 pulgada",
      categoria: "Plomería",
      marca: "Hidro 3",
      precio: 7900,
      stock: 19,
      descripcion: "Malla de acero inoxidable para conexión sanitaria.",
      etiquetas: [
        "instalación"
      ]
    },
    {
      id: "PL-010",
      nombre: "Codo PVC 90 grados 40 mm",
      categoria: "Plomería",
      marca: "Awaduct",
      precio: 1350,
      stock: 32,
      descripcion: "Accesorio para desagüe con encastre preciso.",
      etiquetas: [
        "PVC"
      ]
    },
    {
      id: "PL-011",
      nombre: "Llave de paso esférica 1/2 pulgada",
      categoria: "Plomería",
      marca: "FV",
      precio: 11900,
      stock: 12,
      descripcion: "Corte de agua con cuerpo metálico y manija compacta.",
      etiquetas: [
        "repuesto"
      ]
    },
    {
      id: "PL-012",
      nombre: "Cinta sellaroscas alta densidad",
      categoria: "Plomería",
      marca: "Tacsa",
      precio: 2900,
      stock: 24,
      descripcion: "Cinta PTFE para sellar uniones roscadas de agua y gas.",
      etiquetas: [
        "consumible"
      ]
    },
    {
      id: "PL-013",
      nombre: "Flotante para tanque reforzado",
      categoria: "Plomería",
      marca: "Hidro 3",
      precio: 9800,
      stock: 5,
      descripcion: "Válvula de llenado regulable para tanque de reserva.",
      etiquetas: [
        "repuesto"
      ]
    },
    {
      id: "EL-008",
      nombre: "Tomacorriente exterior con tapa IP55",
      categoria: "Electricidad",
      marca: "Cambre",
      precio: 13900,
      stock: 8,
      descripcion: "Protección contra polvo y salpicaduras para exterior.",
      etiquetas: [
        "exterior"
      ]
    },
    {
      id: "EL-009",
      nombre: "Cable unipolar 1,5 mm azul 10 m",
      categoria: "Electricidad",
      marca: "Prysmian",
      precio: 8900,
      stock: 16,
      descripcion: "Conductor normalizado para circuitos de iluminación.",
      etiquetas: [
        "instalación"
      ]
    },
    {
      id: "EL-010",
      nombre: "Caja rectangular para embutir",
      categoria: "Electricidad",
      marca: "Kalop",
      precio: 1200,
      stock: 40,
      descripcion: "Caja plástica autoextinguible para instalación embutida.",
      etiquetas: [
        "instalación"
      ]
    },
    {
      id: "EL-011",
      nombre: "Térmica unipolar 16 A",
      categoria: "Electricidad",
      marca: "Sica",
      precio: 10900,
      stock: 9,
      descripcion: "Protección termomagnética para circuitos domiciliarios.",
      etiquetas: [
        "protección"
      ]
    },
    {
      id: "EL-012",
      nombre: "Tira LED cálida 5 m con fuente",
      categoria: "Electricidad",
      marca: "Macroled",
      precio: 28900,
      stock: 7,
      descripcion: "Iluminación decorativa autoadhesiva para interiores.",
      etiquetas: [
        "iluminación"
      ]
    },
    {
      id: "EL-013",
      nombre: "Llave de luz doble blanca",
      categoria: "Electricidad",
      marca: "Cambre",
      precio: 4800,
      stock: 18,
      descripcion: "Módulo de dos puntos para línea estándar domiciliaria.",
      etiquetas: [
        "instalación"
      ]
    },
    {
      id: "PI-008",
      nombre: "Látex exterior impermeable 20 L",
      categoria: "Pinturas",
      marca: "Tersuave",
      precio: 119e3,
      stock: 4,
      descripcion: "Protección frente a lluvia y sol con acabado mate.",
      etiquetas: [
        "exterior"
      ]
    },
    {
      id: "PI-009",
      nombre: "Membrana líquida fibrada 20 kg",
      categoria: "Pinturas",
      marca: "Plavicon",
      precio: 98500,
      stock: 3,
      descripcion: "Impermeabilizante elastomérico para techos y terrazas.",
      etiquetas: [
        "impermeabilización"
      ]
    },
    {
      id: "PI-010",
      nombre: "Aguarrás mineral 1 L",
      categoria: "Pinturas",
      marca: "Alba",
      precio: 7900,
      stock: 13,
      descripcion: "Diluyente para esmaltes sintéticos y limpieza de herramientas.",
      etiquetas: [
        "diluyente"
      ]
    },
    {
      id: "PI-011",
      nombre: "Bandeja para pintura mediana",
      categoria: "Pinturas",
      marca: "Doble A",
      precio: 4900,
      stock: 12,
      descripcion: "Bandeja resistente con zona de escurrido para rodillos.",
      etiquetas: [
        "accesorio"
      ]
    },
    {
      id: "PI-012",
      nombre: "Enduido exterior 4 L",
      categoria: "Pinturas",
      marca: "Tersuave",
      precio: 21900,
      stock: 5,
      descripcion: "Masilla para reparar pequeñas grietas en muros exteriores.",
      etiquetas: [
        "exterior"
      ]
    },
    {
      id: "PI-013",
      nombre: "Convertidor de óxido negro 1 L",
      categoria: "Pinturas",
      marca: "Alba",
      precio: 19900,
      stock: 8,
      descripcion: "Protege superficies ferrosas y prepara para pintar.",
      etiquetas: [
        "metal"
      ]
    },
    {
      id: "JA-006",
      nombre: "Manguera reforzada 1/2 pulgada 25 m",
      categoria: "Jardín",
      marca: "Kushiro",
      precio: 48900,
      stock: 4,
      descripcion: "Manguera flexible de largo alcance para jardín y patio.",
      etiquetas: [
        "riego"
      ]
    },
    {
      id: "JA-007",
      nombre: "Pala ancha con cabo de madera",
      categoria: "Jardín",
      marca: "Tramontina",
      precio: 24500,
      stock: 3,
      descripcion: "Hoja de acero para mover tierra, arena y materiales.",
      etiquetas: [
        "jardinería"
      ]
    },
    {
      id: "JA-008",
      nombre: "Rastrillo metálico 14 dientes",
      categoria: "Jardín",
      marca: "Tramontina",
      precio: 17800,
      stock: 6,
      descripcion: "Para juntar hojas y nivelar canteros con facilidad.",
      etiquetas: [
        "jardinería"
      ]
    },
    {
      id: "JA-009",
      nombre: "Conector rápido para manguera 1/2 pulgada",
      categoria: "Jardín",
      marca: "Kushiro",
      precio: 3800,
      stock: 25,
      descripcion: "Acople universal para conectar accesorios de riego.",
      etiquetas: [
        "riego"
      ]
    },
    {
      id: "JA-010",
      nombre: "Bordeadora eléctrica 350 W",
      categoria: "Jardín",
      marca: "Gamma",
      precio: 74900,
      stock: 2,
      descripcion: "Liviana para mantener bordes y rincones del jardín.",
      etiquetas: [
        "últimas unidades"
      ]
    },
    {
      id: "JA-011",
      nombre: "Semillas de césped mezcla reparadora 1 kg",
      categoria: "Jardín",
      marca: "Germinal",
      precio: 15500,
      stock: 9,
      descripcion: "Mezcla para renovar sectores pequeños de césped.",
      etiquetas: [
        "jardinería"
      ]
    },
    {
      id: "FI-006",
      nombre: "Tornillo autoperforante cabeza hexagonal (50 u)",
      categoria: "Fijaciones",
      marca: "Fixser",
      precio: 11900,
      stock: 13,
      descripcion: "Fijación rápida de chapa y perfiles metálicos.",
      etiquetas: [
        "obra"
      ]
    },
    {
      id: "FI-007",
      nombre: "Tarugo Fischer DuoPower 6 mm (50 u)",
      categoria: "Fijaciones",
      marca: "Fischer",
      precio: 7900,
      stock: 15,
      descripcion: "Anclaje versátil para distintos materiales de construcción.",
      etiquetas: [
        "kit"
      ]
    },
    {
      id: "FI-008",
      nombre: "Bisagra libro zincada 3 pulgadas (2 u)",
      categoria: "Fijaciones",
      marca: "Trabex",
      precio: 4800,
      stock: 10,
      descripcion: "Bisagra de acero para puertas, muebles y reparaciones.",
      etiquetas: [
        "herrajes"
      ]
    },
    {
      id: "FI-009",
      nombre: "Pitón cerrado zincado 8 mm",
      categoria: "Fijaciones",
      marca: "Fixser",
      precio: 1150,
      stock: 18,
      descripcion: "Punto de anclaje para colgar elementos en pared o madera.",
      etiquetas: [
        "fijación"
      ]
    },
    {
      id: "FI-010",
      nombre: "Remache pop aluminio 4 mm (100 u)",
      categoria: "Fijaciones",
      marca: "Fixser",
      precio: 6900,
      stock: 11,
      descripcion: "Unión permanente para chapas y perfiles livianos.",
      etiquetas: [
        "kit"
      ]
    },
    {
      id: "FI-011",
      nombre: "Cadena galvanizada por metro 4 mm",
      categoria: "Fijaciones",
      marca: "Acindar",
      precio: 5200,
      stock: 14,
      descripcion: "Cadena resistente para sujeción y usos generales.",
      etiquetas: [
        "obra"
      ]
    },
    {
      id: "SE-006",
      nombre: "Guantes de descarne reforzados",
      categoria: "Seguridad",
      marca: "Libus",
      precio: 7900,
      stock: 14,
      descripcion: "Protección de manos para tareas de construcción y carga.",
      etiquetas: [
        "protección"
      ]
    },
    {
      id: "SE-007",
      nombre: "Casco de seguridad blanco con arnés",
      categoria: "Seguridad",
      marca: "Libus",
      precio: 19900,
      stock: 5,
      descripcion: "Protección craneana con arnés interior regulable.",
      etiquetas: [
        "obra"
      ]
    },
    {
      id: "SE-008",
      nombre: "Máscara para soldar fotosensible",
      categoria: "Seguridad",
      marca: "Bremen",
      precio: 69900,
      stock: 2,
      descripcion: "Visor automático con regulación de sensibilidad.",
      etiquetas: [
        "soldadura"
      ]
    },
    {
      id: "SE-009",
      nombre: "Botín de seguridad punta de acero talle 42",
      categoria: "Seguridad",
      marca: "Funcional",
      precio: 58900,
      stock: 4,
      descripcion: "Calzado de trabajo con suela antideslizante y puntera.",
      etiquetas: [
        "calzado"
      ]
    },
    {
      id: "SE-010",
      nombre: "Faja lumbar elástica talle universal",
      categoria: "Seguridad",
      marca: "Libus",
      precio: 18900,
      stock: 8,
      descripcion: "Soporte lumbar para tareas de esfuerzo y movimiento.",
      etiquetas: [
        "protección"
      ]
    },
    {
      id: "SE-011",
      nombre: "Cinta de peligro amarilla y negra 200 m",
      categoria: "Seguridad",
      marca: "Libus",
      precio: 12900,
      stock: 7,
      descripcion: "Señalización visual para delimitar zonas de trabajo.",
      etiquetas: [
        "señalización"
      ]
    }
  ];

  // js/data.js
  async function loadProducts() {
    return productos_default;
  }
  var money = (value) => new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(value);
  var slug = (value) => value.toLocaleLowerCase("es-AR").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  var icon = (name, className = "") => `<svg class="${className}" aria-hidden="true" focusable="false"><use href="#${name}"></use></svg>`;
  function productCard(product) {
    const stockClass = product.stock === 0 ? "out" : product.stock <= 3 ? "low" : "available";
    const stockLabel = product.stock === 0 ? "Sin stock" : product.stock <= 3 ? "Últimas unidades" : "Disponible";
    const sale = product.etiquetas.includes("oferta");
    return `<article class="product-card" data-product-id="${product.id}">
    <button class="product-visual" data-quick="${product.id}" aria-label="Ver detalles de ${escapeHtml(product.nombre)}"><span class="product-mark">${categoryIcon(product.categoria)}</span>${sale ? '<span class="sale-badge">OFERTA</span>' : ""}<span class="quick-hint">Vista rápida ↗</span></button>
    <div class="product-info"><small class="product-category">${escapeHtml(product.categoria)} · ${escapeHtml(product.marca)}</small><button class="product-name" data-quick="${product.id}">${escapeHtml(product.nombre)}</button><div class="product-stock ${stockClass}"><i></i>${stockLabel}${product.stock > 0 && product.stock <= 3 ? ` · ${product.stock}` : ""}</div><div class="product-card-bottom"><strong>${money(product.precio)}</strong><button class="add-cart-button" data-add="${product.id}" ${product.stock === 0 ? "disabled" : ""} aria-label="Agregar ${escapeHtml(product.nombre)} al carrito">+</button></div></div></article>`;
  }
  function categoryIcon(category) {
    const icons = { "Herramientas manuales": "hammer", "Herramientas eléctricas": "bolt", "Plomería": "faucet", "Electricidad": "plug", "Pinturas": "paint", "Jardín": "plant", "Fijaciones": "nut", "Seguridad": "shield" };
    return icon(icons[category] || "wrench", "icon product-icon");
  }
  function escapeHtml(value = "") {
    return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  }

  // js/ui.js
  function initTheme() {
    const saved = localStorage.getItem("donanibal-theme");
    const preferred = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    document.documentElement.dataset.theme = saved || preferred;
    const update = () => document.querySelectorAll(".theme-toggle").forEach((button) => {
      const dark = document.documentElement.dataset.theme === "dark";
      button.innerHTML = icon(dark ? "sun" : "moon", "icon");
      button.setAttribute("aria-label", dark ? "Activar tema claro" : "Activar tema oscuro");
    });
    update();
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".theme-toggle")) return;
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      localStorage.setItem("donanibal-theme", next);
      update();
    });
  }
  function initMenu() {
    const button = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".main-nav");
    button == null ? void 0 : button.addEventListener("click", () => {
      const open = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("nav-open", open);
    });
    nav == null ? void 0 : nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
      nav.classList.remove("nav-open");
      button == null ? void 0 : button.setAttribute("aria-expanded", "false");
    }));
  }
  function toast(message) {
    const region = document.querySelector(".toast-region");
    if (!region) return;
    const item = document.createElement("div");
    item.className = "toast";
    item.textContent = message;
    region.append(item);
    setTimeout(() => item.remove(), 3e3);
  }
  function initQuickView(products2) {
    const backdrop = document.querySelector(".modal-backdrop");
    const modal = document.querySelector(".quick-modal");
    const content = document.querySelector(".quick-content");
    if (!backdrop || !modal) return;
    let returnFocus;
    const close = () => {
      backdrop.hidden = true;
      document.body.classList.remove("modal-open");
      returnFocus == null ? void 0 : returnFocus.focus();
    };
    document.addEventListener("click", (event) => {
      const button = event.target.closest("[data-quick]");
      if (!button) return;
      const p = products2.find((item) => item.id === button.dataset.quick);
      if (!p) return;
      returnFocus = button;
      const stock = p.stock === 0 ? "Sin stock" : p.stock <= 3 ? "Últimas unidades" : "Disponible";
      content.innerHTML = `<div class="quick-visual">${categoryIcon(p.categoria)}</div><div class="quick-details"><small class="product-category">${escapeHtml(p.categoria)} · ${escapeHtml(p.marca)}</small><h2 id="quick-title">${escapeHtml(p.nombre)}</h2><div class="product-stock ${p.stock === 0 ? "out" : p.stock <= 3 ? "low" : "available"}"><i></i>${stock}</div><p>${escapeHtml(p.descripcion)}</p><div class="quick-tags">${p.etiquetas.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div><strong class="quick-price">${money(p.precio)}</strong><button class="button button-yellow full-width" data-add="${p.id}" ${p.stock === 0 ? "disabled" : ""}>Agregar al carrito <span>→</span></button></div>`;
      backdrop.hidden = false;
      document.body.classList.add("modal-open");
      modal.querySelector(".modal-close").focus();
    });
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop || e.target.closest(".modal-close")) close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !backdrop.hidden) close();
      if (e.key === "Tab" && !backdrop.hidden) {
        const focusable = [...modal.querySelectorAll("button:not(:disabled),a[href],input,select,textarea")];
        const first = focusable[0], last = focusable.at(-1);
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }
  function initNewsletter() {
    var _a;
    (_a = document.querySelector("#newsletter-form")) == null ? void 0 : _a.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = e.currentTarget.querySelector("input");
      const status = document.querySelector(".newsletter-status");
      if (!input.checkValidity()) {
        input.reportValidity();
        return;
      }
      status.textContent = "¡Gracias por sumarte!";
      e.currentTarget.reset();
    });
  }

  // js/cart.js
  var STORAGE_KEY = "donanibal-cart-v1";
  var products = [];
  var cart = [];
  var initialized = false;
  function initCart(productList = []) {
    var _a, _b;
    products = productList;
    if (!initialized) {
      try {
        cart = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      } catch {
        cart = [];
      }
      const drawer = document.querySelector(".cart-drawer");
      const backdrop = document.querySelector(".drawer-backdrop");
      const open = () => {
        drawer.classList.add("is-open");
        drawer.setAttribute("aria-hidden", "false");
        backdrop.hidden = false;
        document.body.classList.add("drawer-open");
        drawer.querySelector(".drawer-close").focus();
      };
      const close = () => {
        drawer.classList.remove("is-open");
        drawer.setAttribute("aria-hidden", "true");
        backdrop.hidden = true;
        document.body.classList.remove("drawer-open");
      };
      document.querySelectorAll(".cart-trigger").forEach((btn) => btn.addEventListener("click", open));
      (_a = document.querySelector(".drawer-close")) == null ? void 0 : _a.addEventListener("click", close);
      backdrop == null ? void 0 : backdrop.addEventListener("click", close);
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && drawer.classList.contains("is-open")) close();
      });
      document.addEventListener("click", (e) => {
        const add = e.target.closest("[data-add]");
        if (add) {
          e.preventDefault();
          addProduct(add.dataset.add);
        }
        const step = e.target.closest("[data-step]");
        if (step) {
          changeQty(step.dataset.id, Number(step.dataset.step));
        }
        const remove = e.target.closest("[data-remove]");
        if (remove) removeProduct(remove.dataset.remove);
      });
      document.querySelectorAll('input[name="delivery"]').forEach((r) => r.addEventListener("change", () => {
        const addr = document.querySelector(".delivery-address");
        addr.hidden = r.value !== "envio" || !r.checked;
        if (!addr.hidden) addr.focus();
      }));
      (_b = document.querySelector(".checkout-button")) == null ? void 0 : _b.addEventListener("click", checkout);
      initialized = true;
    }
    if (products.length) cart = cart.filter((row) => products.some((p) => p.id === row.id));
    renderCart();
  }
  function addProduct(id, quantity = 1, announce = true) {
    const p = products.find((item) => item.id === id);
    if (!p || p.stock === 0) {
      toast("Este producto no está disponible por el momento.");
      return;
    }
    const current = cart.find((row) => row.id === id);
    const next = ((current == null ? void 0 : current.quantity) || 0) + quantity;
    if (next > p.stock) {
      toast(`Hay ${p.stock} unidades disponibles de ${p.nombre}.`);
      return;
    }
    if (current) current.quantity = next;
    else cart.push({ id, quantity });
    save();
    if (announce) toast(`${p.nombre} se agregó al carrito.`);
  }
  function changeQty(id, delta) {
    const row = cart.find((item) => item.id === id);
    const p = products.find((item) => item.id === id);
    if (!row || !p) return;
    const next = row.quantity + delta;
    if (next <= 0) {
      removeProduct(id);
      return;
    }
    if (next > p.stock) {
      toast(`Hay ${p.stock} unidades disponibles de ${p.nombre}.`);
      return;
    }
    row.quantity = next;
    save();
  }
  function removeProduct(id) {
    cart = cart.filter((row) => row.id !== id);
    save();
  }
  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    renderCart();
  }
  function renderCart() {
    const items = document.querySelector(".cart-items");
    if (!items) return;
    const count = cart.reduce((sum, row) => sum + row.quantity, 0);
    document.querySelectorAll(".cart-count").forEach((el) => el.textContent = count);
    const empty = document.querySelector(".cart-empty"), footer = document.querySelector(".cart-footer");
    empty.hidden = count > 0;
    footer.hidden = count === 0;
    items.innerHTML = cart.map((row) => {
      const p = products.find((item) => item.id === row.id);
      return p ? `<article class="cart-item"><div class="cart-item-icon">${categoryIcon(p.categoria)}</div><div class="cart-item-main"><b>${escapeHtml(p.nombre)}</b><small>${money(p.precio)} c/u</small><div class="quantity-control"><button data-step="-1" data-id="${p.id}" aria-label="Quitar una unidad de ${escapeHtml(p.nombre)}">−</button><span>${row.quantity}</span><button data-step="1" data-id="${p.id}" aria-label="Agregar una unidad de ${escapeHtml(p.nombre)}">+</button></div></div><div class="cart-item-side"><b>${money(p.precio * row.quantity)}</b><button data-remove="${p.id}" class="remove-item">Quitar</button></div></article>` : "";
    }).join("");
    const total = cart.reduce((sum, row) => {
      const p = products.find((item) => item.id === row.id);
      return sum + (p ? p.precio * row.quantity : 0);
    }, 0);
    document.querySelectorAll(".cart-subtotal").forEach((el) => el.textContent = money(total));
  }
  function checkout() {
    var _a;
    if (!cart.length) {
      toast("Tu carrito está vacío.");
      return;
    }
    const method = ((_a = document.querySelector('input[name="delivery"]:checked')) == null ? void 0 : _a.value) || "retiro";
    const address = document.querySelector(".delivery-address").value.trim();
    if (method === "envio" && !address) {
      document.querySelector(".delivery-address").focus();
      toast("Completá la dirección de entrega.");
      return;
    }
    const lines = cart.map((row) => {
      const p = products.find((item) => item.id === row.id);
      return `• ${row.quantity} x ${p.nombre} — ${money(p.precio * row.quantity)}`;
    });
    const total = cart.reduce((sum, row) => {
      const p = products.find((item) => item.id === row.id);
      return sum + p.precio * row.quantity;
    }, 0);
    const text = `Hola Don Aníbal, quiero hacer este pedido:

${lines.join("\n")}

Subtotal: ${money(total)}
Entrega: ${method === "retiro" ? "Retiro en sucursal" : `Envío a ${address}`}

¿Me confirman disponibilidad y forma de pago?`;
    window.open(`https://wa.me/5493415550187?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  // js/catalog.js
  initTheme();
  initMenu();
  initNewsletter();
  initCart();
  var state = { products: [], query: "", category: "", brands: /* @__PURE__ */ new Set(), min: "", max: "", stock: false, sale: false, sort: "relevancia", shown: 12 };
  var params = new URLSearchParams(location.search);
  state.query = params.get("q") || "";
  state.category = params.get("categoria") || "";
  state.sort = params.get("orden") || "relevancia";
  state.sale = params.get("oferta") === "1";
  var $ = (selector) => document.querySelector(selector);
  function initFilters() {
    const categories = [...new Set(state.products.map((p) => p.categoria))].sort((a, b) => a.localeCompare(b, "es"));
    $("#category-filters").innerHTML = categories.map((category) => `<label class="check-row"><input type="radio" name="category" value="${escapeHtml(category)}" ${slug(category) === slug(state.category) ? "checked" : ""}><span>${escapeHtml(category)}</span><small>${state.products.filter((p) => p.categoria === category).length}</small></label>`).join("");
    const brands = [...new Set(state.products.map((p) => p.marca))].sort((a, b) => a.localeCompare(b, "es"));
    $("#brand-filters").innerHTML = brands.map((brand) => `<label class="check-row"><input type="checkbox" value="${escapeHtml(brand)}"><span>${escapeHtml(brand)}</span></label>`).join("");
    if (state.query) {
      $("#catalog-query").value = state.query;
      $("#header-query").value = state.query;
    }
    $("#sort-select").value = state.sort;
    $("#on-sale").checked = state.sale;
  }
  function filtered() {
    let result = state.products.filter((p) => {
      const hay = slug(`${p.nombre} ${p.categoria} ${p.marca} ${p.descripcion} ${p.etiquetas.join(" ")}`);
      return (!state.query || hay.includes(slug(state.query))) && (!state.category || slug(p.categoria) === slug(state.category)) && (!state.brands.size || state.brands.has(p.marca)) && (!state.min || p.precio >= Number(state.min)) && (!state.max || p.precio <= Number(state.max)) && (!state.stock || p.stock > 0) && (!state.sale || p.etiquetas.includes("oferta"));
    });
    if (state.sort === "precio-asc") result.sort((a, b) => a.precio - b.precio);
    else if (state.sort === "precio-desc") result.sort((a, b) => b.precio - a.precio);
    else if (state.sort === "nombre") result.sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));
    else result.sort((a, b) => Number(b.etiquetas.includes("más vendido")) - Number(a.etiquetas.includes("más vendido")));
    return result;
  }
  function render() {
    const result = filtered(), visible = result.slice(0, state.shown);
    $("#result-count").textContent = `${result.length} ${result.length === 1 ? "producto" : "productos"} encontrados`;
    $("#catalog-products").innerHTML = visible.map(productCard).join("");
    $("#catalog-empty").hidden = result.length > 0;
    $("#catalog-products").hidden = result.length === 0;
    $("#page-info").textContent = result.length ? `Mostrando ${visible.length} de ${result.length}` : "";
    $("#load-more").hidden = visible.length >= result.length || result.length === 0;
    const chips = [];
    if (state.category) chips.push(`<button data-clear="category">${escapeHtml(state.category)} ×</button>`);
    state.brands.forEach((b) => chips.push(`<button data-clear-brand="${escapeHtml(b)}">${escapeHtml(b)} ×</button>`));
    if (state.query) chips.push(`<button data-clear="query">“${escapeHtml(state.query)}” ×</button>`);
    if (state.sale) chips.push('<button data-clear="sale">Ofertas ×</button>');
    $("#active-filters").innerHTML = chips.join("");
  }
  function clearAll() {
    state.query = "";
    state.category = "";
    state.brands.clear();
    state.min = "";
    state.max = "";
    state.stock = false;
    state.sale = false;
    $("#catalog-query").value = "";
    $("#header-query").value = "";
    $("#price-min").value = "";
    $("#price-max").value = "";
    $("#in-stock").checked = false;
    $("#on-sale").checked = false;
    document.querySelectorAll('[name="category"]').forEach((el) => el.checked = false);
    document.querySelectorAll("#brand-filters input").forEach((el) => el.checked = false);
    state.shown = 12;
    render();
  }
  (async () => {
    var _a;
    try {
      state.products = await loadProducts();
      initCart(state.products);
      initQuickView(state.products);
      initFilters();
      render();
      $("#catalog-query").addEventListener("input", (e) => {
        state.query = e.target.value;
        $("#header-query").value = state.query;
        state.shown = 12;
        render();
      });
      (_a = $(".catalog-head-search")) == null ? void 0 : _a.addEventListener("submit", (e) => {
        e.preventDefault();
        state.query = $("#header-query").value;
        $("#catalog-query").value = state.query;
        state.shown = 12;
        render();
      });
      $("#sort-select").addEventListener("change", (e) => {
        state.sort = e.target.value;
        render();
      });
      $("#category-filters").addEventListener("change", (e) => {
        if (e.target.name === "category") {
          state.category = e.target.value;
          state.shown = 12;
          render();
        }
      });
      $("#brand-filters").addEventListener("change", (e) => {
        if (e.target.matches("input")) {
          e.target.checked ? state.brands.add(e.target.value) : state.brands.delete(e.target.value);
          state.shown = 12;
          render();
        }
      });
      $("#price-min").addEventListener("input", (e) => {
        state.min = e.target.value;
        render();
      });
      $("#price-max").addEventListener("input", (e) => {
        state.max = e.target.value;
        render();
      });
      $("#in-stock").addEventListener("change", (e) => {
        state.stock = e.target.checked;
        render();
      });
      $("#on-sale").addEventListener("change", (e) => {
        state.sale = e.target.checked;
        render();
      });
      $("#active-filters").addEventListener("click", (e) => {
        const clear = e.target.closest("[data-clear]");
        if (clear) {
          if (clear.dataset.clear === "category") {
            state.category = "";
            document.querySelectorAll('[name="category"]').forEach((el) => el.checked = false);
          }
          if (clear.dataset.clear === "query") {
            state.query = "";
            $("#catalog-query").value = "";
          }
          if (clear.dataset.clear === "sale") {
            state.sale = false;
            $("#on-sale").checked = false;
          }
          render();
        }
        const brand = e.target.closest("[data-clear-brand]");
        if (brand) {
          state.brands.delete(brand.dataset.clearBrand);
          [...$("#brand-filters").querySelectorAll("input")].find((el) => el.value === brand.dataset.clearBrand).checked = false;
          render();
        }
      });
      $("#clear-filters").addEventListener("click", clearAll);
      $("#reset-empty").addEventListener("click", clearAll);
      $("#load-more").addEventListener("click", () => {
        state.shown += 12;
        render();
      });
      $(".filter-close").addEventListener("click", () => $(".filter-panel").classList.remove("filters-open"));
      const mobileFilter = document.createElement("button");
      mobileFilter.className = "mobile-filter-button button button-outline";
      mobileFilter.textContent = "☷ Filtros";
      $(".catalog-toolbar").append(mobileFilter);
      mobileFilter.addEventListener("click", () => $(".filter-panel").classList.add("filters-open"));
    } catch (error) {
      $("#catalog-products").innerHTML = '<p class="load-error">No pudimos cargar los productos. Probá recargar la página.</p>';
      console.error(error);
    }
  })();
})();
