import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { AppRoutes } from './Routes';
import { store } from './store';
import { GlobalStyle } from './styles/global';
import theme from './styles/theme';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <AppRoutes />
                <GlobalStyle />
            </Provider>
        </ThemeProvider>
    );
};

export default App;
