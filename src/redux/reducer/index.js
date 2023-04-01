const initialState = {
    users: [],
}

function rootReducer(state=initialState, action){
    switch(action.type){
     
        case "REGISTER":
            return {
                ...state,
                users: [...state.users, action.payload]
            }
    
        default :
            return {...state}           
    
        }
    }
    

export default rootReducer;