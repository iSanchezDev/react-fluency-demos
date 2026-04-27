import * as s from './anticipation.styles';
import { List, Card, Tag } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { catalog } from './data';

export default function ArticleList({ isPending, onSelect }) {
    return (
        <Card
            style={{ opacity: isPending ? 0.6 : 1, transition: 'opacity 0.2s' }}
        >
            {isPending && (
                <div style={{ marginBottom: 12 }}>
                    <Tag color="processing">Preparando siguiente vista…</Tag>
                </div>
            )}
            <List
                dataSource={catalog}
                renderItem={(item) => (
                    <List.Item
                        style={s.articleListItem}
                        onClick={() => onSelect(item)}
                    >
                        <List.Item.Meta
                            title={
                                <span>
                                    {item.title}{' '}
                                    <Tag
                                        color={item.prepared ? 'green' : 'orange'}
                                        style={s.tag}
                                    >
                                        {item.prepared ? 'con preparación' : 'sin preparación'}
                                    </Tag>
                                </span>
                            }
                            description={item.summary}
                        />
                        <RightOutlined style={{ color: '#bbb' }} />
                    </List.Item>
                )}
            />
        </Card>
    );
}
