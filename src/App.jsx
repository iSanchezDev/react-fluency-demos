import { useState, useRef } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Layout, Typography, Tabs } from 'antd';
import { ROUTES } from './constants/routes';
import * as s from './styles/app.styles';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

// dir > 0 → navigating right: new enters from right, old exits to left
// dir < 0 → navigating left: new enters from left, old exits to right
const slideVariants = {
  enter: (dir) => ({ x: dir >= 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir >= 0 ? '-30%' : '30%', opacity: 0 }),
};

const transition = { duration: 0.32, ease: [0.25, 0.1, 0.25, 1] };

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [direction, setDirection] = useState(0);

  // false on initial load (refresh / direct URL) → no entrance animation
  // true as soon as the user navigates between tabs → slide active
  const hasNavigated = useRef(false);

  const activeKey = ROUTES.find((r) => location.pathname.startsWith(r.path))?.key || 'intention';

  function handleTabChange(key) {
    const oldIndex = ROUTES.findIndex((r) => r.key === activeKey);
    const newIndex = ROUTES.findIndex((r) => r.key === key);
    setDirection(newIndex > oldIndex ? 1 : -1);
    hasNavigated.current = true;
    navigate(ROUTES.find((r) => r.key === key).path);
  }

  return (
    <Layout style={s.layout}>
      <Header style={s.header}>
        <Title level={5} style={s.headerTitle}>
          Fluidez Perceptiva con React 19
        </Title>
        <Title level={5} style={s.headerSubtitle}>
          4 reglas para interfaces
        </Title>
      </Header>

      <Content style={s.content}>
        <Tabs
          activeKey={activeKey}
          onChange={handleTabChange}
          items={ROUTES.map((r) => ({ key: r.key, label: r.label }))}
          size="large"
          style={s.tabsBar}
        />

        <div style={s.slideContainer}>
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={activeKey}
              custom={direction}
              variants={slideVariants}
              initial={hasNavigated.current ? 'enter' : false}
              transition={transition}
              animate="center"
              exit="exit"
            >
              <Routes location={location}>
                <Route path="/" element={<Navigate to="/intention" replace />} />
                {ROUTES.map(({ key, path, component: Component }) => (
                  <Route key={key} path={path} element={<Component />} />
                ))}
              </Routes>
            </motion.div>
          </AnimatePresence>
        </div>
      </Content>

      <Footer style={s.footer}>
        La fluidez no es reducir milisegundos, es evitar cortes y reorientaciones perceptivas.
      </Footer>
    </Layout>
  );
}
