// Without startTransition: each keystroke triggers an urgent setState
// which blocks the thread until all 150 SlowRow components have finished rendering.

import { useState } from 'react';
import { Card, Input, Tag } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { CATALOG, filter } from './catalog';
import { SlowRow } from './SlowRow';
import { cardFull, tagMarginLeft } from '../../styles/shared';
import * as s from './control.styles';

const MAX_VISIBLE = 150;

export default function ControlWithoutTransition() {
    const [query, setQuery] = useState('');
    const rows = filter(query).slice(0, MAX_VISIBLE);

    return (
        <Card
            title={
                <span>
                    Sin useTransition{' '}
                    <Tag color="orange" style={tagMarginLeft}>input se congela</Tag>
                </span>
            }
            style={cardFull}
        >
            <Input
                prefix={<SearchOutlined />}
                placeholder="Escribe para filtrar…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                allowClear
                style={s.inputBar}
            />
            <div style={s.countLabel}>
                {rows.length.toLocaleString()} de {CATALOG.length.toLocaleString()} productos
            </div>
            <div style={s.listContainer}>
                {rows.map((item) => <SlowRow key={item.id} item={item} />)}
            </div>
        </Card>
    );
}
