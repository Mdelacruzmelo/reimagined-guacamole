import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { AiOutlineInfoCircle } from "react-icons/ai"
import Loading from '../../components/Loading/Loading'
import Header from '../../components/Header/Header'
import Image from '../../components/Image/Image'
import Description from './components/Description/Description'
import Actions from './components/Actions/Actions'
import { fetchItem } from '../../services/api'
import { useQuery } from 'react-query'

const ItemDetails = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const { isLoading, error, data } = useQuery(['item', id], () => fetchItem(id))
    const [storageCode, setStorageCode] = useState(null)
    const [colorCode, setColorCode] = useState(null)

    useEffect(() => {

        if (data?.data?.options)
            setStorageCode(data?.data?.options?.storages[0])

        if (data?.data?.options)
            setColorCode(data?.data?.options?.colors[0])

    }, [data])


    if (isLoading) return <Loading />
    if (error) navigate('/404')

    const {
        imgUrl,
        brand,
        model,
        price,
        cpu,
        internalMemory,
        os,
        displayResolution,
        battery,
        primaryCamera,
        secondaryCamera,
        dimentions,
        weight,
        options
    } = data.data

    return (
        <div className='page'>

            <Header detailsPage={true} />

            <div className='subheader'>
                <div className='title'>
                    <AiOutlineInfoCircle />
                    <div className='title_word'>
                        Details
                    </div>
                </div>
            </div>

            <div className='detail_page'>
                <div className='gray_background_reactangle' />
                <div className='image_container'>
                    <Image src={imgUrl} />
                </div>
                <div className='details_container'>
                    <Description
                        item={{
                            brand: brand,
                            model: model,
                            cpu: cpu,
                            internalMemory: internalMemory,
                            os: os,
                            displayResolution: displayResolution,
                            battery: battery,
                            primaryCamera: primaryCamera,
                            secondaryCamera: secondaryCamera,
                            dimentions: dimentions,
                            weight: weight,
                        }}
                    />
                    <Actions
                        storages={options?.storages}
                        storageValue={storageCode || ''}
                        setStorageCode={setStorageCode}
                        colors={options?.colors}
                        colorValue={colorCode || ''}
                        setColorCode={setColorCode}
                    />

                    <div className='submit_container'>
                        <div className='price'>
                            {parseFloat(price).toFixed(2)}€
                        </div>
                        <button>
                            Add to cart
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ItemDetails;