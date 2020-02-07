import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import { createTextMask} from "redux-form-input-masks";
import { file } from 'redux-form-validators'
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";



const Form = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    let onClick= (e)=>{
        props.Click(e);
    };
    const Submit=()=>{
        handleClickOpen();
    };
    return (



        <form style={{textAlign:'center'}} onSubmit={props.handleSubmit}>
            <div  >
            <div >

                <Field
                    name="name"
                    component={renderTextField}
                    variant="outlined"
                    label='Your name'
                />
            </div>
            <div  style={{margin:'20px'}}>
                <Field name="email" label="Your email" variant="outlined" component={renderTextField} />
            </div>

            <div>
                <Field name="phone"  variant="outlined" component={renderTextField} label="Phone Number" {...phoneMask}  />
            </div>
                <h4>
                    Select your position
                </h4>
            <div>
                {props.position !== undefined ? props.position.map((position,key) =>
                    <div key={key} style={{display:'flex',justifyContent:'center'}}>
                            <Field onClick={()=>onClick(position.id)} name="position" component="input"
                                   type="radio" value={position.name}

                            /> {position.name}
                    </div>
                ): <div></div>}
            </div>

        <div style={{marginTop:'15px'}}>
            <h4>
                Choose Foto
            </h4>
            <Field name="file"  component={renderFileInput}
                   validate={file({ accept: '.png, .jpg, .jpeg',maxSize: '5 MB', message: 'The selected file is not valid' },)}    />
        </div>
            <div style={{marginTop:'15px'}}>
                <Button type="submit"  variant="outlined" onClick={Submit}  color="primary" >
                    Submit
                </Button>
                <Button style={{marginLeft:'10px'}} type="button" variant="outlined" onClick={props.reset}>
                    Clear Values
                </Button>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Congratulations"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You have successfully passed the registration
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Great
                    </Button>
                </DialogActions>
            </Dialog>
            </div>
        </form>

    )
};













const validate = values => {
    let errors = {};

    const requiredFields = [
        'name',
        'email',
        'phone',

    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Please enter your name'
        }
    });
    if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address'
    }
    if (
        values.phone &&
        !/^([1-9][0-9]{8})$/i.test(values.phone)
    ) {
        errors.phone = 'Invalid  phone'
    }
    // if (values.file[0]){
    //     errors.file[0]= 'file shut be jpg/Jpeg'
    // }
    console.log(errors);
    return errors;
}

const renderTextField = ({
                             label,
                             input,
                             meta: { touched, invalid, error },
                             ...custom
                         }) => (
    <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
);

const renderFileInput = ({
                                    input: {value: file, ...props },
                                    meta: filesMeta,
                                    disabled,

                                }) => {
    return (
        <div>
            <input
                type="file"

                {...props}
                disabled={disabled}
                multiple

            />
        </div>
    )
};



const phoneMask = createTextMask({
    pattern: '+380(99) 999-99-99',
});


export default reduxForm({
    form: 'registration', // a unique identifier for this form
    destroyOnUnmount: false,
    validate,
})(Form)