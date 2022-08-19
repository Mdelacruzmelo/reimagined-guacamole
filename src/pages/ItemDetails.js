import React from 'react'
import { useNavigate, useParams } from "react-router-dom";

const ItemDetails = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    console.log('~ id', id)

    return (
        <div>
            <div>Details</div>
            <button onClick={() => { navigate("/") }}>Go back</button>
        </div>
    );
}

export default ItemDetails;