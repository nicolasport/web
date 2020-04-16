import React, { Component } from 'react'
import Hotel from './Hotel';
import 'react-bulma-components/dist/react-bulma-components.min.css';


class Hotels extends Component {
    render() {
        return (
            <section className="section" style={ {marginTop: '3em'} }>
                <div className="container">
                    <div className="columns is-multiline">
                        {this.props.data.map((hotel, key) =>
                            <div key={key+"-"+hotel.slug} className="column is-one-third">
                                <Hotel data={ hotel } />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );
    }
}


export default Hotels;
