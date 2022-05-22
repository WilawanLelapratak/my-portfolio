import React, { Component } from 'react'
import Widecard from '../components/Widecard'

class Education extends Component {
    render() {
        return (
            <div className="condiv education">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Master of Engineering in Mechanical Engineering" where="Kasetsart University" from="2019" to="2021" />
                <Widecard title="Bachelor of Engineering in Computer Engineering" where="Kasetsart University" from="2015" to="2019" />
            </div>
        );
    }
}

export default Education;