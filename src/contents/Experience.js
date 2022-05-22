import React, { Component } from 'react'
import Widecard from '../components/Widecard'

class Experience extends Component {
    render() {
        return (
            <div className="condiv experience">
                <h1 className="subtopic">My Experience</h1>
                <Widecard title="Software Test Engineering" where="Alstom Thailand Ltd." from="Aug 2021" to="Present" />
                <Widecard title="Internship Software Test Engineering" where="Alstom Thailand Ltd." from="Mar 2021" to="Aug 2021" />
                <Widecard title="Project Intern: Automatic Evacuation Guiding Under Flood Situation in Thailand" where="Graduate School of Science and Technology, Nara Institute of Science and Technology, Japan" from="May 2018" to="Jul 2018" />
                <Widecard title="Language Study Activity Program for Youth Overseas Compatriot Affairs Commission" where="NTNU Extension, School of Continuing Education" from="Mar 2011" to="Apr 2011" />
            </div>
        );
    }
}

export default Experience;