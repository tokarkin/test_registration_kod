import {usersApi} from "../Api/api";
import {getPositions, getUsers, clearUsers, getMoreUsers, getErrors} from "../redux/users-reducer";
import {reset} from 'redux-form';

export const getUsersThunk  = (pageNumber,totalUser) => {
    return(dispatch) => {
        usersApi.getUsers(pageNumber,totalUser).then(data =>{
            dispatch(getUsers(data.data.users));
        });

    }
};
export const getMoreUsersThunk  = (pageNumber,totalUser) => {
    return(dispatch) => {
        usersApi.getUsers(pageNumber,totalUser).then(data =>{
            dispatch(getMoreUsers(data.data.users));
        });

    }
};



export const getPosition = ()=>{
    return(dispatch) =>{
        usersApi.getPositions().then(data =>{
            dispatch(getPositions(data.data.positions))
        })
    }
};

export  const clearUser = ()=>{
    return(dispatch) =>{
        usersApi.getUsers(1,6).then(data =>{
            dispatch(clearUsers(data.data.users));
            console.log(data.data.users);
        });
    }
};

export const pushDataOfUserOnServer = (body)=>{
    return(dispatch) =>{
        usersApi.getToken().then(token=> {
            console.log(token.data.token)
            const form_data = new FormData();
            Object.keys(body).forEach(item => { form_data.append(item, body[item]); });
            fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users',{
                method: 'POST',
                body: form_data,
                headers: {
                    'Token': token.data.token,
                },
            }).then(response=> {
                dispatch(getErrors(response));
                usersApi.getUsers().then(data =>{
                    dispatch(getUsers(data.data.users));
                });
                dispatch(reset('registration'))
            });
        })
    }
};