import { useState } from 'react';
import { Card, Input, Button, List, Tag } from 'antd';
import { postCommentToServer, likeCommentOnServer } from './server';
import { cardFull, tagMarginLeft } from '../../styles/shared';
import CommentItem from './components/CommentItem';
import * as s from './intention.styles';

let nextId = 0;

export default function WithoutOptimistic() {
    const [input, setInput] = useState('');
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    // Map from id → boolean; only changes when the server confirms.
    const [likes, setLikes] = useState({});

    async function submit() {
        if (!input.trim() || loading) return;
        const text = input;
        const id = ++nextId;
        setInput('');
        setLoading(true);

        await postCommentToServer();

        setComments((prev) => [...prev, { id, text }]);
        setLoading(false);
    }

    async function toggleLike(id) {
        // The heart icon does NOT change here — it waits for the server's response.
        await likeCommentOnServer();
        setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
    }

    function onKeyDown(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            submit();
        }
    }

    return (
        <Card
            title={
                <span>
                    Sin Optimistic{' '}
                    <Tag color={loading ? 'processing' : 'orange'} style={tagMarginLeft}>
                        {loading ? 'enviando…' : 'espera al servidor'}
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
                    disabled={loading}
                />

                <Button block onClick={submit} disabled={loading}>
                    Publicar
                </Button>

                <List
                    locale={{ emptyText: 'Aún no hay comentarios' }}
                    dataSource={comments}
                    renderItem={(item) => (
                        <List.Item style={s.listItem}>
                            <CommentItem
                                text={item.text}
                                liked={!!likes[item.id]}
                                onLike={() => toggleLike(item.id)}
                            />
                        </List.Item>
                    )}
                />
            </div>
        </Card>
    );
}
