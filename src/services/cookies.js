import { useCookies } from 'react-cookie'
import { naptilus_cookies } from '../constants'

const CookieManager = () => {
    const [cookies, setCookie, removeCookie] = useCookies([naptilus_cookies]);
    return {
        cookies,
        setCookie,
        removeCookie
    }
}

export default CookieManager;