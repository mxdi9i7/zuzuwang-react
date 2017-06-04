import React, {Component} from 'react';
import {Link} from 'react-router';
import Nav from './Nav';
import {getProListingData} from './utils/ListingsApi'

class ProListings extends Component {

    constructor() {
        super()
        this.state = {
            listings: []
        }
    }

    getProListings() {
        getProListingData().then((listings)=> {
            this.setState({listings})
        })
    }

    componentDidMount() {
        this.getProListings()
    }
    render() {
        const { listings } = this.state;

        return (
            <div>
                <Nav />
                <ul className="collection">
                    { listings.map((listing, index)=> (
                        <li className="collection-item" key={index}>{ listing.address }, { listing.price}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ProListings