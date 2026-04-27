import { wrapPromise } from '../../lib/wrapPromise';

// Catálogo de artículos para navegación lista → detalle
// prepared: true  → navega con startTransition (la lista se mantiene)
// prepared: false → navega sin transición (la lista se desmonta)
const catalog = [
    {
        id: 'sin-preparar',
        title: 'Navegar sin preparar',
        summary: 'La lista desaparece, aparece un skeleton, y después carga el detalle',
        body: 'Cuando la navegación no está preparada, React desmonta la vista actual inmediatamente al cambiar de ruta. El usuario ve un estado intermedio vacío — un skeleton o un spinner — hasta que los datos del destino llegan. Aunque la latencia sea la misma, el corte visual es evidente: la vista anterior se destruye antes de que la siguiente esté lista.',
        tags: ['navigate()', 'Desmontaje inmediato', 'Corte visual'],
        prepared: false,
    },
    {
        id: 'con-preparacion',
        title: 'Navegar con preparación',
        summary: 'La lista permanece visible mientras el detalle se prepara en segundo plano',
        body: 'Cuando la navegación está preparada con startTransition, React mantiene la vista actual visible mientras resuelve la siguiente en segundo plano. El usuario no ve un estado intermedio vacío — la lista sigue ahí, ligeramente atenuada, hasta que el detalle está completamente listo. Solo entonces se produce el cambio. Misma latencia, pero sin corte perceptivo.',
        tags: ['startTransition', 'Suspense', 'Sin corte'],
        prepared: true,
    },
];

// Simula una carga de detalle con latencia
function fetchDetail(id) {
    return new Promise((resolve) => {
        const item = catalog.find((c) => c.id === id);
        setTimeout(() => resolve(item), 1500);
    });
}

// Suspense-compatible resource
const cache = new Map();

function fetchDetailSuspense(id) {
    if (!cache.has(id)) {
        cache.set(id, wrapPromise(fetchDetail(id)));
    }
    return cache.get(id);
}

function invalidateDetailCache(id) {
    cache.delete(id);
}



export { catalog, fetchDetail, fetchDetailSuspense, invalidateDetailCache };
