import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";
import {
    AiOutlineArrowRight,
    AiOutlineShoppingCart,
    AiOutlineCreditCard,
    AiOutlineSearch,
    AiOutlineTable
} from "react-icons/ai";
import FadeIn from 'react-fade-in';

const ItemList = () => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const items = [1, 2, 3, 4, 5, 6,
        1, 2, 3, 4, 5, 6,
        1, 2, 3, 4, 5, 6]

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])


    if (loading) {
        return (
            <FadeIn>
                <div className='list_page'>
                    <div className='items'>
                        <div className='loading'>
                            <div className='loading_str'>Loading</div>
                            <BarLoader color="#000000" loading={loading} width={200} />
                        </div>
                    </div>
                </div>
            </FadeIn>
        )
    }

    return (
        <div className='list_page'>

            {/* Header */}
            <div className='header'>
                <div className='main'>
                    <div
                        className='app_title'
                        onClick={() => { navigate('/') }}>
                        Reimagined guacamole
                    </div>
                    <div className='breadcrumb'>
                        <div
                            className='breadcrumb_word'
                            onClick={() => { navigate('/') }}>List
                        </div>

                    </div>
                </div>
                <div className='cart'>
                    <button>
                        <AiOutlineShoppingCart />
                    </button>
                    <div className='cart_count'>1</div>
                </div>
            </div>

            {/* SubHeader */}
            <div className='subheader'>
                <div className='title'>
                    <AiOutlineTable />
                    <div className='title_word'>
                        List
                    </div>
                </div>
                <div className='search'>
                    <input type="search" />
                    <button><AiOutlineSearch /></button>
                </div>
            </div>

            <FadeIn>
                {/* Items container */}
                <div className='items'>
                    {/* Items */}
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

                            )
                        })
                    )}


                </div>
            </FadeIn>

        </div>
    );
}

export default ItemList;