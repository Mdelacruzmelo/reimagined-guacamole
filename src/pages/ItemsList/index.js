import React, { useEffect, useState } from 'react'
import { AiOutlineTable } from "react-icons/ai";
import FadeIn from 'react-fade-in';
import Loading from '../../components/Loading/Loading';
import Search from '../../components/Search/Search';
import Header from '../../components/Header/Header';
import Item from '../../components/Item/Item';

const ItemList = () => {

    const [loading, setLoading] = useState(true)
    const items = [
        1, 2, 3, 4, 5, 6,
        1, 2, 3, 4, 5, 6,
        1, 2, 3, 4, 5, 6
    ]

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])


    if (loading) return <Loading />

    return (
        <div className='page'>

            <Header />

            <div className='subheader'>
                <div className='title'>
                    <AiOutlineTable />
                    <div className='title_word'>
                        List
                    </div>
                </div>
                <Search />
            </div>

            <FadeIn>
                <div className='items'>
                    {!loading && items && items.length > 0 && (
                        items.map((item) => {
                            return (
                                <Item key={item} />
                            )
                        })
                    )}
                </div>
            </FadeIn>

        </div>
    );
}

export default ItemList;