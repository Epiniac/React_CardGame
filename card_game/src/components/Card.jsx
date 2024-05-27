import './Card.css'

function Card({name,cost,img,description,type}) {

    return (
        <div className="card3d">
            <div className='cost'>
                <h2 className='costdetail'>{cost}</h2>
            </div>
            <article className='main'>
                    <img src={img} />
                    <div className='description'>
                        <h2>{name}</h2>
                        <h5>{description}</h5>
                        <p>Type: {type}</p>
                    </div>
            </article>
        </div>
    )
}

export default Card