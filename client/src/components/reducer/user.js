const userReducer = (state, action) => {
    switch (action.type) {
        case 'SIGNIN':
            return {
                ...state,
                logged: true,
                ...action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                logged: false,
                email: '',
                password: '',
            }
        default:
            throw new Error("Action type not defined in user dispatch");
    }
}

export default userReducer