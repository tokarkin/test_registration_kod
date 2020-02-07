import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {clearUser, getMoreUsersThunk, getUsersThunk} from "../../thunk/usersThunk";
import Users from "./Users";
import './users.scss'


const UsersContainer =(props)=> {
    const [count,setCount] = useState(2);
    useEffect(()=>{
     props.getUsersThunk();
    },[]);
    let showMoreUsers =( )=>{
        setCount(count+1);
        console.log(count);
        props.getMoreUsersThunk(count,6);
    };
    let Delete =()=>{
        props.clearUser();
        setCount(1);
        console.log(count)
    };
    let mapUsers = props.users.users.map((user,key) => <Users  key={key} user={user}/> );
        return (
            <div className={'containerUsers'}>
                {mapUsers}
                    <div className={'showMoreBtn'}>
                        {
                            count === 12 ?
                                <button onClick={Delete}> delete</button>
                                :
                                <button onClick={showMoreUsers} className={'btn'} >
                                    Show more
                                </button>
                        }
                    </div>

            </div>

        )
};
const mapStateToProps = (state)=>{
    return{
        users: state.users,
    }
};


export default connect(mapStateToProps,{getUsersThunk,clearUser,getMoreUsersThunk})(UsersContainer);