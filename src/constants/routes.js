export const routes = {
    list: () => '/product',
    details: (id) => {
        if (id) return `/product/${id}`
        throw new Error("product id is not valid");
    },
}