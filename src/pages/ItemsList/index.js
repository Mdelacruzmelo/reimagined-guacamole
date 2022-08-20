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

    const cartData = localStorage.getItem('cart')
    const cartCount = cartData ? JSON.parse(cartData).count : 0
    const cartItems = cartData ? JSON.parse(cartData).items : []

    useEffect(() => {

        if (itemsRef.current) {
            setLoadedItems(itemsRef.current)

        } else if (apiItems.length > 0) {

            setCookieRef.current('items_session', "items_token_name", { maxAge: 3600 }) // This expires 1hr
            localStorage.setItem("items_token_name", JSON.stringify(apiItems))
            setLoadedItems(apiItems)

        }

    }, [apiItems])

    if (loading) return <Loading />

    return (
        <div className='page'>

            <Header cartCount={cartCount} />

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
                        loadedItems.map((item, index) => {

                            const inCart = cartItems.findIndex(cartItem => cartItem.id === item.id) !== -1
                            console.log('~ inCart', inCart)

                            return (
                                <Item
                                    key={index}
                                    id={item.id}
                                    brand={item.brand}
                                    model={item.model}
                                    price={item.price}
                                    imgUrl={item.imgUrl}
                                    inCart={cartItems.findIndex(cartItem => cartItem.id === item.id) !== -1} />
                            )
                        })
                    )}
                </div>
            </FadeIn>

        </div>
    );
}

export default ItemList;