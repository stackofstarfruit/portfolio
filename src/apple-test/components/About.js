import '../Test.css';
import logo from '../apple.png';
import { Link } from "react-router-dom";

function About() {
    return (
        <header className="App-header">
            <h1>THE APPLE TEST</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <br></br>
            <article>
                The Apple Test is a personality quiz that argues people have three layers.
            </article>
            <br />
            <button className="btn btn2">
                <Link to="/apple-test">Back to Test</Link>
            </button>
        </header>
    )
}

export default About;