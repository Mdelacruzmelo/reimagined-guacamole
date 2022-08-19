import React from 'react'
import { useNavigate } from "react-router-dom";
import {
    AiOutlineArrowRight,
    AiOutlineShoppingCart,
    AiOutlineCreditCard
} from "react-icons/ai";

const ItemList = () => {

    const navigate = useNavigate()

    const items = [1, 2, 3, 4, 5, 6]
    const loading = false

    return (
        <div className='page'>

            {/* Header */}
            <div className='header'>
                <div>
                    <div>Web name</div>
                    <div>breadcrumb</div>
                </div>
                <div>cart</div>
            </div>


            {/* SubHeader */}
            <div className='subheader'>
                {/* Title */}
                <div>Title</div>
                {/* Search */}
                <div>
                    <div>Search input</div>
                    <div>Search button</div>
                </div>
            </div>


            {/* Items container */}
            <div className='items'>

                {/* Items */}
                {loading && (
                    <div>Loading</div>
                )}
                {!loading && items && items.length > 0 && (
                    items.map((item) => {
                        return (

                            /* Items */
                            <div className='item' key={item}>

                                {/* Left column */}
                                <div className='left_column'>
                                    {/* Left TOP */}
                                    <div className='image_container'>
                                        <div
                                            className='image'
                                            onClick={() => { navigate(`/${1}`) }}>
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
                                            <div onClick={() => { navigate(`/${1}`) }}>
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

                        )
                    })
                )}

            </div>

        </div>
    );
}

export default ItemList;