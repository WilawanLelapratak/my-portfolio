import React, { Component } from 'react'
import NavItems from './NavItems'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavBarItemActive': ''
        }
    }

    activeitem = (item) => {
        if (this.state.NavBarItemActive.length > 0) {
            document.getElementById(this.state.NavBarItemActive).classList.remove('active');
        }
        this.setState({ 'NavBarItemActive': item }, () => {
            document.getElementById(this.state.NavBarItemActive).classList.add('active');
        })
    }

    render() {
        return(
            <nav>
                <ul>
                    <NavItems item="Home" tolink="/" activenav={this.activeitem}></NavItems>
                    <NavItems item="About" tolink="/about" activenav={this.activeitem}></NavItems>
                    <NavItems item="Education" tolink="/education" activenav={this.activeitem}></NavItems>
                    <NavItems item="Experience" tolink="/experience" activenav={this.activeitem}></NavItems>
                    <NavItems item="Skills" tolink="/skills" activenav={this.activeitem}></NavItems>
                    <NavItems item="Contact" tolink="/contact" activenav={this.activeitem}></NavItems>
                </ul>
            </nav>
        )
    }
}

export default NavBar