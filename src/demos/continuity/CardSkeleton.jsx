import { Card, Skeleton } from 'antd';
import * as s from './continuity.styles';

export default function CardSkeleton({ count = 2 }) {

    return Array.from({ length: count }, (_, i) => (
        <Card key={i} style={s.card} styles={{ body: s.cardBody }}>
            <div style={s.cardHeader}>
                <Skeleton.Avatar active size={36} />
                <Skeleton.Input active size="small" style={s.skeletonInputHeader} />
            </div>

            <div style={s.shimmerBlock} />

            <div style={s.cardFooter}>
                <Skeleton.Input active size="small" style={s.skeletonInputFooter1} />
                <br />
                <Skeleton.Input active size="small" style={s.skeletonInputFooter2} />
            </div>
        </Card>
    ));
}
