const InitialState = {
    CurrentUser:null
}

const UserReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'SETUSER':
            return {
                ...state,
                CurrentUser:action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default UserReducer;