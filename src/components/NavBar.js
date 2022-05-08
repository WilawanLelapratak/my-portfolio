import React, { Component } from 'react'
import NavItems from './NavItems'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavBarItemActive': ''
        }
    }

    render() {
        return(
            <nav>
                <ul>
                    <NavItems item="Home" tolink="/"></NavItems>
                    <NavItems item="About" tolink="/about"></NavItems>
                    <NavItems item="Education" tolink="/education"></NavItems>
                    <NavItems item="Experience" tolink="/experience"></NavItems>
                    <NavItems item="Skills" tolink="/skills"></NavItems>
                    <NavItems item="Contact" tolink="/contact"></NavItems>
                </ul>
            </nav>
        )
    }
}

export default NavBar