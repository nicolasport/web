import React, {Component} from 'react';
import styled from "styled-components";


class SideMenu extends Component {
    render() {
        const Container = styled.aside`
           
          display: flex;
          background: #222;
          flex-wrap: wrap;
          align-items: strech;
          @media (min-width: 64rem) {
            align-content: flex-start;
          }
          color:#fefefe;
          padding: 10px;
        `;
        return (
            <Container>Seccion de Menu</Container>
        );
    }
}

export default SideMenu;