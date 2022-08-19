import React from 'react'
import { useNavigate } from "react-router-dom";

const ItemList = () => {

    const navigate = useNavigate()

    return (
        <div>
            <div>ItemList</div>
            <div onClick={() => { navigate(`/${1}`) }}>Card 1</div>
        </div>
    );
}

export default ItemList;