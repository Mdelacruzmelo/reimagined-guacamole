import React from 'react'
import { AiOutlineTable } from "react-icons/ai";
import FadeIn from 'react-fade-in';
import Loading from '../../components/Loading/Loading';
import Search from '../../components/Search/Search';
import Header from '../../components/Header/Header';
import Item from '../../components/Item/Item';
import useItems from '../../hooks/useItems';

const ItemList = () => {

    const [loading, items] = useItems()

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
                        items.map((item, index) => <Item key={index} {...item} />)
                    )}
                </div>
            </FadeIn>

        </div>
    );
}

export default ItemList;