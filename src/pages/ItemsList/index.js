import React, { useEffect, useRef, useState } from 'react'
import { useMutation } from 'react-query'
import { AiOutlineTable } from "react-icons/ai";
import { useCookies } from 'react-cookie'
import FadeIn from 'react-fade-in';
import Loading from '../../components/Loading/Loading';
import Search from './components/Search/Search';
import Header from '../../components/Header/Header';
import Item from './components/Item/Item';
import useItems from '../../hooks/useItems';
import { naptilus_cookies } from '../../constants'
import { fetchItem, addToCart } from '../../services/api';
import { getUpdatedCartData } from '../../utils/cart';
import { includesString } from '../../utils/search'

const ItemList = () => {

    const [cookies, setCookie] = useCookies([naptilus_cookies]);
    const sessionName = cookies.items_session;

    let itemsLS = localStorage.getItem(sessionName) // maybe cookie is expired and itemsLS is undefined
    if (itemsLS) itemsLS = JSON.parse(itemsLS)

    const itemsRef = useRef(itemsLS) // useRef defends from useEffect dependency 
    const setCookieRef = useRef(setCookie) // useRef defends from useEffect dependency 

    const [loading, apiItems] = useItems(!!itemsLS)
    const [loadedItems, setLoadedItems] = useState([])
    const [searchValue, setSearchValue] = useState("")

    let cartData = localStorage.getItem('cart')
    if (cartData) cartData = JSON.parse(cartData)

    const cartCount = cartData?.count || 0
    const cartItems = cartData?.items || []

    const { isLoading: cartPosting, mutate: postCart } = useMutation(
        newData => addToCart(newData),
        {
            onSuccess: (res, data) => {

                const newCartData = getUpdatedCartData(
                    JSON.stringify(cartData),
                    res.data.count,
                    data.id,
                    data.colorCode,
                    data.storageCode
                )

                // This is equivalent as save it in redux,
                localStorage.setItem('cart', JSON.stringify(newCartData))

            }
        })

    const handlePostCart = async (id) => {

        const response = await fetchItem(id)
        const { options } = response.data

        if (options?.colors?.length > 0 && options?.storages?.length > 0) {

            const colorCode = options?.colors[0]?.code
            const storageCode = options?.storages[0]?.code

            postCart({ id, colorCode, storageCode })

        } else {
            console.error("Cannot add to cart a product that has not a colorº")
        }

    }

    const handleSearch = (value) => {
        if (value && value !== "") {
            setLoadedItems(
                itemsLS.filter(item => includesString(item?.brand, value) || includesString(item?.model, value))
            )
        } else {
            setLoadedItems(itemsLS)
        }

        setSearchValue(value)
    }

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

            <Header cartCount={cartCount} cartLoading={cartPosting} />

            <div className='subheader'>
                <div className='title'>
                    <AiOutlineTable />
                    <div className='title_word'>
                        List
                    </div>
                </div>
                <Search
                    searchValue={searchValue}
                    handleSearch={handleSearch} />
            </div>

            <FadeIn className='items_fade_container'>
                <div className='items'>

                    {!loading && loadedItems && loadedItems.length > 0 && (

                        loadedItems.map((item, index) => {

                            const inCart = cartItems.findIndex(cartItem => cartItem.id === item.id) !== -1

                            return (
                                <Item
                                    key={index}
                                    id={item.id}
                                    brand={item.brand}
                                    model={item.model}
                                    price={item.price}
                                    imgUrl={item.imgUrl}
                                    inCart={inCart}
                                    handlePostCart={handlePostCart}
                                />
                            )
                        })
                    )}
                </div>
            </FadeIn>

        </div>
    );
}

export default ItemList;