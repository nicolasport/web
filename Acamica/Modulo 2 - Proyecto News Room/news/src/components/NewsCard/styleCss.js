import styled from 'styled-components'
import { templateCss } from '../styles/templateCSS';

export const Container = styled.div`
    max-height: 510px;
    min-width: 300px;
    background-color: #ffffff;
    display: grid;
    grid-gap: 0px;
    grid-template-rows: 0.1fr 1.5fr 0.7fr;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 1px 1px 4px 0px #313b3b94;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 12%);
    @media (max-width: 1071px) {
        max-height: 590px;
        min-width: 490;
        max-width: 517px;;
        display: grid;
        grid-gap: 0px;
        grid-template-rows: 10% 65% 13%;
        align-self: center;
        justify-self: center;
    }

`
export const Titulo = styled.h1`
    font-size: 23px;
    color: ${templateCss.blue.color};
    height: 60px;
    display: flex;
    align-items: center;
    align-self: center;
    justify-self: center;
    @media (max-width: 1071px) {
        height: 40px;
        padding: 10px;
    }
`
export const Imagen = styled.img`
    display: block;
    width: 100%;
    height: 1rem;
    min-height: 250px;
    align-self: center;
    justify-self: center;
    border-style: solid;
    border-width: 1px;
    border-color: gray;
    @media (max-width: 1071px) {
        width: 100%;
        height: 100%;
    }
`
export const Descripcion = styled.p`
    overflow: hidden;
    padding: 10px;
    margin-top: 5px;
    @media (max-width: 1071px) {
        padding: 10px;
    }
`
export const Boton = styled.a`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border-radius: 10px;
    background-color: ${templateCss.blue.color};
    color: rgb(218, 218, 218);
    height: 35px;
    &:hover{
        background-color:  ${templateCss.blue.hoverColor}
    }
`