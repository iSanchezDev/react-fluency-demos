import { color } from '../../styles/tokens';

export const countLabel = { fontSize: 12, color: color.textTertiary, marginBottom: 8 };

export const listContainer = { height: 260, overflowY: 'auto' };

export const inputBar = { marginBottom: 12 };

// SlowRow styles
export const row = {
    display: 'flex',
    borderBottom: `1px solid ${color.borderLight}`,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '6px 0',
    fontSize: 13,
};

export const rowName = { flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: color.textPrimary };

export const rowBrand = { color: color.textSecondary, fontSize: 12, marginLeft: 12, flexShrink: 0 };

export const rowPrice = { color: color.textTertiary, fontSize: 12, marginLeft: 12, marginRight: 12, flexShrink: 0, width: 52, textAlign: 'right' };
