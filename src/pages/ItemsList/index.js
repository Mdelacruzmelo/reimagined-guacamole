import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineTable } from "react-icons/ai";
import { useCookies } from 'react-cookie'
import FadeIn from 'react-fade-in';
import Loading from '../../components/Loading/Loading';
import Search from '../../components/Search/Search';
import Header from '../../components/Header/Header';
import Item from './components/Item/Item';
import useItems from '../../hooks/useItems';
import { naptilus_cookies } from '../../constants'

const ItemList = () => {

    const [cookies, setCookie] = useCookies([naptilus_cookies]);
    const sessionName = cookies.items_session;

    let itemsLS = localStorage.getItem(sessionName) // maybe cookie is expired and itemsLS is undefined
    if (itemsLS) itemsLS = JSON.parse(itemsLS)

    const itemsRef = useRef(itemsLS) // useRef defends from useEffect dependency 
    const setCookieRef = useRef(setCookie) // useRef defends from useEffect dependency 

    const [loading, apiItems] = useItems(!!itemsLS)
    const [loadedItems, setLoadedItems] = useState([])

    useEffect(() => {

        if (itemsRef.current) {
            setLoadedItems(itemsRef.current)

        } else if (apiItems.length > 0) {

            setCookieRef.current('items_session', "items_token_name", { maxAge: 10 }) // This expires 1hr
            localStorage.setItem("items_token_name", JSON.stringify(apiItems))
            setLoadedItems(apiItems)

        }

    }, [apiItems])

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

            <FadeIn className='items_fade_container'>
                <div className='items'>
                    {!loading && loadedItems && loadedItems.length > 0 && (
                        loadedItems.map((item, index) => <Item key={index} {...item} />)
                    )}
                </div>
            </FadeIn>

        </div>
    );
}

export default ItemList;