import React, { Component } from 'react'
import './App.css';
import Hero from './components/Hero'; 
import Filters from './components/Filters';
import Hotels from './components/Hotels';
import Moment from 'moment';

const today = new Date();


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filters: {
        dateFrom:  Moment(today).format("YYYY-MM-DD"), // Proviene del archivo data.js
        dateTo: Moment(new Date(today.valueOf() + 29999999999)).format("YYYY-MM-DD"),
        country: '',
        price: "0",
        rooms: "0"
      },
      hotels : [],
      cantResultados : undefined
    }

    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.ApplyFiltersToData = this.ApplyFiltersToData.bind(this)

  }



  async componentDidMount() {
    try {
        const response = await fetch('https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica');
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        this.setState({
            hotels: json,
        });
        this.handleFilterChange(this.state.filters)
    } catch (error) {
        console.log(error);
    }
  }

  handleFilterChange(payload) {
    this.setState({
      filters : payload
    })
  }

  ApplyFiltersToData(data){
    let filteredHotels = data
      .filter((data) => {
        return Moment(data.availabilityFrom).format("YYYY-MM-DD") >= Moment(this.state.filters.dateFrom).format("YYYY-MM-DD")
                && Moment(data.availabilityTo).format("YYYY-MM-DD") <= Moment(this.state.filters.dateTo).format("YYYY-MM-DD")
                && data.price ===  (this.state.filters.price !== "0" ? parseInt(this.state.filters.price) : data.price)
                && data.country === (this.state.filters.country !== '' ? this.state.filters.country : data.country)
                && data.rooms <= (this.state.filters.rooms !== "0" ? this.state.filters.rooms : data.rooms)
    })
    return filteredHotels
  }

  render() {
    return (
      <div>
        <Hero filters={ this.state.filters } />
        <Filters  onFilterChange={ this.handleFilterChange } filters={ this.state.filters } />
        <Hotels  data={this.ApplyFiltersToData(this.state.hotels) } />
      </div>
    );
  }
}

export default App;
