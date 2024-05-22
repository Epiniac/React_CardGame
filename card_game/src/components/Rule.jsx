import './Rule.css'

function Rule({ name,cost,img,description,type}) {
    return (
      <div className="card">
            <h2 className='cost'>{cost}</h2>
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
  
  export default Rule