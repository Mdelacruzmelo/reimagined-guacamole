import { useEffect, useState } from 'react';
import { fetchItems } from '../services/api'

const useItems = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const apiCall = async () => {
        const response = await fetchItems();
        setItems(response.data)
        setLoading(false)
    }

    useEffect(() => {

        setLoading(true)
        apiCall();
        setLoading(false)

    }, [])

    return [loading, items]
}

export default useItems;