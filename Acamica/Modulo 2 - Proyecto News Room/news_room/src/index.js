import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SideMenu from "./SideMenu";
import News from "./News";
import styled from "styled-components";


const Container = styled.div`
      display: flex;  
      flex-flow: row wrap;
      font-weight: bold;
      height: 100vh;      
    `;

ReactDOM.render(
    <Container>
        <SideMenu/>
        <News/>
    </Container>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
