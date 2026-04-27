import { color, shadow, spacing } from './tokens';

export const cardFull = {
    height: '100%',
    boxShadow: shadow.card,
    border: `1px solid ${color.borderLight}`,
};

export const tagMarginLeft = { marginLeft: 8 };

export const demoCaption = {
    textAlign: 'center',
    marginTop: spacing.sectionGap,
    marginBottom: 8,
};

export const demoText = {
    fontSize: 14,
    color: color.textSecondary,
    margin: 0,
    lineHeight: 1.7,
};

export const demoMeta = {
    fontSize: 12,
    color: color.textTertiary,
    margin: '6px 0 0',
};
