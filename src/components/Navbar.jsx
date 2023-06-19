import logo from '../assets/images/airbnb-logo.png'
import '../assets/css files/navbar.css'
function Navbar () {
    return (
        <>
            <nav className='navbar'>
                <div className='logo'>
                    <img src={logo} />
                </div>
            </nav>
        </>
    )
}
export default Navbar