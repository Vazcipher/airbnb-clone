import React, { Component } from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';

class navBar extends Component {

    render() {

        let navColor = 'transparent';
        if(this.props.location.pathname !== "/"){
            navColor = 'black'
        }

        return (
            <div className="container-fluid nav">
                <div className="row">
                    <nav className={navColor}>
                        <div className="nav-wrapper">
                            <Link to="/" >airbnb</Link>
                            <ul id="nav-mobile" className="right">
                                <li><Link>English</Link></li>
                                <li><Link>Rs</Link></li>
                                <li><Link>Become a Host</Link></li>
                                <li><Link>Help</Link></li>
                                <li><Link>Sign up</Link></li>
                                <li><Link>Log in</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
     );
    }
}

export default navBar;