import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import PublicIcon from '@material-ui/icons/Public';
import TheatersIcon from '@material-ui/icons/Theaters';
import ComputerIcon from '@material-ui/icons/Computer';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon/>,
        link: "/"
    },
    {
        title: "Ciencia y Tecnologia",
        icon: <ComputerIcon/>,
        link: "/cienceAndTech"
    },
    {
        title: "Entretenimento",
        icon: <TheatersIcon/>,
        link: "/entretenimiento"
    },
    {
        title: "Negocios",
        icon: <CardTravelIcon/>,
        link: "/negocios"
    },
    {
        title: "Deportes",
        icon: <DirectionsBikeIcon/>,
        link: "/deportes"
    },
    {
        title: "Internacional",
        icon: <PublicIcon/>,
        link: "/internacional"
    },
]
