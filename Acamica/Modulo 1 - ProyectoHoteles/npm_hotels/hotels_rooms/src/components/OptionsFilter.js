import React, { Component } from 'react'

class OptionsFilter extends Component {
    constructor(params) {
    super(params)
    this.handleOptionChange = this.handleOptionChange.bind(this)
    }

    handleOptionChange(event) {  
    this.props.OnOptionChange(event)
    }

    render() {
    return (
        <div className="field">
        <div className="control has-icons-left">
            <div className="select" style={ {width: '100%'} }>
            <select value={this.props.select} name={ this.props.name } onChange={this.handleOptionChange} style={ {width: '100%'} }>
                {this.props.options.map((option, key) =>
                <option  key={key+"-"+option.value} value={option.value} >{option.name}</option>
                )}
            </select>
            </div>
            <div className="icon is-small is-left">
            <i className={"fas fa-" + this.props.icon}></i>
            </div>
        </div>
        </div>
    );
    }
}

export default OptionsFilter;