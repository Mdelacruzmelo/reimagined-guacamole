import React from 'react'
import {
    AiOutlineShoppingCart,
    AiOutlineArrowRight,
    AiOutlineCreditCard
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Item = () => {

    const navigate = useNavigate()

    return (
        <div className='item'>

            {/* Left column */}
            <div className='left_column'>
                {/* Left TOP */}
                <div className='image_container'>
                    <div
                        className='image'
                        onClick={() => { navigate(`/pjTe9sGqDQ1nPu36P5wjv`) }}>
                        Image
                    </div>
                </div>
                {/* Left BOTTOM */}
                <div className='button_container'>
                    <button>
                        <AiOutlineShoppingCart /> Add to cart
                    </button>
                </div>
            </div>

            {/* Right column */}
            <div className='right_column'>

                {/* Right TOP */}
                <div className='description_container'>
                    <div>Description</div>
                    <div className='details_button'>
                        <div onClick={() => { navigate(`/pjTe9sGqDQ1nPu36P5wjv`) }}>
                            View Details <AiOutlineArrowRight />
                        </div>
                    </div>
                    <div className='price'>
                        199.00
                    </div>
                </div>

                {/* Right BOTTOM */}
                <div className='button_container'>
                    <button>
                        Buy now
                        <AiOutlineCreditCard />
                    </button>
                </div>

                {/* Effects background */}
                <div className='interacting_details_background'></div>
                <div className='interacting_buy_background'></div>


            </div>

        </div>
    );
}

export default Item;