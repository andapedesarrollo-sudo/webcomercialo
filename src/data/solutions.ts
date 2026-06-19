export interface Solution {
  slug: string;
  emoji: string;
  bg: string;
  badge: string;
  title: string;
  desc: string;
  special?: boolean;
  extendedDesc: string;
  features: { icon: string; title: string; desc: string }[];
}

export const solutions: Solution[] = [
  {
    slug: 'comercios',
    emoji: '🛍️',
    bg: 'bg-gradient-to-br from-[#009944] to-[#007733]',
    badge: 'Comercios',
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
  },
  {
    slug: 'gastronomia',
    emoji: '🍽️',
    bg: 'bg-gradient-to-br from-[#00C060] to-[#00A650]',
    badge: 'Gastronomía',
    title: 'Gastronomía',
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
  },
  {
    slug: 'pos-rapido',
    emoji: '⚡',
    bg: 'bg-gradient-to-br from-[#00A650] to-[#008040]',
    badge: 'POS Rápido',
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
  },
  {
    slug: 'desarrollo-a-medida',
    emoji: '🛠️',
    bg: 'bg-gradient-to-br from-[#1A202C] to-[#2D3748]',
    badge: 'Desarrollo a medida',
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
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
