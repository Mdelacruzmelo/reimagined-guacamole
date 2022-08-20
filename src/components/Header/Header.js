import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Header = ({ detailsPage }) => {

    const navigate = useNavigate()

    return (
        <div className='header'>
            <div className='main'>
                <div
                    className='app_title'
                    onClick={() => { navigate('/') }}>
                    Reimagined guacamole
                </div>
                <div className='breadcrumb'>
                    <div
                        className={`breadcrumb_word ${detailsPage ? '' : 'active'}`}
                        onClick={() => { navigate('/') }}>List
                    </div>

                    {detailsPage && (
                        <>
                            /
                            <div className={`breadcrumb_word ${detailsPage ? 'active' : ''}`}>
                                Details
                            </div>
                        </>
                    )}

                </div>
            </div>

            <div className='cart'>
                <button>
                    <AiOutlineShoppingCart />
                </button>
                <div className='cart_count'>1</div>
            </div>

        </div>
    );
}

export default Header;