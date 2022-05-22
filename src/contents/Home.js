import React, { Component } from 'react'
import Social from '../components/Social'
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src="https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.18169-9/26055863_10209915097305588_8829068986009356735_n.jpg?_nc_cat=105&ccb=1-6&_nc_sid=174925&_nc_ohc=DIHLqfxIPKwAX8R7ZWc&_nc_ht=scontent.fbkk22-2.fna&oh=00_AT-2jgC7IDC7_vkjPjBexH6kbcWJ-3KKiCLFVW1m4KO00A&oe=62A40C9E" alt="profile" className="profilepic" />
                <ReactTypingEffect text={['I am Wilawan', 'I am a Software Test Engineer']} speed={100} eraseDelay={300} className="typingeffect" />
                <Social />
            </div>
        );
    }
}

export default Home;