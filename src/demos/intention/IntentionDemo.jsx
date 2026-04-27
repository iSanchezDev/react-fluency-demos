import { Row, Col } from 'antd';
import WithoutOptimistic from './WithoutOptimistic';
import WithOptimistic from './WithOptimistic';
import { demoCaption, demoText, demoMeta } from '../../styles/shared';
import { spacing } from '../../styles/tokens';

export default function IntentionDemo() {
	return (
		<>
			<Row gutter={[spacing.rowGutter, spacing.rowGutter]}>
				<Col xs={24} lg={12}>
					<WithoutOptimistic />
				</Col>
				<Col xs={24} lg={12}>
					<WithOptimistic />
				</Col>
			</Row>

			<div style={demoCaption}>
				<p style={demoText}>
					El usuario ya sabe lo que hizo. <code>useOptimistic</code> actualiza la UI en el acto y, si el servidor falla, deshace el cambio. Si no falla, ni lo notaste.
				</p>
				<p style={demoMeta}>Misma latencia simulada (1 s) · distinta sensación de respuesta</p>
			</div>
		</>
	);
}
