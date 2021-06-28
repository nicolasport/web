import './styles/App.css';
import Sidebar from "./Sidebar/Sidebar"
import NewsPage from "./NewsPage/connectNewsPage"
import { Fragment } from 'react';
import styled from 'styled-components'
import { Route, Switch, Redirect } from 'react-router-dom';


// Add these imports - Step 1
import { Provider } from 'react-redux';
import { store } from '../store/store';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 90px 1fr;
  overflow: hidden;
`


function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Container>
          <Switch>
            <Redirect exact from="/" to="/home" />
          </Switch>
          <Sidebar/>
          <NewsPage/>
        </Container>
      </Provider>
    </Fragment>
      
  );
}

export default App;
