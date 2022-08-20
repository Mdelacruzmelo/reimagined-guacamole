import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import PuffLoader from 'react-spinners/PuffLoader'

const Header = ({ detailsPage, cartCount, cartLoading }) => {
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
                    {cartLoading ? <div className='loader'><PuffLoader /></div> : <AiOutlineShoppingCart />}
                </button>
                {cartCount > 0 && <div className='cart_count'>{cartCount}</div>}
            </div>

        </div>
  )
}

export default Header
