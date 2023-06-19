import '../assets/css files/hero.css'
import grid from '../assets/images/photo-grid.png'
function Hero () {
    return (
        <>
            <div className='hero-img-container'>
                <img src={grid} />
            </div>
            <div className='hero-content'>
                <h1>Online Experiences</h1>
                <p>
                     Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </>
    )
}
export default Hero