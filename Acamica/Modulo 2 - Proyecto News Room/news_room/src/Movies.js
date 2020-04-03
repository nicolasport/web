import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.ul`
    color: #000000;
`;

const Movie = styled.li`
    margin: .5em 0;
`;

class Movies extends Component {
    APY_KEY_MOVdb;
    constructor(props) {
        super(props);

        this.state={
            movies: []
        }
    }


    componentDidMount() {

        const fetchMovies = async () => {
            const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=5aee7fa2bc840cbc9031bdeb442321c4');
            const json = await response.json();
            console.log("KEY: "+process.env.APY_KEY);
            console.log(json);

            this.setState({
                movies: json.results
            })
        }
        fetchMovies();
    }

    render() {
        return (
            <Container>
                {this.state.movies.map((movie, key) => <Movie key={[key,movie.title].join("-")}>{movie.title} </Movie>)}
            </Container>
        );
    }
}

export default Movies;