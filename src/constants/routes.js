import IntentionDemo from './../demos/intention/IntentionDemo';
import ContinuityDemo from './../demos/continuity/ContinuityDemo';
import ControlDemo from './../demos/control/ControlDemo';
import AnticipationDemo from './../demos/anticipation/AnticipationDemo';

export const ROUTES = [
    { key: 'intention', path: '/intention', label: '1. Intención', component: IntentionDemo },
    { key: 'continuity', path: '/continuity', label: '2. Continuidad', component: ContinuityDemo },
    { key: 'control', path: '/control', label: '3. Control', component: ControlDemo },
    { key: 'anticipation', path: '/anticipation', label: '4. Anticipación', component: AnticipationDemo },
];
