import { PRODUCTS, PRODUCTS_SEARCH, PRODUCTS_SORT, PRODUCTS_FILTER } from './../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case PRODUCTS:
            return {
                products: action.payload,
                filtered_products: action.payload
            }
        case PRODUCTS_SEARCH:
            if (!action.payload.trim()) {
                return {
                    products: state.products,
                    filtered_products: state.products
                }
            }
            else {
                let filter = state.products.filter((st) => st.name.toLowerCase().includes(action.payload.toLowerCase()));
                return {
                    products: state.products,
                    filtered_products: filter
                }
            }
        case PRODUCTS_SORT:

            let discountSort;
            if (action.payload === 2) {
                discountSort = sortByKey(state.products, 'discount');
            }
            else if (action.payload === 0) {
                discountSort = sortByKeyDesc(state.products, 'actual');
            }
            else if (action.payload === 1) {
                discountSort = sortByKeyAsc(state.products, 'actual');
            }
            console.log(discountSort)
            return {
                products: state.products,
                filtered_products: [...discountSort]
            }

        case PRODUCTS_FILTER:
            let filterdProducts = state.products.filter((prod) => {
                return prod.price.actual >= action.payload[0] && prod.price.actual <= action.payload[1]
            })
            return {
                products: state.products,
                filtered_products: [...filterdProducts]
            }
        default:
            return state;
    }
}

function sortByKeyDesc(array, key) {
    return array.sort(function (a, b) {
        var x = a['price'][key]; var y = b['price'][key];
        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
    });
}
function sortByKeyAsc(array, key) {
    return array.sort(function (a, b) {
        var x = a['price'][key]; var y = b['price'][key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}
function sortByKey(array, key) {
    return array.sort(function (a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
    });
}