import React, {Component} from 'react';
import {Link} from 'react-router';
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
                <ul className="collection">
                    { listings.map((listing, index)=> (
                        <li className="collection-item" key={index}>{ listing.address }, { listing.price}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default FreeListings