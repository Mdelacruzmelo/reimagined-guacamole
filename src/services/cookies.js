import { useCookies } from 'react-cookie'
import { naptilusCookies } from '../constants'

const CookieManager = () => {
  const [cookies, setCookie, removeCookie] = useCookies([naptilusCookies])
  return {
    cookies,
    setCookie,
    removeCookie
  }
}

export default CookieManager
