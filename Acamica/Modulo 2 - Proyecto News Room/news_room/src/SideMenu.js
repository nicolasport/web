import React, {Component} from 'react';
import styled from "styled-components";
import Icon from '@mdi/react';
import { mdiBullhorn, mdiNewspaperVariantMultiple, mdiBagChecked, mdiStar, mdiCardsHeart, mdiFlaskEmptyOutline, mdiTrophy, mdiChip, mdiClock, mdiAccount } from '@mdi/js';

import Menu from 'react-bulma-components/lib/components/menu';
import reactCSS, { hover } from 'reactcss';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: wrap;   
    border:
`;

const MainStyel = {
    backgroundColor:'rgb(0, 0, 0)',
    flexGrow: 1,
    color: "white",
    boxShadow:"1px 1px 6px 3px rgba(0,0,0,0.75)",

}

const MenuStyle = reactCSS({
    'default':{
        a:{
            color: "white"
        }
    },
})


class SideMenu extends Component {
    render() {
        return (
            <Container style={MainStyel}>
                <div className={"menu-title"}> <Icon path={mdiBullhorn} size={2}/> <p>Title Icon</p></div>
                <Menu style={MenuStyle.a}>
                    <Menu.List title="Principaless">
                        <Menu.List.Item ><Icon path={mdiNewspaperVariantMultiple} size={1}/><p>Negocios</p></Menu.List.Item>
                        <Menu.List.Item><Icon path={mdiBagChecked} size={1}/><p>Entretenimiento</p></Menu.List.Item>
                        <Menu.List.Item><Icon path={mdiStar} size={1}/><p>Interes general</p> </Menu.List.Item>
                        <Menu.List.Item><Icon path={mdiCardsHeart} size={1}/><p>Salud</p></Menu.List.Item>
                        <Menu.List.Item><Icon path={mdiFlaskEmptyOutline} size={1}/><p>Ciencia</p></Menu.List.Item>
                        <Menu.List.Item><Icon path={mdiTrophy} size={1}/><p>Deportes</p></Menu.List.Item>
                        <Menu.List.Item><Icon path={mdiChip} size={1}/><p>Tecnologia</p></Menu.List.Item>
                        <Menu.List.Item><Icon path={mdiClock} size={1}/><p>Ultimas noticias</p></Menu.List.Item>
                        <Menu.List.Item><Icon path={mdiAccount} size={1}/><p>Para ti</p></Menu.List.Item>
                    </Menu.List>
                </Menu>

            </Container>
        )
    }
}

export default SideMenu;