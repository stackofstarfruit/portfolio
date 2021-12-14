import one from '../svgs/one.svg';
import two from '../svgs/two.svg';
import three from '../svgs/three.svg';
import four from '../svgs/four.svg';
import five from '../svgs/five.svg';
import six from '../svgs/six.svg';
import seven from '../svgs/seven.svg';
import eight from '../svgs/eight.svg';
import nine from '../svgs/nine.svg';
import ten from '../svgs/ten.svg';
import eleven from '../svgs/eleven.svg';
import twelve from '../svgs/twelve.svg';
import thirteen from '../svgs/thirteen.svg';
import fourteen from '../svgs/fourteen.svg';
import fifteen from '../svgs/fifteen.svg';
import '../Math.css';

function Digits({mathCount, setMath}) {
    return(
    <div>
        <h2>ALL DIGITS</h2>
        <div className="num-container">
            <img alt="one" src={one} />
            <img alt = "two" src={two} />
            <img alt = "three" src={three} />
            <img alt = "four" src={four} />
            <img alt = "five" src={five} />
            <img alt = "six" src={six} />
            <img alt = "seven" src={seven} />
            <img alt = "eight" src={eight} />
        </div>
        <div className="num-container">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
        </div>
        <div className="num-container">
            <img alt= "nine" src={nine} />
            <img alt = "ten" src={ten} />
            <img alt = "eleven" src={eleven} />
            <img alt = "twelve" src={twelve} />
            <img alt = "thirteen" src={thirteen} />
            <img alt = "fourteen" src={fourteen} />
            <img alt = "fifteen" src={fifteen} />
        </div>
        <div className="num-container">
            <p>9</p>
            <p>10</p>
            <p>11</p>
            <p>12</p>
            <p>13</p>
            <p>14</p>
            <p>15</p>
        </div>
    </div>)
}

export default Digits;