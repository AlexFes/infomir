import axios from 'axios';
import { push } from 'connected-react-router';

export const fetchAuthData = () => async (dispatch) => {
    const result = await axios.post('/admin/checkAuth');

    if (!result.data) {
        dispatch(push('/admin/login'));
    } else {
        dispatch({ type: 'AUTH_SUCCESS', payload: result.data})
    }
};

export const onclickAction = (clicked) => {
    return { type: 'TOGGLE_DROPDOWN', payload: clicked};
};

export const onclickStoreAction = (clicked) => {
    return { type: 'TOGGLE_STORE', payload: clicked};
};

export const onclickModalCheckout = (clicked) => {
    return { type: 'TOGGLE_CHECKOUT', payload: clicked };
};

export const onclickModalSubmit = (clicked) => {
    return { type: 'TOGGLE_SUBMIT', payload: clicked };
};

export const fetchInitialData = () => async (dispatch) => {
    const result = await axios.get('/store/products');

    dispatch({ type: 'FETCH_INITIAL_DATA', payload: result.data });
};

export const addProduct = (productId, productValue) => async (dispatch) => {
    const result = await axios.post('/store/addProduct/' + productId, {productValue});

    dispatch({ type: 'ADD_PRODUCT', payload: result.data });
};

export const removeProduct = (productId) => async (dispatch) => {
    const result = await axios.post('/store/removeProduct/' + productId);

    dispatch({ type: 'REMOVE_PRODUCT', payload: result.data });
};

export const handleCheckout = (formData) => async (dispatch) => {
    await axios.post(
        '/store/checkout',
        {
            name: formData.name,
            phoneNumber: formData.phoneNumber,
            address: formData.address,
            emailAddress: formData.emailAddress,
            comment: formData.comment
        }
    );

    dispatch({ type: 'CHECKOUT', payload: [] });
};

export const addItem = (formData) => async (dispatch) => {
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };

    const result = await axios.post('/newsfeed/addItem', formData, config);

    dispatch({ type: 'ADD_ITEM', payload: result.data });
};