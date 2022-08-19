import React from 'react'
import { useNavigate } from "react-router-dom";

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
                                <div>
                                    {/* Left TOP */}
                                    <div>
                                        <div>Image</div>
                                    </div>
                                    {/* Left BOTTOM */}
                                    <div>
                                        <button>add to cart</button>
                                    </div>

                                </div>

                                {/* Right column */}
                                <div>
                                    {/* Right TOP */}
                                    <div>
                                        <div>Description</div>
                                        <div>
                                            <div onClick={() => { navigate(`/${1}`) }}>Details</div>
                                        </div>
                                    </div>
                                    {/* Right BOTTOM */}
                                    <div>
                                        <button>Buy now</button>
                                    </div>
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