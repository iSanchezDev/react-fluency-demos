export const fadeIn = {
  animation: 'fadeIn 0.5s ease-out',
};
export const skeletonInputHeader = {
  width: 120,
  height: 14,
};

export const skeletonInputFooter1 = {
  width: '25%',
  height: 14,
  marginBottom: 8,
};

export const skeletonInputFooter2 = {
  width: '75%',
  height: 14,
};
import { color, shadow } from '../../styles/tokens';

export const card = {
  borderRadius: 14,
  marginBottom: 16,
  overflow: 'hidden',
  boxShadow: shadow.card,
  border: `1px solid ${color.borderLight}`,
};

export const cardBody = { padding: 0 };

export const cardHeader = {
  alignItems: 'center',
  padding: '12px 16px',
  display: 'flex',
  gap: 10,
};

export const cardFooter = { padding: '12px 16px' };

export const mediaBlock = {
  height: 160,
  width: '100%',
  display: 'block',
  objectFit: 'cover',
};

export const shimmerBlock = {
  width: '100%',
  height: 160,
  backgroundSize: '200% 100%',
  animation: 'shimmer 1.5s ease-in-out infinite',
  background: 'linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%)',
};

export const likesRow = { marginBottom: 4 };

export const timeText = { marginLeft: 'auto', fontSize: 12, color: color.textTertiary };

export const heartIcon = { color: '#ff4d4f', marginRight: 6 };

export const caption = { display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' };