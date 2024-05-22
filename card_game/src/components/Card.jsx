import './Card.css'
import Rule from './Rule.jsx'

function Card({cards}) {
    return (
    <div className='deck'>
        {cards.map((card,index) => (
            <div key={index} className='card3d'>
                <Rule name={card.name} cost={card.cost} img={card.img} description={card.description} type={card.type} />
            </div>
        ))}
    </div>
    )
}

export default Card