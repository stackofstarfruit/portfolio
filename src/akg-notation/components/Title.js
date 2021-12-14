import one from '../svgs/one.svg';
import two from '../svgs/two.svg';
import four from '../svgs/four.svg';
import eight from '../svgs/eight.svg';
import '../Math.css';

function Title({mathCount, setMath}) {
    return(
    <div>
        <h2>TOWARDS A NEW NUMBER SYSTEM</h2>
        <h4>MATH 380</h4>
        <h4>KEVIN KODAMA</h4>
        <h3>In this project, I explored the history of mathematical notation 
            to find the best ideas for representation throughout history. 
            In particular, I focused on operations (which are less researched than numerals). 
            I then worked with my friend to create a new number system based 
            around these ideas that is both more expressive and more intuitive.</h3>
    </div>)
}

export default Title;