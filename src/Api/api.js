import * as axios from 'axios';
const  instance = axios.create({
    baseURL:'https://frontend-test-assignment-api.abz.agency/api/v1/',
});

export  const usersApi = {
    getUsers (pageNumber=1,totalUser=6){
        return instance.get(`users?page=${pageNumber}&count=${totalUser}`)
            .then(response =>{return response}
            )
    },
    getToken(){
        return axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/token`)
            .then(response =>{return response});
    },
    getPositions(){
        return instance.get(`/positions`)
            .then(response =>{return response});
    },
};
