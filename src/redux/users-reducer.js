
const GET_USERS= 'GET_USERS';
const  GET_POSITION = 'GET_POSITION';
const CLEAR_USERS = 'CLEAR_USERS';
const GET_MORE_USERS = 'GET_MORE_USERS';
const GET_ERROR = 'GET_ERROR';


let initialState = {
    users:[{

    }],
    errors:[{
        result:'ok',
    }],
};
const userReducers = (state = initialState, action) => {
  switch(action.type) {
      case (GET_USERS):
          return {
              ...state,
            users: action.users,
          };
      case (GET_MORE_USERS):
          return {
              ...state,
              users: state.users.concat(action.moreUsers),
          };
      case (CLEAR_USERS):
          return {
              ...state,
              users: action.users
          };
      case (GET_POSITION):
          return {
              ...state,
              position:action.position,
          };
      case (GET_ERROR):
          return {
              ...state,
              errors: action.data,
          };
      default:
          return state;
  }
};

export const getUsers = (users) =>({type:GET_USERS, users});
export const getPositions =(position)=>({type:GET_POSITION, position});
export const clearUsers = (users)=>({type:CLEAR_USERS,users});
export const getMoreUsers = (moreUsers) =>({type:GET_MORE_USERS,moreUsers});
export const getErrors = (data) => ({type:GET_ERROR, data});
export default userReducers;
