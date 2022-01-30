import '../Test.css';
import logo from '../apple.png';
import Typewriter from "typewriter-effect"
import { Link } from "react-router-dom";

function Start({count, setCount}) {
    return (
        <header className="App-header">
            <h1>THE APPLE TEST</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <br></br>
            <div className="type-container">
                How&nbsp;
                <Typewriter
                    options={{
                        strings: ['wack', 'normie', 'wack', 'normie', 'quirky'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                are you?
            </div>
            <button className="btn btn2" onClick={() => setCount(count + 1)}>
                Take the Quiz!
            </button>
            <br />
            <button className="btn btn2">
                <Link to="/">About the Test</Link>
            </button>
        </header>
    )
}

export default Start;