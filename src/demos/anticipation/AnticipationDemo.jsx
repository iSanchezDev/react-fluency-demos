// ── Anticipation ─────────────────────────────────────────────
// A single, always-mounted <Suspense> wraps both the list and the detail.
//
// Without startTransition → direct setState → Suspense displays the skeleton.
// With startTransition → React retains the list until the detail is ready.
//
// Same latency (1.5 s), different perception.

import { useState, useTransition, Suspense } from 'react';
import { Typography } from 'antd';
import { fetchDetailSuspense, invalidateDetailCache } from './data';
import ArticleList from './ArticleList';
import DetailPanel from './DetailPanel';
import DetailSkeleton from './DetailSkeleton';

export default function AnticipationDemo() {
    const [resource, setResource] = useState(null);
    const [isPending, startTransition] = useTransition();

    function handleSelect(item) {
        invalidateDetailCache(item.id);
        const data = fetchDetailSuspense(item.id);

        if (item.prepared) {
            startTransition(() => setResource(data));
        } else {
            setResource(data);
        }
    }

    return (
        <>
            <Suspense fallback={<DetailSkeleton />}>
                {resource === null
                    ? <ArticleList isPending={isPending} onSelect={handleSelect} />
                    : <DetailPanel resource={resource} onBack={() => setResource(null)} />
                }
            </Suspense>
            <Typography.Paragraph style={{ margin: '40px auto 24px', textAlign: 'center' }}>
                Prepara la siguiente pantalla en segundo plano usando <code>startTransition</code> y <code>Suspense</code>. Así, nunca se muestra un estado en blanco o Skeleton de carga.
            </Typography.Paragraph>
        </>
    );
}
