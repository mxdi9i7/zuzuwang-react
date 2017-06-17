import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Nav from './Nav';
import {getAllUsersData} from './utils/UserApi'
import {getFreeListingData} from './utils/ListingsApi'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            listings: []
        }
    }
    getAllUsers() {
        getAllUsersData().then((users)=> {
            this.setState({users: users})
        })
    }
    
    getFreeListings() {
        getFreeListingData().then((listings)=>{
            this.setState({listings: listings})
        })
    }
     componentDidMount() {
        this.getAllUsers()
        this.getFreeListings()
    }

    render() {
       console.log(this.state)
        const  users  = this.state.users;
        const  listings  = this.state.listings
        return (
            <div>
                <Nav />
                <div className="home-listings-collection">
                    <div className="collection">
                        { listings.map((listing, index) => (
                        
                            <div key={index}><Link className="collection-item" to={{ pathname: '/listings/' + listing._id}} >{index + 1}. { listing.address }</Link></div>
                        ))}
                    </div>
                </div>
                <ul>
                    { users.map((user, index) => (
                        
                    <li key={index}><Link to={{ pathname: '/user/' + user._id}} >{ user.email }</Link></li>
                    ))}
                </ul>

            </div>
        )
    }
}

export default Home