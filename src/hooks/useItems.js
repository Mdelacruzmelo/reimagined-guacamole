import { useEffect, useState } from 'react';
import { fetchItems } from '../services/api'

const useItems = (itemsAlreadyExist) => {

    const [apiItems, setApiItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!itemsAlreadyExist) {
            setLoading(true)
            fetchItems().then((response) => {
                setApiItems(response.data)
                setLoading(false)
            });

        }
    }, [itemsAlreadyExist])

    return [loading, apiItems]
}

export default useItems;