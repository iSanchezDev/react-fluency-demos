import { Row, Col } from 'antd';
import WithoutTransition from './WithoutTransition';
import WithTransition from './WithTransition';
import { demoCaption, demoText, demoMeta } from '../../styles/shared';
import { spacing } from '../../styles/tokens';

export default function ContinuityDemo() {
    return (
        <>
            <Row gutter={[spacing.rowGutter, spacing.rowGutter]}>
                <Col xs={24} lg={12}>
                    <WithoutTransition />
                </Col>
                <Col xs={24} lg={12}>
                    <WithTransition />
                </Col>
            </Row>

            <div style={demoCaption}>
                <p style={demoText}>
                    El truco está en <code>startTransition</code>: React se queda con lo que ya se ve mientras prepara lo siguiente. Sin eso, cualquier suspend te manda directo al skeleton.
                </p>
                <p style={demoMeta}>Misma latencia (1.2 s) · mismo CardSkeleton · distinto comportamiento de Suspense</p>
            </div>
        </>
    );
}
