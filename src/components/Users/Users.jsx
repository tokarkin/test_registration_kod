import React, {Fragment} from "react";
import Media from 'react-media';
import Avatar from "@material-ui/core/Avatar";





const Users =(props) =>{

    return(
        <Media queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1199px)",
            large: "(min-width: 1200px)"
        }}>
            { matches => (
            <Fragment>
                {matches.small && <div style={{width:'100%',textAlign:'center',height:'auto'}}  >
                  <div style={{alignSelf: 'center',}} >
                      <img style={{width:'50px',height:'50x',borderRadius:'50px'}} alt={props.user.name} src={props.user.photo} />
                  </div>
                    <div style={{padding:'10px 40px 10px 40px '}}>
                        <div >
                            {props.user.name}
                        </div>
                        <div >
                            {props.user.position}
                        </div>
                        <div style={{textOverflow: 'ellipsis',overflow: 'hidden'}} title={props.user.email} >
                            {props.user.email}
                        </div>
                        <div>
                            {props.user.phone}
                        </div>
                    </div>
                </div>  }
                {matches.medium && <div style={{width:'33%',textAlign:'center'}}  >
                    <img style={
                        {borderRadius:'50%', heigth:'50px', width:'50px'}
                    } alt={props.user.name} src={props.user.photo} />
                    <div style={{padding:'10px 40px 10px 40px '}}>
                        <div >
                            {props.user.name}
                        </div>
                        <div >
                            {props.user.position}
                        </div>
                        <div style={{textOverflow: 'ellipsis',overflow: 'hidden'}} title={props.user.email} >
                            {props.user.email}
                        </div>
                        <div>
                            {props.user.phone}
                        </div>
                    </div>
                </div>  }
                {matches.large &&  <div style={{width:'33%',textAlign:'center'}}  >
                    <img style={
                        {borderRadius:'50%', heigth:'50px', width:'50px'}
                    } alt={props.user.name} src={props.user.photo} />
                    <div style={{padding:'10px 40px 10px 40px '}}>
                        <div >
                            {props.user.name}
                        </div>
                        <div >
                            {props.user.position}
                        </div>
                        <div style={{textOverflow: 'ellipsis',overflow: 'hidden'}} title={props.user.email} >
                            {props.user.email}
                        </div>
                        <div>
                            {props.user.phone}
                        </div>
                    </div>
                </div> }
            </Fragment>
            )}

        </Media>   )
};
export default Users;