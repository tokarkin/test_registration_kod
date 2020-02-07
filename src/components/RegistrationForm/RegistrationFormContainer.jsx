import React, {Component} from "react";
import Form from "./Form";
import {connect} from "react-redux";
import {getPosition, getUsersThunk, pushDataOfUserOnServer} from "../../thunk/usersThunk";

class RegistrationFormContainer extends Component {
        state={
            postitionId:'',
        };
    componentDidMount() {
        this.props.getPosition();
    }
    Click=(e)=>{
        this.state.postitionId=e;
    };
    onSubmit = (formData) => {
        let UsersData = {
                position_id: this.state.postitionId,
                name: formData.name,
                email: formData.email,
                phone: '+380'+formData.phone,
                photo: formData.file[0],
        };
        this.props.pushDataOfUserOnServer(UsersData);
        console.log(UsersData);
    };
    render() {
        return (
            <div >
                <Form error={this.state.errors} position={this.props.position} Click={this.Click} onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

let moveStateToProps = (state) => {
    return {
        position: state.users.position,
        error:state.errors,
    }
};

export default connect(moveStateToProps, {getPosition,pushDataOfUserOnServer,getUsersThunk,})(RegistrationFormContainer);