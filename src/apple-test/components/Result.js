import '../Test.css';

function Result({count, setCount, skin, setSkin, flesh, setFlesh, core, setCore}) {
    
    function clear() {
        setCount(0);
        setSkin(0);
        setFlesh(0);
        setCore(0);
    }

    let type_result = -1;
    if(core <= 0) {
        if(flesh <= 0) {
            if(skin <= 0) {
                type_result = 0;
            } else {
                type_result = 2;
            }
        } else {
            if(skin <= 0) {
                type_result = 1;
            } else {
                type_result = 3;
            }
        }
    } else {
        if(flesh <= 0) {
            if(skin <= 0) {
                type_result = 5;
            } else {
                type_result = 7;
            }
        } else {
            if(skin <= 0) {
                type_result = 4;
            } else {
                type_result = 6;
            }
        }
    }

    const type = [
        "NORMIE",
        "FALSE WACK / DAD",
        "QUIRKY",
        "QUIRKY SQUARED",
        "NORMIE ON THE OUTSIDE",
        "SECRETLY WACK",
        "WACK WACK WACK",
        "DOUBLE LIFE"
    ]

    const demographics = [
        "40% of Population",
        "25% of Population",
        "10% of Population",
        "7% of Population",
        "7% of Population",
        "5% of Population",
        "5% of Population",
        "1% of Population"
    ]
    
    const description = [
        "You're pretty normal. Which is good! Most people are normal, so you usually don't have trouble gelling with others. You might have trouble getting along with people who are a bit too weird, but that mostly just depends on your level of openness.",
        "You're pretty normal with strangers, but it's a whole different story when you're with your friends. People like how you can bring both convention and silliness when the mood is right, and you usually have the easiest time getting along with the other types. Most Dads are this type, just because of the outlook that the role requires.",
        "You're a bit more unique than the average person, and you'd like to keep it that way. You're usually a bit choosy with friends, but the relationships you do end up in are often rewarding.",
        "You're not big on conforming or fitting in, and you gravitate towards people who feel the same way. But deep down, you mostly want the same things as everyone else.",
        "You present normal, but your friends know better. You've mastered the art of hiding the weirder parts of yourself from people who don't really need to know. And you'd like to keep it that way.",
        "You're pretty normal; in fact, you might even think of yourself as NNN. But there are certain things about your motivations and worldview that are more than a little strange. It might be that you've just never compared notes with someone who is actually core normal.",
        "Either you never really mastered the art of conforming, or you don't care to for some reason. WWW is one of the less compatible types, but you can make up for it by making an unforgettable first impression. Social situations will certainly be interesting whenever you're involved, for better or for worse.",
        "Your type is... pretty weird. Your friends get the sense that they don't quite know the real you. Well, you probably have your reasons."
    ]
    
    return(
        <header className="Start-header">
            <h2>Your type is...</h2>
            {<h1>{type[type_result]}</h1>}
            <div className="pbar-container">
                <progress className="pbar" value={skin + 1} max="2" />
                <progress className="pbar" value={flesh + 1} max="2" />
                <progress className="pbar" value={core + 1} max="2" />
            </div>
            <div className="pbar-labels">
                <h4>SKIN</h4>
                <h4>FLESH</h4>
                <h4>CORE</h4>
            </div>
            {<div><br></br></div>}
            {demographics[type_result]}
            {<div><br></br></div>}
            {<div className="desc-container">{description[type_result]}</div>}
            {<div><br></br><br></br></div>}
            
            
            <button className="btn" onClick={clear}>
                Return to Home
            </button>
            <br></br>
            
        </header>
    )
}

export default Result;