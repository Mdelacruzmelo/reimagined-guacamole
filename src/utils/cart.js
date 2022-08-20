
export const getUpdatedCartData = (
    cartData,
    added,
    id,
    colorCode,
    storageCode
) => {

    const newCartData = cartData ? JSON.parse(cartData) : { count: 0, items: [] }
    const newItems = newCartData.items

    let newCount = newItems.reduce((prev, current) => {
        return (parseInt(prev) + parseInt(current.quantity))
    }, 0)
    newCount += added
    console.log('~ added', added)

    if (newItems.length > 0) {

        const ItemIndex = newItems.findIndex((cartObj) => {
            return cartObj.id === id &&
                cartObj.colorCode === colorCode &&
                cartObj.storageCode === storageCode
        })

        // It means it is already in cart
        if (ItemIndex !== -1) {
            newItems[ItemIndex] = {
                ...newItems[ItemIndex],
                quantity: newItems[ItemIndex].quantity + added
            }
        } else {
            newItems.push({
                id,
                colorCode,
                storageCode,
                quantity: added
            });
        }

    } else {

        newItems.push({
            id,
            colorCode,
            storageCode,
            quantity: added
        });
    }

    return { count: newCount, items: newItems }

}