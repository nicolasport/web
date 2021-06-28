import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import SpeakerIcon from '@material-ui/icons/Speaker';
import PersonalVideoIcon from '@material-ui/icons/PersonalVideo';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import CastIcon from '@material-ui/icons/Cast';
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";

const fontSize = { fontSize: 30}
    
export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon style={fontSize} />,
        link: "/"
    },
    {
        title: "Historico de Compra",
        icon: <HourglassEmptyIcon style={fontSize} />,
        link: "/redeem"
    },
    {
        title: "Phones",
        icon: <HeadsetMicIcon style={fontSize} />,
        link: "/Phones"
    },
    {
        title: "Gaming",
        icon: <SportsEsportsIcon style={fontSize} />,
        link: "/Gaming"
    },
    {
        title: "Laptops",
        icon: <LaptopMacIcon style={fontSize} />,
        link: "/Laptops"
    },
    {
        title: "Cameras",
        icon: <CameraAltIcon style={fontSize} />,
        link: "/Cameras"
    },
    {
        title: "Audio",
        icon: <SpeakerIcon style={fontSize} />,
        link: "/Audio"
    },
    {
        title: "Monitors & TV",
        icon: <PersonalVideoIcon style={fontSize} />,
        link: "/MonitorsTV"
    },
    {
        title: "Drones",
        icon: <AirplanemodeActiveIcon style={fontSize} />,
        link: "/Drones"
    },
    {
        title: "Phone Accessories",
        icon: <PhoneAndroidIcon style={fontSize} />,
        link: "/PhoneAccessories"
    },
    {
        title: "Smart Home",
        icon: <CastIcon style={fontSize} />,
        link: "/SmartHome"
    },
    {
        title: "PC Accessories",
        icon: <FlipCameraAndroidIcon style={fontSize} />,
        link: "/PcAccessories"
    },
    {
        title: "Tablets & E-readers",
        icon: <DevicesOtherIcon style={fontSize} />,
        link: "/TabletsAndEreaders"
    },

]

/*
0: "Phones"
1: "Gaming"
2: "Laptops"
3: "Cameras"
4: "Audio"
5: "Monitors & TV"
6: "Drones"
7: "Phone Accessories"
8: "Smart Home"
9: "PC Accessories"
10: "Tablets & E-readers"
*/