import React, { Component } from 'react'

class Hotel extends Component {
    constructor(params) {
        super(params)
    
        this.state={
        items: []
        }
    }
    
    render() {
        let priceSimbolOk= [<i key={1} className="fas fa-dollar-sign" style={{margin: '0 .125em', opacity: '1'}}></i>]
        let PriceSimbolNotOk= [<i key={1} className="fas fa-dollar-sign" style={{margin: '0 .125em', opacity: '.25'}}></i>]
    
        return (
            <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                <img src={(`${this.props.data.photo}`)} alt="Sainte Jeanne Boutique & Spa" />
                </figure>
            </div>
            <div className="card-content">
                <p className="title is-4">{this.props.data.name}</p>
                <p>{this.props.data.description}</p>
                <div className="field is-grouped is-grouped-multiline" style={{marginTop: '1em'}}>
                <div className="control">
                    <div className="tags has-addons">
                    <span className="tag is-medium is-info"><i className="fas fa-map-marker"></i></span>
                    <span className="tag is-medium">{this.props.data.city}, {this.props.data.country}</span>
                    </div>
                </div>
                <div className="control">
                    <div className="tags has-addons">
                    <span className="tag is-medium is-info"><i className="fas fa-bed"></i></span>
                    <span className="tag is-medium">{this.props.data.rooms} Habitaciones</span>
                    </div>
                </div>
                <div className="control">
                    <div className="tags">
                    <span className="tag is-medium is-info">
                        {this.props.data.price >= 1 ? (priceSimbolOk):(PriceSimbolNotOk)}
                        {this.props.data.price >= 2 ? (priceSimbolOk):(PriceSimbolNotOk)}
                        {this.props.data.price >= 3 ? (priceSimbolOk):(PriceSimbolNotOk)}
                        {this.props.data.price === 4 ? (priceSimbolOk):(PriceSimbolNotOk)}
                    </span>
                    </div>
                </div>
                </div>
            </div>
            <div className="card-footer">
                <button onClick={() => alert("Funcion no disponible")} className="card-footer-item has-background-primary has-text-white has-text-weight-bold">Reservar</button>
            </div>
            </div>
        );
        
    
    }
}

export default Hotel;