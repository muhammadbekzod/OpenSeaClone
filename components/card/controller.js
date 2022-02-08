import React from 'react'
import { card } from '../../mock/cards'
import NFTcard from './NFTcard'


const CardControl = () => {
    return (
        <>
        <div className='flex flex-wrap'>
           {card.info.map((value, id)=>(
               <NFTcard key ={id} value={value} />
           ))}
         
        </div>
        </>
    )
}

export default CardControl;