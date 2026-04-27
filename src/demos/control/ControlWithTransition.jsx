// With startTransition: two separate states — query (urgent) and
// deferredQuery (deferred). SlowList is memoised: the urgent render
// passes it the same prop → memo ignores it → the input is painted instantly.
// The deferred render updates the prop → React processes it when possible.

import { useState, useTransition, memo } from 'react';
import { Card, Input, Tag, Spin } from 'antd';
import { SearchOutlined, LoadingOutlined } from '@ant-design/icons';
import { CATALOG, filter } from './catalog';
import { SlowRow } from './SlowRow';
import { cardFull, tagMarginLeft } from '../../styles/shared';
import * as s from './control.styles';

const MAX_VISIBLE = 150;

const SlowList = memo(function SlowList({ query }) {
    const rows = filter(query).slice(0, MAX_VISIBLE);
    return <>{rows.map((item) => <SlowRow key={item.id} item={item} />)}</>;
});

export default function ControlWithTransition() {
    const [query, setQuery] = useState('');
    const [deferredQuery, setDeferredQuery] = useState('');

    // Separate state for the list — only updates via transition.
    const [isPending, startTransition] = useTransition();

    function handleChange(e) {
        const q = e.target.value;
        // ✅ Urgent: the input displays the character IN THE SAME FRAME.
        //    SlowList receives the SAME deferredQuery as before → memo ignores it.
        setQuery(q);

        // ✅ Deferred: React schedules the render of SlowList when possible.
        //    SlowList receives a new prop → memo allows it through → concurrent render.
        startTransition(() => {
            setDeferredQuery(q);
        });
    }

    return (
        <Card
            title={
                <span>
                    Con useTransition{' '}
                    <Tag color={isPending ? 'processing' : 'green'} style={tagMarginLeft}>
                        {isPending ? 'lista actualizándose…' : 'interacción fluida'}
                    </Tag>
                </span>
            }
            style={cardFull}
        >
            <Input
                prefix={isPending
                    ? <Spin indicator={<LoadingOutlined style={{ fontSize: 14 }} spin />} />
                    : <SearchOutlined />
                }
                allowClear
                value={query}
                placeholder="Escribe para filtrar…"
                onChange={handleChange}
                style={s.inputBar}
            />
            <div style={s.countLabel}>
                {filter(deferredQuery).length.toLocaleString()} de {CATALOG.length.toLocaleString()} productos
            </div>
            <div style={{ ...s.listContainer, opacity: isPending ? 0.5 : 1, transition: 'opacity 0.2s' }}>
                <SlowList query={deferredQuery} />
            </div>
        </Card>
    );
}
