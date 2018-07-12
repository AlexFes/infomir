export const onclickAction = (clicked) => {
    return { type: 'TOGGLE_DROPDOWN', payload: clicked};
};

export const onclickStoreAction = (clicked) => {
    return { type: 'TOGGLE_STORE', payload: clicked};
};
