
const types = {
    INCREMENT: 'INCREMENT',
    DECCREMENT: 'DECCREMENT',
    RESET: 'RESET',


    ADD_USER: 'ADD_USER',
    DELETE_USER: 'DELETE_USER',
    CLOSE_MENU: 'CLOSE_MENU'  
}

export const amimationReduce = (state = "openMenu", {type} ) => {
    switch(type){
        case types.CLOSE_MENU: 
            return "closeMenu";
        default: return state;
   
    }
}

export const counterReducer = (state = 1, { type, payload }) => {
    switch(type){
        case types.INCREMENT: 
            return state + 1

        case types.DECCREMENT: 
            return state - 1 

        case types.RESET: 
            return 0 

        default: return state;
    }
}

const initUser = { 
    userList : [],
    mood: 'amdin', 
}

export const userList = (state = initUser, { type, payload }) => {
    switch(type){
        case types.ADD_USER: return {
            ...state, 
            userList: state.userList.concat({ 
                key: Math.random(), 
                name: payload.data 
            })
        }
        

        case types.DELETE_USER: 
            return { 
                ...state, 
                userList: state.userList.filter((item)=> item.key !== payload.key),
            }
            
        default: return state;
    }
}