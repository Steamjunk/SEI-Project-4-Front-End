import React, { useState } from 'react'
import { useParams } from "react-router-dom";

const CardShowPage = () => {
    let { id } = useParams();
    const cardId = useState(id)


    return (
        <div>
            <h4>Card Show Page</h4>
            <h3>ID: {cardId}</h3>
        </div>
    )
}


export default CardShowPage