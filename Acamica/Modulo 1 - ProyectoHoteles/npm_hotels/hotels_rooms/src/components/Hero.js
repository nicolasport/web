import React, { Component } from 'react';


class Hero extends Component {
    render() {
        let dateFromT = this.props.filters.dateFrom
        let dateToT = this.props.filters.dateTo

        let countryT = ""
        if (this.props.filters.country !== "" ) {
        countryT="en "+this.props.filters.country
        }

        let priceT = ""
            let valueS = ["$","$$","$$$","$$$$"]
            if (parseInt(this.props.filters.price) !== 0){
                priceT = "por  " + valueS[parseInt(this.props.filters.price)-1]
            }
            let roomsT= ''
            if (this.props.filters.rooms !== "0"){
                if (this.props.filters.rooms === "30"){
                    roomsT = "con mas de " + (parseInt(this.props.filters.rooms) - 10).toString() + " habitaciones"
                }else{
                    roomsT = "de hasta  " + this.props.filters.rooms.toString() + " habitaciones"
                    }
            }
        let cantResultados = this.props.cantRes
        
        return (
        <section className="hero is-primary">
            <div className="hero-body">
            <div className="container">
                <h1 className="title">Hoteles</h1>
                <h2 className="subtitle">
                desde el <strong>{dateFromT}</strong> hasta el <strong>{dateToT}</strong> {countryT} {priceT} {roomsT} {cantResultados}
                
                </h2>
            </div>
            </div>
        </section>
        );
    }
}

export default Hero;