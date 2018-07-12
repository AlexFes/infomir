export const onclickReducer = (state = {clicked: 0, clickedStore: 0}, action) => {
    switch (action.type) {
        case 'TOGGLE_DROPDOWN':
            return {
                clicked: action.payload ? 0 : 1
            };

        case 'TOGGLE_STORE':
            return {
                clickedStore: action.payload ? 0 : 1
            };

        default:
            return state;
    }
};