import { Typography, Button } from 'antd';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { color } from '../../../styles/tokens';
import * as s from '../intention.styles';

const { Text } = Typography;

// Shared component used in both versions.
// `liked`  → current state of the heart (confirmed or speculative, depending on the parent)
// `onLike` → callback differs in each version
export default function CommentItem({ text, liked, onLike }) {
	return (
		<div style={s.commentItemRow}>
			<Text>{text}</Text>
			<Button
				type="text"
				onClick={onLike}
				aria-label={liked ? 'Quitar me gusta' : 'Me gusta'}
				icon={
					liked
						? <HeartFilled style={{ ...s.heartIcon, color: s.heartFilledColor }} />
						: <HeartOutlined style={{ ...s.heartIcon, color: s.heartOutlinedColor(color) }} />
				}
				style={s.commentLikeButton(liked, color)}
			/>
		</div>
	);
}
