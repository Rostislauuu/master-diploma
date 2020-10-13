const initialState = {
    isAuthenticated: false, //check with variable from local storage
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        default: return state;
    }
};

export default authReducer;