export const heartIcon = {
    fontSize: 22,
};

export const heartFilledColor = '#ff3b30';

export const heartOutlinedColor = (color) => color.textTertiary;

export const commentItemRow = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 4px',
    width: '100%',
};

export const commentLikeButton = (liked, color) => ({
    transform: liked ? 'scale(1.15)' : 'scale(1)',
    transition: 'transform 0.2s ease',
    color: liked ? heartFilledColor : heartOutlinedColor(color),
});

export const formColumn = { display: 'flex', flexDirection: 'column', gap: 12 };

export const listItem = { padding: '8px 4px' };

export const textarea = { resize: 'none' };
