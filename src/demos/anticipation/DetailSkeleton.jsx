import * as s from './anticipation.styles';
import { Card, Skeleton } from 'antd';

export default function DetailSkeleton() {
    return (
        <Card style={s.panel}>
            <Skeleton.Input active style={{ width: '50%', height: 28, marginBottom: 16 }} />
            <br />
            <Skeleton.Input active style={{ width: '100%', height: 14, marginBottom: 6 }} />
            <br />
            <Skeleton.Input active style={{ width: '95%', height: 14, marginBottom: 6 }} />
            <br />
            <Skeleton.Input active style={{ width: '85%', height: 14, marginBottom: 6 }} />
            <br />
            <Skeleton.Input active style={{ width: '70%', height: 14, marginBottom: 20 }} />
            <br />
            <div style={{ display: 'flex', gap: 6 }}>
                <Skeleton.Input active style={{ width: 80, height: 22 }} />
                <Skeleton.Input active style={{ width: 70, height: 22 }} />
                <Skeleton.Input active style={{ width: 90, height: 22 }} />
            </div>
        </Card>
    );
}
