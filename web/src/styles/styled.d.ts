import 'styled-components';
import { Theme } from '@mui/material/styles';

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {
        colors: {
            primary: string;
            light: string;
            textLight: string;
            textDark: string;
            placeholder: string;
            background: string;
        };
        fontSizes: {
            small: string;
            medium: string;
            normal: string;
            large: string;
            title: string;
        };
    }
}

/// <reference types="vite/client" />
