// startTransition tells React: "don't unmount the current content while preparing the next one".
// The Suspense fallback only appears on the initial load; during transitions, the previous content stays visible until the new one is ready.

import { useState, useTransition, Suspense } from 'react';
import { Card, Tag } from 'antd';
import { tabs, fetchPostsSuspense, invalidateCache } from './data';
import { cardFull, tagMarginLeft } from '../../styles/shared';
import CardSkeleton from './CardSkeleton';
import PostCard from './PostCard';

function PostFeed({ resource }) {
    const items = resource.read();
    return items.map((post, i) => <PostCard key={i} post={post} />);
}

const initialResource = fetchPostsSuspense(tabs[0]);

export default function WithTransition() {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [resource, setResource] = useState(initialResource);
    const [isPending, startTransition] = useTransition();

    function handleTabChange(nextTab) {
        setActiveTab(nextTab);

        startTransition(() => {
            invalidateCache(nextTab);
            setResource(fetchPostsSuspense(nextTab));
        });
    }

    return (
        <Card
            title={
                <span>
                    Con Transición{' '}
                    <Tag color="green" style={tagMarginLeft}>
                        {isPending ? 'preparando en segundo plano…' : 'transición suave'}
                    </Tag>
                </span>
            }
            tabList={tabs.map((t) => ({ key: t, tab: t }))}
            activeTabKey={activeTab}
            onTabChange={handleTabChange}
            style={{ ...cardFull, opacity: isPending ? 0.7 : 1, transition: 'opacity 0.3s' }}
        >
            <Suspense fallback={<CardSkeleton count={1} />}>
                <PostFeed resource={resource} />
            </Suspense>
        </Card>
    );
}
