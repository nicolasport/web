import React, { Component } from 'react'
import SideMenu from "./SideMenu";
import News from "./News";

import styled from 'styled-components'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';


library.add(faBullhorn);

class App extends Component {
  render() {
    const Container = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: 100vh;
      @media (min-width: 64rem) {
        flex-direction: row;
      }
    `;
    return (
        <Container>
          <SideMenu />
          <News />
        </Container>
    );
  }
}

export default App
