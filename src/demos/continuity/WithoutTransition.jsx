// Without startTransition: setItems(null) instantly unmounts the content
// and shows the skeleton until fetch resolves — the cut is immediate.

import { useState, useEffect } from 'react';
import { Card, Tag } from 'antd';
import { tabs, fetchPosts } from './data';
import { cardFull, tagMarginLeft } from '../../styles/shared';
import CardSkeleton from './CardSkeleton';
import PostCard from './PostCard';

export default function WithoutTransition() {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        setItems(null); // ← instantly unmounts → flash

        fetchPosts(activeTab).then((result) => {
            if (!cancelled) {
                setItems(result);
                setLoading(false);
            }
        });

        return () => { cancelled = true; };
    }, [activeTab]);

    return (
        <Card
            title={
                <span>
                    Sin Transición{' '}
                    <Tag color="orange" style={tagMarginLeft}>reemplaza inmediatamente</Tag>
                </span>
            }
            tabList={tabs.map((t) => ({ key: t, tab: t }))}
            activeTabKey={activeTab}
            onTabChange={setActiveTab}
            style={cardFull}
        >
            {loading
                ? <CardSkeleton count={1} />
                : items.map((post, i) => <PostCard key={i} post={post} animated={false} />)
            }
        </Card>
    );
}
