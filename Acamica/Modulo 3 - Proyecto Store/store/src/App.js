import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from "./components/pages/Home/connectIndex"
import RedeemHistory from "./components/pages/RedeemHistory/connectIndex"
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import {SidebarData} from "./components/Modules/AppBar/constants/ListDrawerItems"




function App() {
  return (
    <>
      <Router>
        <CssBaseline />
          <ReactNotification />
          <Provider store={store}>
            <main>
              <Switch>
                <Route path="/" exact>
                  <HomePage/>
                </Route>
                <Route path="/redeem" component={RedeemHistory} />
                {SidebarData.map(category =>(
                  <Route key={Math.random} path={category.link} exact>
                    <HomePage category={category.title}/>
                  </Route>
                ))}
              </Switch>
            </main>
          </Provider>
      </Router>
    </>
  );
}

export default App;
