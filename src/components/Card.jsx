import star from '../assets/images/star.png'
import '../assets/css files/card.css'
function Card (props) {
    let injected
    if (props.openSpots === 0) {
        injected = 'Sold out'
    } else if ( props.location === 'Online') {
        injected = 'Online'
    }
    return (
        <div className="container">
             {injected &&
              <div className='status'>
                  <div>{injected}</div> 
              </div>} 
            <div className="card-img">
                <img src={props.coverImg}/>
            </div>
            <div className="card-info">
                <div className="top">
                    <div className='star-icon'>
                        <img src={star} />
                    </div>
                    <div className='rating'>
                        {props.stats.rating} ({props.stats.reviewCount}).{props.location}
                    </div>
                </div>
                <div className='middle'>
                    {props.title}
                </div>
                <div className='bottom'>
                    <strong>From {props.price}$</strong> / person
                </div>
            </div>
        </div>
    )
}
export default Card