import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import ReactNotification from 'react-notifications-component';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';

const App = () => {
  const isAdminLoggedIn = useSelector(() => useSelector((state) => state.global.isAdminLoggedIn));
  const routing = useRoutes(routes(isAdminLoggedIn));
  return (
    <ThemeProvider theme={theme}>
      <ReactNotification />
      <GlobalStyles />
      { routing }
    </ThemeProvider>
  );
};

// The AppWrapper is used to allow access to redux-state
const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
