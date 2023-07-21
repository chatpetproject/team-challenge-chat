import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import Theme from './styles/theme';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  );
}
