import React from 'react'
import '../App.css';
import { SidebarData } from './SidebarData'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';





function Sidebar() {
    return (
        <div className="Sidebar">
            <Router>
                <ul className="SidebarList">
                    {SidebarData.map((val, key) => {
                        return (
                            <li
                                key={key}
                                className="row"
                                id={window.location.pathname === val.link ? "active" : ""}
                                //onClick={() => (window.location.pathname = val.link)}
                            >
                                {/*<div id="icon">{val.icon}</div>
                                <div id="title">{val.title}</div>*/}
                                <Link id="icon" to={val.link}><div id="title">{val.title}</div></Link>
                            </li>

                        )

                    })}
                </ul>
                <Switch>
                    <Route></Route>
                    {/* <Route exact path="/" component={NewsPage} />
                    <Route exact path="/cienceAndTech" component={NewsSport} />
                    <Route exact path="/contacto" component={Contacto} /> */}
                </Switch>
            </Router>
        </div>
    )
}

export default Sidebar
