import { Formik } from 'formik';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {loginUser} from '../../store/actions/userAction';
import './style.css'

  class Index extends Component {
    constructor(props) { 
        super(props); 
     this.initialValues = { email: '', password: '' };
 
     }
     validate = (values) => {
        
        const errors = {};
        if (!values.email) {
           errors.email= '*Required';
        }
        if (!values.password) {
           errors.password = '*Required';
        }
       
        return errors;
     }
     handleSubmit = (values, setSubmitting) => {
        const { loginUser } = this.props;                
        loginUser(values);
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

              localStorage.setItem("token",this.props?.user[0].token);
                
        window.location.href="http://localhost:3000/";

            }
        else{
            alert(this.props?.user[0].message)
            window.location.reload();
        }
            
          // Now fetch the new data here.
        }
      }
   
  render() {
    return (
        <div className="login-form">
   <Formik
           initialValues={this.initialValues}
           validate={values => this.validate(values)}
           onSubmit={(values, { setSubmitting }) => this.handleSubmit(values, setSubmitting)} >
     
    {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting
    
       }) => (         
  <form onSubmit={handleSubmit}>
    <h1>Login</h1>
    <div className="content">
      <div className="input-field">
        <input
        type="email"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
    placeholder="Email"  />
    <span className="error" >{errors.email&&touched.email&&errors.email}</span>
      </div>
      
      <div className="input-field">
        <input 
        type="password" 
        name="password" 
        onChange={handleChange}   
        onBlur={handleBlur}
        value={values.password} placeholder="Password"  />
    <span className="error">{errors.password&&touched.password&&errors.password}</span>

      </div>
      
     
      <button className="login-button" type="submit" disabled={isSubmitting}  >
             Login
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
export default connect(mapStateToProps, {loginUser})(Index)
