import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
            <div className="condiv about">
                <h1 className="subtopic">About Me</h1>
                <img src="https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.18169-9/26055863_10209915097305588_8829068986009356735_n.jpg?_nc_cat=105&ccb=1-6&_nc_sid=174925&_nc_ohc=DIHLqfxIPKwAX8R7ZWc&_nc_ht=scontent.fbkk22-2.fna&oh=00_AT-2jgC7IDC7_vkjPjBexH6kbcWJ-3KKiCLFVW1m4KO00A&oe=62A40C9E" alt="profile" className="profilepic" />
                <h3>Hi, I'm Wilawan</h3>
                <p>My career objective is to become a software tester where I have to use my skills and knowledge for the development of the project, where strong project management and analytical skill will be useful in the delivery of the services to the customer.</p>
            </div>
        );
    }
}

export default About;
