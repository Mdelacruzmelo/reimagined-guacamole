import React, { useEffect, useState, /* useRef */ } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";
import FadeIn from 'react-fade-in';
import Loading from '../../components/Loading/Loading';
import Search from '../../components/Search/Search';
import Header from '../../components/Header/Header';

const ItemDetails = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])
    // const navigation = useRef(navigate) // useRef for useEffect dependencies

    useEffect(() => {
        // if (isNaN(id)) navigation.current("/404")
    }, [id])

    if (loading) return <Loading />

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

            <FadeIn>
                <div className='detail_item'>
                    Detail Item
                </div>
            </FadeIn>
        </div>
    );
}

export default ItemDetails;