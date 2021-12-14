import './App.css';

function Main({count, setCount}) {
    return (
        <div className="main-container">
            <div className="desc-container">
                <p>Hello! My name is Kevin Kodama and I am a third-year student at the University of Washington interested in 
                front-end web development and data science. Welcome to my portfolio!</p>
                <p><i>(currently under construction)</i></p>
            </div>
            <div className="project-container">
                <div className="apple-test">
                    <button className="button_slide slide_left" onClick={() => setCount(1)}>The Apple Test</button>
                    <p>A personality test based on apple layers that I made to learn React.</p>
                </div>
                <div className="wandering-inn">
                    <a href="https://stackofstarfruit.shinyapps.io/Wandering_Inn_7/">
                        <button className="button_slide slide_left">The Wandering Inn</button>
                    </a>
                    <p>Data viz I did for the longest English novel, <i>The Wandering Inn</i>.</p>
                </div>
                <div className="akg-notation">
                    <button className="button_slide slide_left" onClick={() => setCount(3)}>AKG Notation</button>
                    <p>A mathematical notation system that I developed with two friends.</p>
                </div>
            </div>
            <div>
            <div className="map-photos">
                    <button className="button_slide slide_left" onClick={() => setCount(4)}>Map Photos (future)</button>
                    <p>Window shopping on Google Maps!</p>
                </div>
            </div>
        </div>
    )
}

export default Main;