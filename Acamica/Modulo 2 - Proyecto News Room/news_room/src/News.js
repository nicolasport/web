import React, {Component} from 'react';
import styled from "styled-components";
import Imagen from "./imagenNew.jpg";
import Box from 'react-bulma-components/lib/components/box';
import Media from 'react-bulma-components/lib/components/media';
import Image from 'react-bulma-components/lib/components/image';
import Content from 'react-bulma-components/lib/components/content';



class News extends Component {
    render() {
        const Container = styled.main`
          padding: 10px;
        `;

        const styleMain = {
            display: "flex",
            flexFlow: "column",
            backgroundColor: 'rgb(153, 215, 174)',
            flexGrow: 20,
            flexWrap: "wrap",
            width: "50%",
            
        }
        const styleBox = {
            padding:3,
        }
        return (
            // <Container style={styleMain}>
            //     <div>Noticias</div>
            //     <div className={"box"}>
            //         <div className={"image"}>
            //             foto
            //         </div>
            //         <div className={"content"}>
            //             <div className={"title"}>Titulo de noicia</div>
            //             <div className={"text"}>
            //                 <p>Phar </p>
            //             </div>
            //         </div>
            //     </div>
            // </Container>
            <Container style={styleMain}>
                <Box style={styleBox}>
                    <Media style={{alignItems:"center"}}>
                    <Media.Item renderAs="figure" position="left">
                        <Image size={128} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
                    </Media.Item>
                    <Media.Item>
                        <Content>
                        <p>
                            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                            <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        </p>
                        </Content>
                    </Media.Item>
                    </Media>
                </Box>
                <Box style={styleBox}>
                    <Media style={{alignItems:"center"}}>
                    <Media.Item renderAs="figure" position="left">
                        <Image size={128} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
                    </Media.Item>
                    <Media.Item>
                        <Content>
                        <p>
                            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                            <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        </p>
                        </Content>
                    </Media.Item>
                    </Media>
                </Box>
                <Box style={styleBox}>
                    <Media style={{alignItems:"center"}}>
                    <Media.Item renderAs="figure" position="left">
                        <Image size={128} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
                    </Media.Item>
                    <Media.Item>
                        <Content>
                        <p>
                            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                            <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        </p>
                        </Content>
                    </Media.Item>
                    </Media>
                </Box>
            </Container>
        );
    }
}

export default News;