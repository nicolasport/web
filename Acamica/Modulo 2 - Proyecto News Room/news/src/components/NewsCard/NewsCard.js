import React from 'react';
import { Container, Titulo, Imagen, Descripcion, Boton} from './styleCss'



export default function NewsCard (props) {
    return (
        <Container>
            <Titulo>{props.title}</Titulo>
            <Imagen alt=""  src={props.urlToImage}></Imagen>
            <Descripcion>{props.description}</Descripcion>
            <Boton style={{textDecoration:'none'}} href={props.url} target="_blank" rel="noopener noreferrer">Leer Noticia</Boton>
        </Container>
    );
}