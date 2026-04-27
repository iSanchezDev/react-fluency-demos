// ── Synthetic catalogue ───────────────────────────────────────
// 8,000 items generated only once upon module import.
// Both versions (with/without transition) use exactly the same data.

const CATEGORIES = [
    'Auricular', 'Teclado', 'Monitor', 'Ratón', 'Cámara', 'Altavoz',
    'Micrófono', 'Webcam', 'Hub USB', 'Disco SSD', 'Switch', 'Router',
    'Tablet', 'Stylus', 'Soporte', 'Alfombrilla', 'Capturadora', 'Dock',
    'Impresora', 'Escáner',
];

const ADJECTIVES = [
    'Compacto', 'Ultra', 'Pro', 'Slim', 'Max', 'Mini', 'Nano', 'Elite',
    'Smart', 'Turbo', 'Air', 'Plus', 'Prime', 'Core', 'Edge', 'Flex',
    'Wave', 'Boost', 'Fusion', 'Link',
];

export const CATALOG = Array.from({ length: 8_000 }, (_, i) => ({
    id: i + 1,
    name: `${ADJECTIVES[i % ADJECTIVES.length]} ${CATEGORIES[Math.floor(i / ADJECTIVES.length) % CATEGORIES.length]}`,
    brand: `Marca ${String.fromCharCode(65 + (i % 26))}`,
    sku: `SKU-${String(i + 1).padStart(5, '0')}`,
    price: ((i * 17 + 23) % 890) + 9,
    stock: (i * 7 + 3) % 200,
}));

// ── Fast filtering ────────────────────────────────────────────
// The filter itself is inexpensive: just string matching.
// The real cost lies in the RENDER of each row (SlowRow),
// where React can yield the thread during a transition.
export function filter(query) {
    const q = query.toLowerCase();
    if (!q) return CATALOG;
    return CATALOG.filter(
        (item) =>
            item.name.toLowerCase().includes(q) ||
            item.brand.toLowerCase().includes(q)
    );
}
