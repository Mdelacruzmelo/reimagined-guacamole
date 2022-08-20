const Routes = {
    list: () => '/product',
    details: (id) => {
        if (id) return `/product/${id}`
        throw new Error("product id is not valid");
    },
}

export default Routes