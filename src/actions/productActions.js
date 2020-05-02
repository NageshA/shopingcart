import { PRODUCTS, PRODUCTS_SEARCH, PRODUCTS_SORT, PRODUCTS_FILTER } from './actionTypes';

export const addProducts = (products) => {
    return {
        type: PRODUCTS,
        payload: products
    }
}

export const productSearch = (value) => {
    return {
        type: PRODUCTS_SEARCH,
        payload: value
    }
}

export const sortProduct = (value) => {
    return {
        type: PRODUCTS_SORT,
        payload: value
    }
}

export const productFilter = (value) => {
    return {
        type: PRODUCTS_FILTER,
        payload: value
    }
}

