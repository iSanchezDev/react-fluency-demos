import { Card, Avatar, Typography } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import * as s from './continuity.styles';

const { Text } = Typography;

export default function PostCard({ post, animated = true }) {
    return (
        <Card
            style={{ ...s.card, ...(animated && s.fadeIn) }}
            styles={{ body: s.cardBody }}
        >
            <div style={s.cardHeader}>
                <Avatar src={post.avatar} size={36} />
                <Text strong>{post.username}</Text>
                <Text type="secondary" style={s.timeText}>{post.time}</Text>
            </div>

            <img
                alt={post.caption}
                src={post.image}
                style={{ ...s.mediaBlock, ...(animated && s.fadeIn) }}
            />

            <div style={s.cardFooter}>
                <div style={s.likesRow}>
                    <HeartFilled style={s.heartIcon} />
                    <Text strong>{post.likes.toLocaleString()} likes</Text>
                </div>
                <Text style={s.caption}>{post.caption}</Text>
            </div>
        </Card>
    );
}
