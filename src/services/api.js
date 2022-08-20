
import AxiosNaptilus from '../config/axios'
import Routes from '../constants/routes'

export const fetchItems = async () => {
    const items = await AxiosNaptilus.get(Routes.list())
    return items
}

export const fetchItem = async (id) => {
    const item = await AxiosNaptilus.get(Routes.details(id))
    return item
}