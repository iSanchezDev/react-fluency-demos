import { Row, Col } from 'antd';
import ControlWithoutTransition from './ControlWithoutTransition';
import ControlWithTransition from './ControlWithTransition';
import { demoCaption, demoText, demoMeta } from '../../styles/shared';
import { spacing } from '../../styles/tokens';

export default function ControlDemo() {
    return (
        <>
            <Row gutter={[spacing.rowGutter, spacing.rowGutter]}>
                <Col xs={24} lg={12}>
                    <ControlWithoutTransition />
                </Col>
                <Col xs={24} lg={12}>
                    <ControlWithTransition />
                </Col>
            </Row>

            <div style={demoCaption}>
                <p style={demoText}>
                    El cálculo cuesta lo mismo en los dos casos. La diferencia es que <code>startTransition</code> le dice a React: &ldquo;esto puede esperar, el input no&rdquo;.
                </p>
                <p style={demoMeta}>8 000 ítems · mismo filtro · distinta prioridad de renderizado</p>
            </div>
        </>
    );
}
