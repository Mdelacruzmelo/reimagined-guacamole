import React from 'react'
import {
    AiOutlineShoppingCart,
    AiOutlineArrowRight,
    AiOutlineCreditCard
} from "react-icons/ai";
import Image from '../Image/Image'
import { useNavigate } from "react-router-dom";

const Item = ({
    id,
    brand,
    model,
    price,
    imgUrl
}) => {

    const navigate = useNavigate()

    return (
        <div className='item'>

            <div className='left_column'>
                <div className='image_container'>
                    <div
                        className='image'
                        onClick={() => { navigate(`/${id}`) }}>
                        <Image src={imgUrl} />
                    </div>
                </div>
                <div className='button_container'>
                    <button>
                        <AiOutlineShoppingCart /> Add to cart
                    </button>
                </div>
            </div>

            <div className='right_column'>

                <div className='description_container'>
                    <div className='model'>{model}</div>
                    <div className='brand'>{brand}</div>
                    <div className='details_button'>
                        <div onClick={() => { navigate(`/${id}`) }}>
                            View Details <AiOutlineArrowRight />
                        </div>
                    </div>
                    <div className='price'>
                        {price && price !== "" ? `${parseFloat(price).toFixed(2)}€` : '-'}
                    </div>
                </div>

                <div className='button_container'>
                    <button>
                        Buy now
                        <AiOutlineCreditCard />
                    </button>
                </div>

                <div className='interacting_details_background'></div>
                <div className='interacting_buy_background'></div>


            </div>

        </div>
    );
}

export default Item;