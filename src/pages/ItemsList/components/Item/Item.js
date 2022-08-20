import React from 'react'
import {
    AiOutlineArrowRight,
    AiOutlineCreditCard
} from "react-icons/ai";
import Image from '../../../../components/Image/Image'
import { useNavigate } from "react-router-dom";

const Item = ({
    id,
    brand,
    model,
    price,
    imgUrl
}) => {

    const navigate = useNavigate()
    const disabled = price === "" || !price
    return (
        <div className={`${disabled ? 'disabled' : ''} item`}>

            <div className='left_column'>
                <div className='image_container'>
                    <div
                        className='image'
                        onClick={() => { navigate(`/${id}`) }}>
                        <Image src={imgUrl} />
                    </div>
                </div>
            </div>

            <div className='right_column'>

                <div className='description_container'>
                    <div className='model'>{model}</div>
                    <div className='brand'>{brand}</div>
                    {!disabled && (
                        <>
                            <div className='details_button'>
                                <div onClick={() => { navigate(`/${id}`) }}>
                                    View Details <AiOutlineArrowRight />
                                </div>
                            </div>
                            <div className='price'>
                                {`${parseFloat(price).toFixed(2)}€`}
                            </div>
                        </>
                    )}

                </div>

                {!disabled && (
                    <div className='button_container'>
                        <button>
                            Add to cart
                            <AiOutlineCreditCard />
                        </button>
                    </div>
                )}

                <div className='interacting_details_background'></div>
                <div className='interacting_buy_background'></div>


            </div>

        </div>
    );
}

export default Item;