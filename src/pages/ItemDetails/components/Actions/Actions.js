import React from 'react'

const Actions = ({
    storages,
    storageValue,
    setStorageCode,
    colors,
    colorValue,
    setColorCode
}) => {

    return (

        <div className='actions'>

            <div className='content'>
                <div className='label'>Storages</div>
                <div className='value'>
                    <select
                        value={storageValue}
                        onChange={({ target }) => setStorageCode(target.value)}>
                        {storages && storages.map((storage, index) => (
                            <option key={index} value={storage.code}>{storage.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className='content'>
                <div className='label'>Colors</div>
                <div className='value'>
                    <select
                        value={colorValue}
                        onChange={({ target }) => { setColorCode(target.value) }}>
                        {colors && colors.map((color, index) => (
                            <option key={index} value={color.code}>{color.name}</option>
                        ))}
                    </select>
                </div>
            </div>

        </div>

    );
}

export default Actions;