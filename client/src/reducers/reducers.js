export const onclickReducer = (state = {clicked: false, clickedStore: false, checkoutModal: false, submitModal: false}, action) => {
    switch (action.type) {
        case 'TOGGLE_DROPDOWN':
            return {
                ...state,
                clicked: !action.payload
            };

        case 'TOGGLE_STORE':
            return {
                ...state,
                clickedStore: !action.payload
            };

        case 'TOGGLE_CHECKOUT':
            return {
                ...state,
                checkoutModal: !action.payload
            };

        case 'TOGGLE_SUBMIT':
            return {
                ...state,
                submitModal: !action.payload
            };

        default:
            return state;
    }
};

export const storeReducer = (state = {products: [], cart: null}, action) => {
    switch (action.type) {
        case 'FETCH_INITIAL_DATA':
            return {
                products: action.payload.products,
                cart: action.payload.cart
            };

        case 'ADD_PRODUCT':
            return {
                ...state,
                cart: action.payload
            };

        case 'REMOVE_PRODUCT':
            return {
                ...state,
                cart: action.payload
            };

        case 'CHECKOUT':
            return {
                ...state,
                cart: action.payload
            };

        default:
            return state;
    }
};