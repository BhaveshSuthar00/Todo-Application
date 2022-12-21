export const ADD_TASK = 'ADD_TASK';
export const CHANGE_STATUS = "CHANGE_STATUS";
export const addTask = (data) => ({type : ADD_TASK, payload : data});
export const changeStatus = (data)=> ({type: CHANGE_STATUS, payload : data})
export const DELETE_TASK = 'DELETE_TASK';
export const deleteTask = (data)=> ({type : DELETE_TASK, payload : data});
export const CLICK_CHACK = 'CLICK_CHACK';
export const checkClick = (data)=> ({type  : CLICK_CHACK, payload : data});
export const UPDATE_TASK = 'UPDATE_TASK';
export const updateTask = (data)=> ({type : UPDATE_TASK, payload : data});
export const UPDATE_ALL_TASKS = 'UPDATE_ALL_TASKS';
export const updateAllTasks = ()=> ({type : UPDATE_ALL_TASKS});
export const DELETE_COMPLETED_TASKS = 'DELETE_COMPLETED_TASKS'
export const deleteCompletedTasks = ()=> ({type : DELETE_COMPLETED_TASKS});
export const DELETE_MULTIPLE_TASKS = "DELETE_MULTIPLE_TASKS";
export const deleteMultipleTasks = (data)=> ({type : DELETE_MULTIPLE_TASKS, payload : data});