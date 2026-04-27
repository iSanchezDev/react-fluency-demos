import { wrapPromise } from '../../lib/wrapPromise';

// ── Data: Instagram-style posts per tab ───────────────
const tabs = ['Para ti', 'Siguiendo', 'Favoritos'];

const posts = {
    'Para ti': [
        {
            username: 'torres.patagonia',
            avatar: 'https://i.pravatar.cc/40?img=12',
            image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
            likes: 4821,
            caption: 'Torres del Paine al amanecer. El silencio aquí tiene otro peso 🏔️',
            time: '2 h',
        },
    ],
    Siguiendo: [
        {
            username: 'viento.sur',
            avatar: 'https://i.pravatar.cc/40?img=20',
            image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
            likes: 3104,
            caption: 'Glaciar Perito Moreno. El hielo cruje, el tiempo se detiene 🧊',
            time: '5 h',
        },
    ],
    Favoritos: [
        {
            username: 'lago.nordenskjold',
            avatar: 'https://i.pravatar.cc/40?img=33',
            image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80',
            likes: 6237,
            caption: 'Lago Nordenskjöld. Ese azul no existe en ninguna paleta de colores 💙',
            time: '1 d',
        },
    ],
};

// Artificial latency (1.2 s)
function fetchPosts(tab) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(posts[tab]), 800);
    });
}

// ── Suspense wrapper (throw-promise pattern) ─────────────────
const cache = new Map();

function fetchPostsSuspense(tab) {
    if (!cache.has(tab)) {
        cache.set(tab, wrapPromise(fetchPosts(tab)));
    }
    return cache.get(tab);
}

function invalidateCache(tab) {
    cache.delete(tab);
}

export { tabs, posts, fetchPosts, fetchPostsSuspense, invalidateCache };
