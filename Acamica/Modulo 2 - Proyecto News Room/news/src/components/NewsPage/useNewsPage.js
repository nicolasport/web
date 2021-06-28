//COMPONENTE DE LOGICA
import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router";

export const useNewsPage = (props) => {
const [page, setPage] = useState(1);         //Numero de pagina de paginacion
const [search, setSearchI] = useState('');   //Palabra a buscar
let location = useLocation();                //Path de Router
let cantNewsToShow = 6                       //Paginacion => Cant de noticias a mostrar

//Fetch a API Canillitas con Redux Thunk
useEffect(() => {
    props.updateNewsList(location.pathname, search); //ReduxT
    setPage(1)                                       //Reset paginacion en cambio de categoria
}, [location]);


//True si datos estan cargados
let datos = props.news
let prepareToRender = false
datos.length === 0 ? (prepareToRender = false) : (prepareToRender = true)

//Paginacion => pagina seleccionada => state
const handlePage = (event, pageNumber) => {
    setPage(pageNumber)
}

const handleSearchI = (e) => {
    setSearchI(e.target.value)               //Palabra a buscar
}



//Paginacion => Cant de paginas en base a la cant de noticias
let cantTotalPaginas = 0
datos.length % cantNewsToShow === 0
    ? cantTotalPaginas = (datos.length / cantNewsToShow)
    : cantTotalPaginas = (parseInt(datos.length / cantNewsToShow) + 1)

//Paginacion => Corte de datos
let sliceIni = (page * cantNewsToShow - cantNewsToShow)
let sliceEnd = (page * cantNewsToShow)
page !== cantTotalPaginas
    ? sliceEnd = (page * cantNewsToShow)
    : sliceEnd = (datos.length)

return { 
    sliceIni, 
    sliceEnd,
    handleSearchI,
    handlePage,
    datos,
    prepareToRender,
    cantNewsToShow,
    cantTotalPaginas
    }
}