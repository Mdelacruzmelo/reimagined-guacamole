
import AxiosNaptilus from '../config/axios'
import Routes from '../constants'

export const fetchItems = async () => {
  const items = await AxiosNaptilus.get(Routes.list())
  return items
}

export const fetchItem = async (id) => {
  const item = await AxiosNaptilus.get(Routes.details(id))
  return item
}

export const addToCart = async (detailsData) => {
  const data = await AxiosNaptilus.post(Routes.addToCart(), { ...detailsData })
  return data
}
