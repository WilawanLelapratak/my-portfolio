import React, { Component } from 'react'


class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'myskills': ['HTML', 'CSS', 'ReactJS', 'C', 'C#', 'python', 'SQL', 'CI/CD', 'JENKINS', 'Robot Framework', 'Postman', 'Docker', 'MATLAB', 'Linux', 'Git']
        }
    }

    render() {
        return (
            <div className="condiv skills">
                <h1 className="subtopic">My Skills</h1>
                <ul>
                    {this.state.myskills.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Skills;