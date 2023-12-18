import React, { Component } from 'react'
import { useState } from 'react'
import Social from '../components/Social'
import ReactTypingEffect from 'react-typing-effect'

function Input() {
    const [searchWord, setSearchWord] = useState("");
    return (
        <div>
            <input
                type="text"
                data-testid="searchBar"
                placeholder="Type here..."
                onChange={(e) => {
                    setSearchWord(e.target.value);
                }}
            />
            <h1 data-testid="displaySearch">{searchWord}</h1>
        </div>
    )
}

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src="https://scontent.fbkk22-6.fna.fbcdn.net/v/t39.30808-6/294350926_10219865595261818_2146654971334324806_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=KYMCS6N6UCkAX_wLaCD&_nc_ht=scontent.fbkk22-6.fna&oh=00_AfCZZR39mobmHLl9_Q2h2huyL4_MB31rQL5KKL3pvQwwPg&oe=6585660E" alt="profile" className="profilepic" />
                <ReactTypingEffect text={['I am Wilawan', 'I am a Software Quality Assurance Engineer']} speed={100} eraseDelay={300} className="typingeffect" />
                <Input />
                <Social />
            </div>
        );
    }
}

export default Home;