import React from 'react'

const Description = ({ item }) => {
    
    return (

        <div className='description'>

            <div className='title'>Description</div>

            {Object.keys(item).map((property, index) => {

                if (!item[property]) return null

                return (
                    <div key={index} className='content'>
                        <div className='label'>{property}</div>
                        <div className='value'>{item[property]}</div>
                    </div>
                )
            })}

        </div>

    );
}

export default Description;