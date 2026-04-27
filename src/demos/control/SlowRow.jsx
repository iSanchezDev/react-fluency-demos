// ⚠️ The burn occurs during the render phase, not in the handler.
// This is what allows startTransition to work its magic:
// React can yield the thread between components, but it cannot
// interrupt JS running outside its cycle. Demo purposes only.

import * as s from './control.styles';

const BURN_MS = 2;

export function SlowRow({ item }) {
    const deadline = performance.now() + BURN_MS;
    while (performance.now() < deadline) { }

    return (
        <div style={s.row}>
            <span style={s.rowName}>{item.name}</span>
            <span style={s.rowBrand}>{item.brand}</span>
            <span style={s.rowPrice}>{item.price} €</span>
        </div>
    );
}
