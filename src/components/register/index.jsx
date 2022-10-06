import React, { Component } from 'react'
import { Formik } from 'formik';
import { connect } from 'react-redux';
import {registerUser} from '../../store/actions/userAction';
import './style.css'

 class Index extends Component {
    constructor(props) { 
        super(props); 
     this.initialValues = { firstName:'',lastName:'',email: '', password: '',confirmPassword: '',};

     }
     validate = (values) => {
        
        const errors = {};
        if (!values.email) {
           errors.email= '*Required';
        }
        if (!values.password) {
           errors.password = '*Required';
        }
        if(!values.confirmPassword) {
            errors.confirmPassword= '*Required';
        }
        if(values.confirmPassword!==values.password) {
          errors.confirmPassword= '*Password and confirm password are not the same';
      }
        if(!values.firstName)
        {
            errors.firstName= '*Required';
        }
        if(!values.lastName){
            errors.lastName= '*Required';
        }
    
        return errors;
     }
     handleSubmit = (values, setSubmitting) => {
      console.log(values.email)
      const { registerUser } = this.props;                
      registerUser({email:values.email,password:values.password});
      setSubmitting(false);
     }

     componentDidMount(){
      if(localStorage.getItem('token'))
      window.location.href="http://localhost:3000/";
     }
     componentDidUpdate(prevProps) {
 
      if (prevProps?.user !== this.props?.user) {
          if(this.props?.user[0].error===false)
          {
      alert(`Your Account has benn created sucessfully!!!`)
      window.location.href="http://localhost:3000/login";

          }
      else{
          alert("Please use regres email address!!!")
        
      }
      }
    }
  render() {
    return (
        <div className="register-form">
             <Formik
           initialValues={this.initialValues}
           validate={values => this.validate(values)}
           onSubmit={(values, { setSubmitting }) => this.handleSubmit(values, setSubmitting)} >
     
    {({
         values,
         errors,
         touched,
         handleChange,
        
         handleSubmit,
    
         /* and other goodies */
       }) => ( 
  <form onSubmit={handleSubmit}>
    <h1>Register</h1>
    <div className="content">
    <div className="input-field">
        <input type="text"
        name="firstName"
        value={values.firstName}
        onChange={handleChange}   
        placeholder="First Name"  />
    <span className="error" >{errors.firstName&&touched.firstName&&errors.firstName}</span>

      </div>
      <div className="input-field">
        <input type="text" 
        name="lastName"
        onChange={handleChange}   
        value={values.lastName}
        placeholder="Last Name"  />
    <span className="error" >{errors.lastName&&touched.lastName&&errors.lastName}</span>

      </div>
      <div className="input-field">
        <input type="email"
        name="email"
        onChange={handleChange}   
        value={values.email}
        placeholder="Email"  />
    <span className="error" >{errors.email&&touched.email&&errors.email}</span>

      </div>
      <div className="input-field">
        <input type="password"
        name="password"
        onChange={handleChange}  
        value={values.password} 
        placeholder="Password"  />
    <span className="error" >{errors.password&&touched.password&&errors.password}</span>

      </div>
      <div className="input-field">
        <input type="password"
        name="confirmPassword"
        placeholder="Confirm Password"  
        onChange={handleChange}
        value={values.confirmPassword}
        
        />
    <span className="error" >{errors.confirmPassword&&touched.confirmPassword&&errors.confirmPassword}</span>

      </div>
      <button className="login-button" type="submit" >
             Register
           </button>
    </div>
  </form>)}
  </Formik>
</div>

    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};
export default connect(mapStateToProps, {registerUser})(Index)