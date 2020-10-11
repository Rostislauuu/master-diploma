//will combine all reducers in future, leave one reducer for now

const initialState = {
    subjects: [] 
}

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        default: return state;
    }
}

export default mainReducer;