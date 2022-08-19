import React from 'react';
import { useNavigate } from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate()

    return (
        <div>
            Product not found
            <button onClick={() => { navigate("/") }}>Go to list</button>
        </div>
    );
}

export default NotFound;