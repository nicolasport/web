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
        icon: <HomeIcon style={{ fontSize: 40 }}/>,
        link: "/home"
    },
    {
        title: "Ciencia y Tecnologia",
        icon: <ComputerIcon style={{ fontSize: 40 }}/>,
        link: "/cienciaYtec"
    },
    {
        title: "Entretenimento",
        icon: <TheatersIcon style={{ fontSize: 40 }}/>,
        link: "/entretenimiento"
    },
    {
        title: "Negocios",
        icon: <CardTravelIcon style={{ fontSize: 40 }}/>,
        link: "/negocios"
    },
    {
        title: "Deportes",
        icon: <DirectionsBikeIcon style={{ fontSize: 40 }}/>,
        link: "/deportes"
    },
    {
        title: "Internacional",
        icon: <PublicIcon style={{ fontSize: 40 }}/>,
        link: "/internacional"
    },
]
