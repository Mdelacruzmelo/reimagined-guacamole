import React, { useEffect, useRef } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";
// import FadeIn from 'react-fade-in';
import Loading from '../../components/Loading/Loading';
import Header from '../../components/Header/Header';
import Image from '../../components/Image/Image';
import Description from '../../components/Description/Description';
import Actions from '../../components/Actions/Actions';
import { fetchItem } from '../../services/api'
import { useQuery } from 'react-query';

const ItemDetails = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const { isLoading, error, data } = useQuery(['item', id], () => fetchItem(id))

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
        weight
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
                            price: price,
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
                    <Actions />
                </div>
            </div>
        </div>
    );
}

export default ItemDetails;