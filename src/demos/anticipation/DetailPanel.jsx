import * as s from './anticipation.styles';
import { Card, Button, Tag, Typography } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

function DetailContent({ resource }) {
    const article = resource.read();
    return (
        <div style={s.fadeIn}>
            <Title level={3}>{article.title}</Title>
            <Paragraph style={s.articleBody}>{article.body}</Paragraph>
            <div style={s.tagList}>
                {article.tags.map((tag) => (
                    <Tag key={tag} style={s.tag}>{tag}</Tag>
                ))}
            </div>
        </div>
    );
}

export default function DetailPanel({ resource, onBack }) {
    return (
        <Card style={s.panel}>
            <Button
                type="text"
                icon={<ArrowLeftOutlined />}
                onClick={onBack}
                style={s.panelClose}
            >
                Volver a la lista
            </Button>
            <DetailContent resource={resource} />
        </Card>
    );
}
