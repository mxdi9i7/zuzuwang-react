import React, {Component} from 'react';
import { Link } from 'react-router-dom'
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
                Pro Listings
                <ul className="collection">
                    { listings.map((listing, index)=> (
                        <li className="collection-item" key={index}><Link>{ listing.address }, { listing.price}</Link></li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ProListings