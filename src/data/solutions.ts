export interface Solution {
  slug: string;
  emoji: string;
  heroIcon: string;
  pattern: 'grid' | 'wave' | 'diagonal';
  bg: string;
  accentColor: string;
  badge: string;
  title: string;
  desc: string;
  special?: boolean;
  extendedDesc: string;
  features: { icon: string; title: string; desc: string }[];
  personas: { icon: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export const solutions: Solution[] = [
  {
    slug: 'comercios',
    emoji: '🛍️',
    heroIcon: 'shoppingBag',
    pattern: 'grid',
    bg: 'bg-gradient-to-br from-[#009944] to-[#007733]',
    accentColor: '#00A650',
    badge: 'SOLUCIÓN PARA COMERCIOS',
    title: 'Comercios',
    desc: 'Punto de venta ágil, control de productos, inventario y clientes frecuentes.',
    extendedDesc: 'Gestiona tu comercio de forma eficiente con nuestro sistema POS completo. Controla productos, inventario, clientes y ventas desde un solo lugar.',
    features: [
      { icon: 'cart', title: 'Punto de venta intuitivo', desc: 'Interfaz rápida y fácil de usar para procesar ventas en segundos.' },
      { icon: 'box', title: 'Control de inventario', desc: 'Gestiona stock, alertas de stock bajo y movimientos en tiempo real.' },
      { icon: 'tag', title: 'Catálogo de productos', desc: 'Organiza productos por categorías, variantes y precios especiales.' },
      { icon: 'users', title: 'Clientes frecuentes', desc: 'Registra clientes, historial de compras y programas de fidelidad.' },
      { icon: 'chart', title: 'Reportes de ventas', desc: 'Dashboard con métricas clave: ventas diarias, productos más vendidos y más.' },
      { icon: 'receipt', title: 'Facturación electrónica', desc: 'Emite boletas y facturas electrónicas válidas ante SUNAT.' },
    ],
    personas: [
      { icon: 'storefront', title: 'Tiendas de retail', desc: 'Boutiques, tiendas de ropa, accesorios y comercio especializado.' },
      { icon: 'cartGrocery', title: 'Supermercados', desc: 'Minimarkets, abarrotes y tiendas de barrio de alto volumen.' },
      { icon: 'wrench', title: 'Tiendas especializadas', desc: 'Ferreterías, librerías, tiendas de hogar y construcción.' },
      { icon: 'buildingStorefront', title: 'Comercios multimarca', desc: 'Negocios con múltiples categorías y departamentos.' },
    ],
    faqs: [
      { question: '¿Puedo gestionar múltiples tiendas desde una cuenta?', answer: 'Sí, Comercialo te permite gestionar múltiples sucursales desde un único dashboard. Controla inventario, ventas y reportes de cada tienda de forma independiente o consolidada.' },
      { question: '¿El sistema funciona sin internet?', answer: 'Sí, nuestro modo offline te permite seguir vendiendo aunque se caiga internet. Las ventas se sincronizan automáticamente cuando se restablece la conexión.' },
      { question: '¿Cómo manejo devoluciones y cambios?', answer: 'El sistema incluye un módulo específico para devoluciones. Puedes procesar cambios, devoluciones con o sin ticket, y generar notas de crédito automáticamente.' },
      { question: '¿Puedo crear promociones y descuentos personalizados?', answer: 'Sí, puedes crear promociones por producto, categoría, marca, o cliente. Incluye descuentos por volumen, 2x1, happy hours y programas de fidelidad.' },
      { question: '¿Qué reportes de inventario puedo generar?', answer: 'Puedes generar reportes de stock actual, movimientos de inventario, productos más vendidos, rotación de stock, alertas de stock bajo y valorización de inventario.' },
    ],
  },
  {
    slug: 'restaurantes',
    emoji: '🍽️',
    heroIcon: 'restaurant',
    pattern: 'wave',
    bg: 'bg-gradient-to-br from-[#FF6B35] to-[#FF8C42]',
    accentColor: '#F59E0B',
    badge: 'SOLUCIÓN PARA RESTAURANTES',
    title: 'Restaurantes',
    desc: 'Gestiona mesas, comandas, cocina, delivery y más. Todo integrado.',
    extendedDesc: 'Sistema completo para restaurantes, cafeterías y bares. Desde la toma de pedidos hasta la facturación, todo conectado y en tiempo real.',
    features: [
      { icon: 'table', title: 'Gestión de mesas', desc: 'Mapa visual de mesas, reservas y control de tiempos de atención.' },
      { icon: 'clipboard', title: 'Comandas digitales', desc: 'Los mozos toman pedidos que llegan directo a cocina sin errores.' },
      { icon: 'chef', title: 'Control de cocina', desc: 'Pantalla KDS para que cocina vea pedidos en tiempo real.' },
      { icon: 'truck', title: 'Gestión de delivery', desc: 'Integra pedidos de delivery con tu operación en salón.' },
      { icon: 'split', title: 'División de cuentas', desc: 'Divide la cuenta por persona, por platos o como necesites.' },
      { icon: 'recipe', title: 'Recetas e insumos', desc: 'Controla costos por plato con recetas y escandallos.' },
    ],
    personas: [
      { icon: 'restaurant', title: 'Restaurantes', desc: 'Comida rápida, fine dining, temáticos y restaurantes familiares.' },
      { icon: 'coffee', title: 'Cafeterías', desc: 'Cafés, bakeries, tea rooms y locales de desayuno.' },
      { icon: 'cocktail', title: 'Bares y pubs', desc: 'Bares, discotecas, lounges y lugares con entretenimiento.' },
      { icon: 'truck', title: 'Food service móvil', desc: 'Food trucks, puestos de comida y servicios de catering.' },
    ],
    faqs: [
      { question: '¿Puedo modificar el menú según disponibilidad de ingredientes?', answer: 'Sí, puedes marcar productos como "agotados" en tiempo real y el sistema los ocultará automáticamente en todos los puntos de venta. También puedes crear menús por turno (desayuno, almuerzo, cena).' },
      { question: '¿El sistema incluye mapas de mesas editables?', answer: 'Sí, incluye un editor visual donde puedes dibujar tu salón, agregar mesas, asignar nombres o números, y definir capacidades. Puedes tener múltiples pisos o zonas.' },
      { question: '¿Cómo manejo pedidos simultáneos para delivery y salón?', answer: 'El sistema prioriza pedidos automáticamente según tiempo de espera y tipo de pedido. Puedes asignar pedidos a repartidores específicos y trackear el estado de cada entrega.' },
      { question: '¿Puedo crear recetas y controlar costos por plato?', answer: 'Sí, el módulo de recetas te permite definir ingredientes, cantidades y costos unitarios. El sistema calcula automáticamente el costo por plato y te alerta cuando los precios de insumos cambian.' },
      { question: '¿Funciona para múltiples sucursales con menú diferente?', answer: 'Sí, puedes gestionar menús diferentes por sucursal, compartir recetas e insumos entre locales, y tener reportes consolidados o individuales por ubicación.' },
    ],
  },
  {
    slug: 'pos-rapido',
    emoji: '⚡',
    heroIcon: 'lightningBolt',
    pattern: 'diagonal',
    bg: 'bg-gradient-to-br from-[#3B82F6] to-[#2563EB]',
    accentColor: '#06B6D4',
    badge: 'SOLUCIÓN PARA ALTO VOLUMEN',
    title: 'POS Rápido',
    desc: 'Menos de 3 clics por venta.',
    extendedDesc: 'Diseñado para negocios de alto volumen donde cada segundo cuenta. Procesa ventas en menos de 3 clics con una interfaz optimizada para velocidad.',
    features: [
      { icon: 'zap', title: 'Venta en 3 clics', desc: 'Selecciona producto, cobra y listo. Así de rápido.' },
      { icon: 'keyboard', title: 'Atajos de teclado', desc: 'Usa el teclado para navegar y vender aún más rápido.' },
      { icon: 'grid', title: 'Botones personalizables', desc: 'Configura accesos directos a tus productos más vendidos.' },
      { icon: 'cash', title: 'Cobro rápido', desc: 'Efectivo, tarjeta, Yape, Plin — todo en un solo paso.' },
      { icon: 'clock', title: 'Cierre de caja express', desc: 'Reporte de caja en segundos al final del turno.' },
      { icon: 'offline', title: 'Modo offline', desc: 'Sigue vendiendo aunque se caiga internet. Se sincroniza después.' },
    ],
    personas: [
      { icon: 'chartBar', title: 'Alto volumen', desc: 'Tiendas con 100+ ventas diarias que necesitan velocidad máxima.' },
      { icon: 'beaker', title: 'Farmacias', desc: 'Ventas rápidas, múltiples turnos y atención continua.' },
      { icon: 'cake', title: 'Panaderías', desc: 'Atención express, productos frescos y rotación constante.' },
      { icon: 'clock', title: 'Conveniencia 24/7', desc: 'Operación continua, rotación rápida y múltiples cajeros.' },
    ],
    faqs: [
      { question: '¿Realmente puedo completar una venta en 3 clics?', answer: 'Sí. Con productos preconfigurados en botones rápidos: (1) seleccionas el producto, (2) eliges método de pago, (3) confirmas. Para productos con código de barras, son solo 2 clics: escanear y cobrar.' },
      { question: '¿Qué pasa si se va la luz o internet durante una venta?', answer: 'El sistema guarda automáticamente cada transacción localmente. Cuando se restablece la conexión, sincroniza todas las ventas pendientes. No pierdes ningún dato.' },
      { question: '¿Puedo personalizar los atajos de teclado para mis productos?', answer: 'Sí, puedes asignar teclas específicas (F1-F12, combinaciones con Ctrl/Alt) a tus productos más vendidos. También puedes crear perfiles por cajero.' },
      { question: '¿Cómo manejo múltiples métodos de pago en una sola venta?', answer: 'Puedes dividir el pago en hasta 4 métodos diferentes. Por ejemplo: parcial en efectivo, parcial en tarjeta, y el resto en Yape. El sistema calcula el cambio automáticamente.' },
      { question: '¿La cierre de caja es automático o manual?', answer: 'Ambas opciones están disponibles. Puedes configurar cierres automáticos por turno o hacer cierres manuales cuando necesites. El reporte incluye ventas, métodos de pago, arqueo de caja y diferencias.' },
    ],
  },
  {
    slug: 'desarrollo-a-medida',
    emoji: '🛠️',
    heroIcon: 'lightningBolt',
    pattern: 'diagonal',
    bg: 'bg-gradient-to-br from-[#1A202C] to-[#2D3748]',
    accentColor: '#8B5CF6',
    badge: 'SOLUCIÓN PERSONALIZADA',
    title: 'Desarrollo a medida',
    desc: '¿Tu negocio tiene necesidades especiales? Desarrollamos una solución personalizada para ti.',
    special: true,
    extendedDesc: 'Si Comercialo no cubre al 100% tus necesidades, nuestro equipo de desarrollo puede crear funcionalidades a medida o integraciones con otros sistemas.',
    features: [
      { icon: 'code', title: 'Desarrollo personalizado', desc: 'Funcionalidades hechas a medida para tu flujo de trabajo específico.' },
      { icon: 'link', title: 'Integraciones API', desc: 'Conectamos Comercialo con tu ERP, e-commerce o sistema existente.' },
      { icon: 'database', title: 'Migración de datos', desc: 'Traemos tu información histórica desde tu sistema anterior.' },
      { icon: 'support', title: 'Soporte dedicado', desc: 'Equipo asignado para tu proyecto con atención prioritaria.' },
      { icon: 'shield', title: 'Seguridad reforzada', desc: 'Protocolos adicionales según tus requerimientos de compliance.' },
      { icon: 'rocket', title: 'Entrega ágil', desc: 'Metodología ágil con entregas incrementales y feedback continuo.' },
    ],
    personas: [
      { icon: 'buildingStorefront', title: 'Empresas medianas', desc: 'Negocios con procesos únicos que requieren personalización.' },
      { icon: 'chartBar', title: 'Cadenas de tiendas', desc: 'Múltiples sucursales con necesidades específicas de gestión.' },
      { icon: 'wrench', title: 'Industrias especializadas', desc: 'Sectores con regulaciones o flujos de trabajo particulares.' },
      { icon: 'clock', title: 'Negocios en crecimiento', desc: 'Empresas que escalan y necesitan adaptar su sistema.' },
    ],
    faqs: [
      { question: '¿Cuánto tiempo toma un desarrollo a medida?', answer: 'Depende de la complejidad. Proyectos simples pueden estar listos en 2-4 semanas, mientras que integraciones complejas pueden tomar 2-3 meses. Te damos un cronograma detallado después del análisis inicial.' },
      { question: '¿Cómo es el proceso de desarrollo?', answer: 'Seguimos una metodología ágil: (1) Análisis de requerimientos, (2) Propuesta y cotización, (3) Desarrollo iterativo con demos cada 2 semanas, (4) Testing y QA, (5) Implementación y capacitación, (6) Soporte post-lanzamiento.' },
      { question: '¿Puedo integrar Comercialo con mi sistema actual?', answer: 'Sí, podemos integrar Comercialo con cualquier sistema que tenga API: ERPs, e-commerce, sistemas de contabilidad, CRMs, marketplaces, y más. También podemos crear APIs personalizadas si tu sistema no las tiene.' },
      { question: '¿Qué pasa con las actualizaciones del sistema base?', answer: 'Las funcionalidades a medida se desarrollan como módulos independientes que no afectan las actualizaciones del sistema base. Siempre recibirás las mejoras de seguridad y nuevas funciones de Comercialo.' },
      { question: '¿Cuál es el costo de un desarrollo personalizado?', answer: 'El costo varía según la complejidad y alcance. Ofrecemos una consulta inicial gratuita donde evaluamos tus necesidades y te proporcionamos una cotización detallada sin compromiso.' },
    ],
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
