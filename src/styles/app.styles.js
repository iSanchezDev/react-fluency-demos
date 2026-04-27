import { color, spacing } from './tokens';

export const layout = { minHeight: '100vh', background: color.background };

export const header = {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'rgba(255,255,255,0.88)',
    backdropFilter: 'saturate(180%) blur(20px)',
    WebkitBackdropFilter: 'saturate(180%) blur(20px)',
    borderBottom: `1px solid ${color.border}`,
    padding: '0 40px',
    height: 56,
    lineHeight: '56px',
};

export const headerTitle = {
    color: color.textPrimary,
    margin: 0,
    fontWeight: 600,
    fontSize: 15,
    letterSpacing: -0.2,
};

export const headerSubtitle = {
    color: color.textTertiary,
    margin: 0,
    fontWeight: 400,
    fontSize: 12,
    letterSpacing: 0.1,
};

export const content = {
    padding: '24px 32px 0',
    maxWidth: 1120,
    margin: '0 auto',
    width: '100%',
};

export const tabsBar = { marginBottom: spacing.rowGutter };

// Slide container: clips pages entering/leaving at the edges
export const slideContainer = { position: 'relative', overflow: 'hidden' };

// While isPending (first chunk load) dims the incoming content
export const tabPending = {
    opacity: 0.4,
    pointerEvents: 'none',
    transition: 'opacity 0.15s ease',
};

export const footer = {
    textAlign: 'center',
    background: 'transparent',
    fontSize: 12,
    color: color.textTertiary,
    padding: '40px 24px',
    letterSpacing: 0.1,
};
