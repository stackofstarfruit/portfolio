import one from '../svgs/one.svg';
import two from '../svgs/two.svg';
import four from '../svgs/four.svg';
import eight from '../svgs/eight.svg';
import '../Math.css';

function Counting({mathCount, setMath}) {
    return(
    <div>
        <h2>Welcome to AKG Notation!</h2>
        <h3>AKG Notation combines the best of binary and the best of base-16. To double a number, rotate it by 45 degrees!</h3>
        <div className="num-container">
            <img alt="one" className="rotate-one" src={one} />
            <img alt = "two" className="rotate-one" src={two} />
            <img alt = "four" className="rotate-four" src={four} />
            <img alt = "eight" className="rotate-eight" src={eight} />
        </div>
        <div className="num-container">
            <p>1</p>
            <p>2</p>
            <p>4</p>
            <p>8</p>
        </div>
    </div>)
}

export default Counting;