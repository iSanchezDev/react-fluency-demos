import { useState, useOptimistic, useTransition } from 'react';
import { Card, Input, Button, List, Tag } from 'antd';
import { postCommentToServer, likeCommentOnServer } from './server';
import { cardFull, tagMarginLeft } from '../../styles/shared';
import * as s from './intention.styles';
import CommentItem from './components/CommentItem';

let nextId = 0;

// Pure reducer: adds the comment or ignores it if it has already been confirmed.
function applyOptimisticComment(state, newComment) {
    const isConfirmed = state.some((c) => c.id === newComment.id);
    return isConfirmed ? state : [...state, newComment];
}

// Pure reducer: applies the like toggle speculatively.
function applyOptimisticLike(state, { id, liked }) {
    return { ...state, [id]: liked };
}

// useOptimistic reflects the comment and the like in the UI instantly, before the server confirms.
// If the server fails, React automatically reverts the state.
export default function WithOptimistic() {
    const [input, setInput] = useState('');
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState({});

    const [optimisticComments, addOptimisticComment] = useOptimistic(comments, applyOptimisticComment);
    const [optimisticLikes, addOptimisticLike] = useOptimistic(likes, applyOptimisticLike);

    const [, startTransition] = useTransition();

    async function submit() {
        if (!input.trim()) return;
        const text = input;
        const id = ++nextId;
        setInput('');

        startTransition(async () => {
            addOptimisticComment({ id, text, pending: true });
            await postCommentToServer();
            setComments((prev) => [...prev, { id, text }]);
        });
    }

    function toggleLike(id) {
        const newLiked = !optimisticLikes[id];
        startTransition(async () => {
            // The heart icon changes instantly; the server confirms in the background.
            addOptimisticLike({ id, liked: newLiked });
            await likeCommentOnServer();
            setLikes((prev) => ({ ...prev, [id]: newLiked }));
        });
    }

    function onKeyDown(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            submit();
        }
    }

    const hasPending = optimisticComments.some((c) => c.pending);

    return (
        <Card
            title={
                <span>
                    Con Optimistic{' '}
                    <Tag color={hasPending ? 'processing' : 'green'} style={tagMarginLeft}>
                        {hasPending ? 'Enviando…' : 'Intención inmediata'}
                    </Tag>
                </span>
            }
            style={cardFull}
        >
            <div style={s.formColumn}>
                <Input.TextArea
                    rows={2}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={onKeyDown}
                    placeholder="Escribe un comentario…"
                    style={s.textarea}
                />

                <Button block onClick={submit}>
                    Publicar
                </Button>

                <List
                    locale={{ emptyText: 'Aún no hay comentarios' }}
                    dataSource={optimisticComments}
                    renderItem={(item) => (
                        <List.Item style={s.listItem}>
                            <CommentItem
                                text={item.text}
                                liked={!!optimisticLikes[item.id]}
                                onLike={() => toggleLike(item.id)}
                            />
                        </List.Item>
                    )}
                />
            </div>
        </Card>
    );
}
