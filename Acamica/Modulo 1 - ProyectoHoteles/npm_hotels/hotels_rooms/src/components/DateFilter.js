import React, { Component } from 'react'
import Moment from 'moment';

class DateFilter extends Component {
    constructor(props) {
    super(props)


    this.handleDateChange = this.handleDateChange.bind(this)
    }

    handleDateChange(event) {
    this.props.onDateChange(event)   
    }



    render() {
        return (
        <div className="field">
            <div className="control has-icons-left">
                <input className="input" type="date" onChange={this.handleDateChange} name={ this.props.name } value={Moment(this.props.date).format("YYYY-MM-DD")}/>
                <span className="icon is-small is-left"> 
                    <i className={'fas fa-' + this.props.icon}></i>
                </span>
            </div>
        </div>
        );
    }
}

export default DateFilter;