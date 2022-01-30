import '../Test.css';

function Quiz({count, setCount, skin, setSkin, flesh, setFlesh, core, setCore}) {
    const questions = [
        "Do you generally stand out in a group?",
        "Do other people tell you that you make an unforgettable first impression?",
        "Are you generally considered to be a 'weird' person by acquaintances?",
        "Do you find it difficult to blend in in many social situations?",
        "Do you cultivate an unusual appearance or 'brand'?",
        "Do you act a lot stranger with close friends?",
        "Do you have many unusual and/or niche interests?",
        "Are you easily convinced to do ridiculous things?",
        "Do your friends have a lot of stories about you that they might tell to a stranger?",
        "Do people's perceptions of you usually change a lot as you get to know them?",
        "Deep down, do you think your motivations are different from most people's?",
        "Have you ever been told by a close friend that you are difficult to get to know?",
        "Do you feel mostly comfortable around strange people?",
        "Are you generally skeptical of the way people do things?",
        "Is life stability relatively low on your list of priorities?"
    ];
    const num_questions = 15;
    //const [skin, setSkin] = useState(0);
    //const [flesh, setFlesh] = useState(0);
    //const [core, setCore] = useState(0);

    function clear() {
        setCount(0);
        setSkin(0);
        setFlesh(0);
        setCore(0);
    }

    function unsure() {
        setCount(count + 1);
    }

    function plus() {
        setCount(count + 1);
        if(count <= (num_questions / 3)) {
            setSkin(skin + 1/3);
        } else if(count <= (2 * num_questions / 3)) {
            setFlesh(flesh + 1/3)
        } else {
            setCore(core + 1/3)
        }
    }

    function minus() {
        setCount(count + 1);
        if(count <= (num_questions / 3)) {
            setSkin(skin - 1/3);
        } else if(count <= (2 * num_questions / 3)) {
            setFlesh(flesh - 1/3)
        } else {
            setCore(core - 1/3)
        }
    }


    return(
        <header className="App-header">
            <div className="qcontainer">
                <h1>{questions[count - 1]}</h1>
            </div>
            <br></br>

            <div className="answers-container">
                <button className="btn yes" onClick={plus}>
                    Yes
                </button>

                <button className="btn unsure" onClick={unsure}>
                    Unsure
                </button>

                <button className="btn no" onClick={minus}>
                    No
                </button>
            </div>
            <br></br>

            <p>Question {count} of {num_questions}</p>
            <progress className="qprogress" value={count} max={num_questions} />
            <br></br>
            <button className="btn" onClick={clear}>
                Return to Home
            </button>
        </header>
    )
}

export default Quiz;