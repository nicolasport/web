import React, { Component } from 'react'
import DateFilter from './DateFilter';
import OptionsFilter from './OptionsFilter';
import Moment from 'moment';

class Filters extends Component {
    constructor(params) {
        super(params)

        this.handleDataChange = this.handleDataChange.bind(this)
        this.handleOptionChange = this.handleOptionChange.bind(this)
    }

    dateConvert(textData){
        //Convert Data type text  to Data type Date
        let [year, month, day] = textData.split("-")
        year = parseInt(year) 
        month = (parseInt(month-1))
        day = (parseInt(day))
        let date = new Date(year, month, day)

        return date
    }

    handleDataChange(event) {
        let dataType = Moment(event.target.value).format("YYYY-MM-DD")
        let payload = this.props.filters
        payload[event.target.name] = dataType
        this.props.onFilterChange(payload)
    }

    handleOptionChange(event){    
        let payload = this.props.filters
        payload[event.target.name] = event.target.value
        this.props.onFilterChange(payload)
    }

    render() {
        return (
        <nav className="navbar is-info" style={ {justifyContent: 'center'} }>
            <div className="navbar-item">
            <DateFilter
                name="dateFrom"
                onDateChange={this.handleDataChange}
                date={ this.props.filters.dateFrom}
                icon="sign-in-alt" />
            </div>
            <div className="navbar-item">
            <DateFilter
                name="dateTo"
                onDateChange={this.handleDataChange}
                date={ this.props.filters.dateTo }
                icon="sign-out-alt" />
            </div>
            <div className="navbar-item">
            <OptionsFilter
                name="country"
                OnOptionChange={this.handleOptionChange}
                options={ [ {value: '', name: 'Todos los países'}, {value: 'Argentina', name: 'Argentina'}, {value: 'Brasil', name: 'Brasil'}, {value: 'Chile', name: 'Chile'}, {value: 'Uruguay', name: 'Uruguay'} ] }
                selected={ this.props.filters.country }
                icon="globe" />
            </div>
            <div className="navbar-item">
            <OptionsFilter
                name="price"
                OnOptionChange={this.handleOptionChange}
                options={ [ {value: 0, name: 'Cualquier precio'}, {value: 1, name: '$'}, {value: 2, name: '$$'}, {value: 3, name: '$$$'}, {value: 4, name: '$$$$'} ] }
                selected={ this.props.filters.price }
                icon="dollar-sign" />
            </div>
            <div className="navbar-item">
            <OptionsFilter
                name="rooms"
                OnOptionChange={this.handleOptionChange}
                options={ [ {value: 0, name: 'Cualquier tamaño'}, {value: 10, name: 'Hotel pequeño'}, {value: 20, name: 'Hotel mediano'}, {value: 30, name: 'Hotel grande'} ] }
                selected={ this.props.filters.rooms }
                icon="bed" />
            </div>
        </nav>
        );
    }
}

export default Filters;
