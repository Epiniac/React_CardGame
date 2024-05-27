import './Card.css'
import { useState } from 'react'

function Create({name,cost,img,description,type}) {
    const [st, setSt] = useState(cost)
    const [st2, setSt2] = useState(name)
    const [st3,setSt3] = useState(description)
    const [st4,setSt4] = useState(type)
    

    const HandleCost = (event) => {
        if (Number(event.target.value) < 0) {
            throw new Error("Error: negative cost value")
        }
        setSt(event.target.value)
    } 

    const HandleName = (event) => {
        setSt2(event.target.value)
    }

    const HandleDescription = (event) => {
        setSt3(event.target.value)
    }

    const HandleType = (event) => {
        setSt4(event.target.value)
    }

    return (
        <>
            <div className="card3d">
                <div className='cost'>
                    <h2 className='costdetail'>{st}</h2>
                </div>
                <article className='main'>
                        <img src={img} />
                        <div className='description'>
                            <h2>{st2}</h2>
                            <h5>{st3}</h5>
                            <p>Type: {st4}</p>
                        </div>
                </article>
            </div>
            <div className='card3d' id='inputs'>
                <p>Card configurator</p>
                <input type="Number" value={st} onChange={HandleCost} />
                <input type="text" value={st2} onChange={HandleName}/>
                <input type="text" value={st3} onChange={HandleDescription}/>
                <select onChange={HandleType}>
                                    <option >HEAL</option>
                                    <option>ATTACK</option>
                                    <option>DEFEND</option>
                                    <option>MALUS</option>
                                    <option>BONUS</option>
                                    <option>F*CK OFF</option>
                </select>
            </div>
        </>
    )
}

export default Create