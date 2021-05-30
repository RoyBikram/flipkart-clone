const InitialState = {
    displayAuthPopup:false
}

const AuthPopupReducer = (state = InitialState,action) => {
    switch (action.type){
        case 'TOGGLEAUTHPOPUP':
            return {
                ...state,
                displayAuthPopup:!state.displayAuthPopup
            }
        default:
            return state;
    }
}

export default AuthPopupReducer;