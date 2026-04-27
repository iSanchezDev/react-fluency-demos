// ── Suspense resource factory ─────────────────────────────────
// Converts a Promise into a Suspense-compatible resource:
// resource.read() throws the promise while pending,
// returns the result when resolved, or rethrows the error.
//
// Standard "throw-while-pending" pattern for React Suspense.
// Do not use in production without a library like SWR or React Query.

export function wrapPromise(promise) {
    let status = 'pending';
    let result;
    const suspender = promise.then(
        (res) => { status = 'success'; result = res; },
        (err) => { status = 'error'; result = err; },
    );
    return {
        read() {
            if (status === 'pending') throw suspender;
            if (status === 'error') throw result;
            return result;
        },
    };
}
