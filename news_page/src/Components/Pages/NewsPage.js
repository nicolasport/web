import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Modal from "../Modal"
import MediaCard from "../NewsCard"
import CircularIndeterminate from "../LoadingAnimation"


const NewPageTemplate = (data) => { //! VER PORQ llega data.articles como data.data(nombre variable function).articles  
    let datos = data.data
    return (
    <Grid container  style={{maxHeight: '100vh', overflow: 'auto'}}>

        {datos.articles.map((article, index) => (
            <Grid key={index+Math.random()}item xs={3}>
                <MediaCard 
                    key={index+Math.random()} 
                    description={article.description} 
                    title={article.title} 
                    urlToImage={article.urlToImage}
                    url={article.url}
                />
                <Modal url={article.url}/>
            </Grid>

        ))}
    </Grid>
    )
}



export default class NewsPage extends Component {
    constructor(props){
        super(props)
        
        this.state={
            dataNews: null
        }
    }

    componentDidMount() {
        // GET request using fetch with error handling
        fetch('https://newsapi.org/v2/top-headlines?sources=google-news-ar&apiKey=fc63d156138543689e699cd9c3ddc6b9')
            .then(async response => {
                const data = await response.json();
    
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response statusText
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }

                this.setState({ dataNews: data })
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }

    render() {
        let fetchData = null
        if (this.state.dataNews === null) {
            return <CircularIndeterminate/>
        } else {
            fetchData=this.state.dataNews
        }
        return (
                <NewPageTemplate data={fetchData}/>
            

        )
    }
}


