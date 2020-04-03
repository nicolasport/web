import React, {Component} from 'react';
import styled from "styled-components";

class News extends Component {
    render() {
        const Container = styled.main`
          width: 100%;
          padding: 10px;
        `;
        return (
            <Container>Sector de noticias</Container>
        );
    }
}

export default News;