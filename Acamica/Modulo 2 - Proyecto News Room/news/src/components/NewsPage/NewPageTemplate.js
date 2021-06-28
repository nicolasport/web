//COMPONENTE PRESENTACIONAL

import React, { Fragment}  from 'react'

import NewsCard from "../NewsCard/NewsCard"
import CircularIndeterminate from "../LoadingAnimation"


import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {useNewsPage} from "./useNewsPage"
import {SearchBar} from "../SearchBar/indexTemplate"
import { Paginacion } from '../Paginacion/indexTemaplate';




export function NewPageTemplate(props){
    const {
        sliceIni,
        sliceEnd,
        handleSearchI,
        handlePage,
        datos,
        prepareToRender,
        cantTotalPaginas,
        cantNewsToShow } = useNewsPage(props)    

    
    return (
        <Fragment>
            {prepareToRender //Valida si datos estas cargados
                ? //OnSuccess Fetch
                    <div class="newsContainer">
                        <SearchBar  handleSearchI={handleSearchI}/>
                        
                        {datos.slice(sliceIni, sliceEnd).map((article, index) => (
                            <NewsCard
                                key={index + Math.random()}
                                description={article.title}
                                title={article.source_name}
                                urlToImage={article.img_url}
                                url={article.url}
                            />
                        ))}    

                        <Paginacion handlePage={handlePage} cantTotalPaginas={cantTotalPaginas}/>
                            
                    </div>
                
                
                : //OnWait Fetch
                    <CircularIndeterminate />
            }
        </Fragment>
        )
    
}
