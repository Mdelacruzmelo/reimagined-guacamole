import React from 'react'
import FadeIn from 'react-fade-in'
import BarLoader from 'react-spinners/BarLoader'

const Loading = () => {
  return (
        <FadeIn>
            <div className='page'>
                <div className='items'>
                    <div className='loading'>
                        <div className='loading_str'>Loading</div>
                        <BarLoader color="#000000" loading={true} width={200} />
                    </div>
                </div>
            </div>
        </FadeIn>
  )
}

export default Loading
