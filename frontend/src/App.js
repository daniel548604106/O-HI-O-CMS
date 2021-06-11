import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import ReactNotification from 'react-notifications-component';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
  const routing = useRoutes(routes(isLoggedIn));

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ReactNotification />
        <GlobalStyles />
        {routing}
      </ThemeProvider>
    </Provider>
  );
};

export default App;
