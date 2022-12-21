import { ADD_TASK, CHANGE_STATUS, DELETE_COMPLETED_TASKS, CLICK_CHACK, DELETE_TASK, UPDATE_ALL_TASKS, UPDATE_TASK, DELETE_MULTIPLE_TASKS } from "./action"

const initialState = {
    todos : [],
    click : false,
}
export const todoReducer = (store = initialState, {type, payload}) => {
    switch (type) {
        case ADD_TASK : 
            return {...store, todos : [...store.todos, payload]}
        case CHANGE_STATUS :
            return {...store, 
                todos : store.todos.map((item)=> item.id === payload ? {...item, status : !item.status} : item)}
        case DELETE_TASK :
            return {...store,
            todos : 
            store.todos.filter((item)=> item.id !== payload)
        }
        case DELETE_MULTIPLE_TASKS : 
            return {...store,
                todos : 
                store.todos.filter((item)=> item.task !== payload)
            }   
        case UPDATE_TASK : {
            return {...store, 
                todos : store.todos.map((item)=> item.id === payload.id && item.task !== payload.task ? {...item, task : payload.task}: {...item})}
        }
        case UPDATE_ALL_TASKS : {
            let flag = false;
            store.todos.map((item)=> item.status !== true ? flag = true : null);
            if(flag){
                return {...store, todos : store.todos.map((item)=> item.status === false ? {...item, 
                    status : true} : item )}
            } else {
                return {...store, todos : store.todos.map((item)=> item.status !== false ? {...item, 
                    status : false} : item )}
            }
        }
        case DELETE_COMPLETED_TASKS : 
            return {...store, todos : store.todos.filter((item)=> item.status === false)}
        case CLICK_CHACK : 
            return {...store, click : payload}
        default : 
            return store
    }
}