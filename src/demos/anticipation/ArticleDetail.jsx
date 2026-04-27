import * as s from './anticipation.styles';
import { Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Typography, Tag, Button, Skeleton } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { fetchDetailSuspense } from './data';
import DetailSkeleton from './DetailSkeleton';

const { Title, Paragraph } = Typography;

// ── Detail view ────────────────────────────────────────
// Used for both prepared navigation (with Suspense) and
// unprepared navigation. The difference is in how you
// arrived here, not in the component itself.

function ArticleContent({ resource }) {
    const article = resource.read();
    return (
        <div style={{ animation: 'fadeIn 0.3s ease-in' }}>
            <Title level={3}>{article.title}</Title>
            <Paragraph style={{ fontSize: 15, lineHeight: 1.8 }}>{article.body}</Paragraph>
            <div style={s.panelHeader}>
                {article.tags.map((tag) => (
                    <Tag key={tag} style={s.tag}>{tag}</Tag>
                ))}
            </div>
        </div>
    );
}

export default function ArticleDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const resource = fetchDetailSuspense(id);

    return (
        <Card style={s.panel}>
            <Button
                type="text"
                icon={<ArrowLeftOutlined />}
                onClick={() => navigate('/anticipation')}
                style={s.panelClose}
            >
                Volver a la lista
            </Button>

            <Suspense fallback={<DetailSkeleton />}>
                <ArticleContent resource={resource} />
            </Suspense>
        </Card >
    );
}
