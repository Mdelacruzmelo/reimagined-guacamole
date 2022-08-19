import React, { useEffect, useRef } from 'react'
import { useNavigate, useParams } from "react-router-dom";

const ItemDetails = () => {

    const { id } = useParams()
    console.log('~ id', id)
    const navigate = useNavigate()
    // const navigation = useRef(navigate) // useRef for useEffect dependencies

    useEffect(() => {
        // if (isNaN(id)) navigation.current("/404")
    }, [id])

    return (
        <div>
            <div>Details</div>
            <button onClick={() => { navigate("/") }}>Go to list</button>
        </div>
    );
}

export default ItemDetails;