import '../Test.css';

function Quiz({count, setCount, skin, setSkin, flesh, setFlesh, core, setCore}) {
    const questions = [
        "Do you generally stand out in a group?",
        "Do other people tell you that you make an unforgettable first impression?",
        "Are you generally considered to be a 'weird' person?",
        "Do you act a lot stranger with close friends?",
        "Do you have many unusual and/or niche interests?",
        "Are you easily convinced to do ridiculous things?",
        "Deep down, do you think your motivations are different from most people's?",
        "Have you ever been told by a close friend that you are difficult to get to know?",
        "Do you feel mostly comfortable around strange people?"
    ];
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

    function plus(){
        setCount(count + 1);
        if(count < 4) {
            setSkin(skin + 1/3);
        } else if(count < 7) {
            setFlesh(flesh + 1/3)
        } else {
            setCore(core + 1/3)
        }
    }

    function minus(){
        setCount(count + 1);
        if(count < 4) {
            setSkin(skin - 1/3);
        } else if(count < 7) {
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

            <p>Question {count} of 9</p>
            <progress className="qprogress" value={count} max="9" />
            <br></br>
            <button className="btn" onClick={clear}>
                Return to Home
            </button>
        </header>
    )
}

export default Quiz;