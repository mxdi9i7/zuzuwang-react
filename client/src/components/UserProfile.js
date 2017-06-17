import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Nav from './Nav';
import {getFreeListingData} from './utils/ListingsApi'

class UserProfile extends Component {

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

export default ProListings