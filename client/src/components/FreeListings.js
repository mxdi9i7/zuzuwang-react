import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Nav from './Nav';
import {getFreeListingData} from './utils/ListingsApi'

class FreeListings extends Component {

    constructor() {
        super()
        this.state = {
            listings: []
        }
    }

    getFreeListings() {
        getFreeListingData().then((listings)=> {
            this.setState({listings})
        })
    }

    componentDidMount() {
        this.getFreeListings()
    }
    render() {
        const { listings } = this.state;

        return (
            <div>
                <Nav />
                Free Listings
                <ul className="collection">
                    { listings.map((listing, index)=> (
                        <li className="collection-item" key={index}><Link to="">{ listing.address }, { listing.price}</Link></li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default FreeListings