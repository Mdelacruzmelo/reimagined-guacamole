import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const NotFound = () => {
  const navigate = useNavigate()

  return (
        <div className='page'>
            <div className='not_found'>
                <div className='title'>
                    Product not found
                </div>
                <button onClick={() => { navigate('/') }}>
                    <AiOutlineArrowLeft />  Go back to list
                </button>
            </div>
        </div>
  )
}

export default NotFound
