import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import profile from "./profile.jpeg";

function Main({count, setCount}) {
    return (
        <body>
            <h1 id="name"> KEVIN KODAMA</h1>
            <section class="section-container" id="intro-container">
                <img src={profile} alt="Picture of Kevin Kodama" />
                <article>
                    <p>
                        Hello! My name is Kevin and I am a third-year student at the
                    University of Washington interested in front-end web development
                    and data science. Welcome to my portfolio!
                    </p>
                    <p>
                        I am interested in how information is conveyed, especially when
                    it comes to learning. I consider myself a lifelong learner, and
                    my work as both an academic trivia writer and tutor helps me
                    learn every day.
                    </p>
                    <p>
                        Contact me at my socials below!
                    </p>
                    <p>
                        <a href="mailto:khkkhk256@gmail.com">khkkhk256@gmail.com</a>
                        &nbsp;|&nbsp;
                        <a href="https://www.github.com/stackofstarfruit">GitHub</a>
                        &nbsp;|&nbsp;
                        <a href="https://www.linkedin.com/in/kevin-kodama-165a46195/">LinkedIn</a>
                    </p>
                </article>
            </section>
            <section class="section-container" id="gallery">
            <div class="project-container">
                <div>
                    <Link to="/apple-test">The Apple Test</Link>
                </div>
                <p>A personality test based on apple layers that I made to learn React.</p>
            </div>
            <div class="project-container">
                <a href="https://stackofstarfruit.shinyapps.io/Wandering_Inn_7/">
                The Wandering Inn
                </a>
                <p>Data viz I did for the longest English novel, <em>The Wandering Inn</em>.</p>
            </div>
            <div class="project-container">
                <a href="https://stackofstarfruit.shinyapps.io/march-madness-visualizer/">
                March Madness
                </a>
                <p>Data viz I did to predict the 2021 NCAA March Madness Tournament</p>
            </div>
            <div class="project-container">
                <div>
                    <Link to="/akg-notation">AKG Notation</Link>
                </div>
                <p>A mathematical notation system that I developed with two friends.</p>
            </div>
            <div class="project-container">
                <a href="https://students.washington.edu/quizbowl">
                Quizbowl Website
                </a>
                <p>A website I designed for my UW RSO, quizbowl.</p>
            </div>
            <div class="project-container">
                <a href="https://www.google.com">Itinerary Planner</a>
                <p>A destination app I plan to make with the Google Maps API</p>
            </div>
            </section>
        </body>
    )
}

export default Main;