import { Skeleton } from 'antd';
import { color, shadow, spacing } from '../styles/tokens';

const cardStyle = {
	flex: 1,
	padding: 20,
	borderRadius: 14,
	boxShadow: shadow.card,
	background: color.surface,
	border: `1px solid ${color.borderLight}`,
};

export default function PageSkeleton() {
	return (
		<div style={{ display: 'flex', gap: spacing.rowGutter }}>
			<div style={cardStyle}>
				<Skeleton active paragraph={{ rows: 6 }} />
			</div>
			<div style={cardStyle}>
				<Skeleton active paragraph={{ rows: 6 }} />
			</div>
		</div>
	);
}
