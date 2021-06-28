import React from 'react'
import { SidebarData } from './SidebarData'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components'
import { templateCss } from '../styles/templateCSS';
import Tooltip from '@material-ui/core/Tooltip';

const Container = styled.div`
    background-color: ${templateCss.blue.color};
    li div:hover {
        background-color: ${templateCss.blue.hoverColor}
    }
`




function Sidebar() {
    return (
        <Container>
            <aside>
                    <ul>
                        {SidebarData.map((val, key) => {
                            return (
                                <Tooltip key={key} title={val.title} placement="right">
                                    <Link to={val.link} key={key}>
                                        <li id={window.location.pathname === val.link ? "active" : ""}>
                                            <div>
                                                <span>{val.icon}</span>
                                            </div>
                                        </li>
                                    </Link>
                                </Tooltip>

                            )
                        })}
                    </ul>
            </aside>
        </Container>
    )
}

export default Sidebar
