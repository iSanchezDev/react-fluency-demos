import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { color, font, radius } from './styles/tokens';
import App from './App';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: color.accent,
                    colorBgLayout: color.background,
                    colorBgContainer: color.surface,
                    colorText: color.textPrimary,
                    colorTextSecondary: color.textSecondary,
                    colorTextTertiary: color.textTertiary,
                    colorBorder: color.border,
                    colorBorderSecondary: color.borderLight,
                    borderRadius: radius.sm,
                    borderRadiusLG: radius.md,
                    fontFamily: font.family,
                    fontSize: 14,
                    lineHeight: 1.6,
                },
                components: {
                    Layout: {
                        headerBg: color.surface,
                        bodyBg: color.background,
                        footerBg: 'transparent',
                    },
                    Card: {
                        borderRadiusLG: radius.md,
                        headerBg: 'transparent',
                    },
                    Tabs: {
                        inkBarColor: color.accent,
                        itemSelectedColor: color.accent,
                        itemHoverColor: color.textPrimary,
                        titleFontSizeLG: 15,
                    },
                    Tag: {
                        borderRadius: 20,
                        fontSize: 11,
                    },
                    Input: {
                        borderRadius: radius.sm,
                    },
                    Button: {
                        borderRadius: radius.sm,
                        defaultColor: color.textPrimary,
                    },
                    List: {
                        colorSplit: color.borderLight,
                    },
                },
            }}
        >
            <App />
        </ConfigProvider>
    </BrowserRouter>
);
