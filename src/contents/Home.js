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
            <h1 data-testid="displaySearch"> {searchWord} </h1>
        </div>
    )
}

class Home extends Component {
    render() {
        // const [showDiv, setShowDiv] = useState(true);
        return (
            <div className="condiv home">
                <img src="https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.18169-9/26055863_10209915097305588_8829068986009356735_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=f9PgE7l0J1UAX_A92T7&_nc_ht=scontent.fbkk22-2.fna&oh=00_AT8l8ZfcwUqa0zslrI1nBv5toF8a7ylmZaaarvRYaqIW9w&oe=62CB999E" alt="profile" className="profilepic" />
                <ReactTypingEffect text={['I am Wilawan', 'I am a Software Test Engineer']} speed={100} eraseDelay={300} className="typingeffect" />
                <Input />
                <Social />
            </div>
        );
    }
}

export default Home;