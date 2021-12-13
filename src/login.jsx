import React, { Component } from 'react';
import Joi from 'joi';
class Login extends React.Component {
    state = {
            userMail: "",
            password:"",
            errors:{}
    }
    schema = Joi.object({
      userMail: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    })

    handleSubmit = (e)=>{
        e.preventDefault()
        let errors = this.validate()
        if(errors) return;
        console.log(errors)
    }

    validate = ()=>{
      let errors = {}
      let stateClone = {...this.state}
      delete stateClone.errors
      let res = this.schema.validate(stateClone,{abortEarly:false})
      console.log(res)
      if(res.error == null ) return null
      for(let error of res.error.details){
        errors[error.path] = error.message
      }
      this.setState({errors})
    }

    handleChange=(e)=>{
      let stateClone = {...this.state}
      stateClone[e.currentTarget.name] = e.currentTarget.value
      this.setState(stateClone)
    }
    render() { 
        return (
        <React.Fragment>
                    <form>
                     <div className="mb-3">
                       <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                       <input onChange={this.handleChange} name="userMail" value={this.state.userMail}  type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                     </div>
                     {this.state.errors.userMail && (<div className="alert alert-danger">{this.state.errors.userMail}</div>)}
                     <div className="mb-3">
                       <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                       <input onChange={this.handleChange} name="password" value={this.state.password} type="password" className="form-control" id="exampleInputPassword1"/>
                     </div>
                     {this.state.errors.password && (<div className="alert alert-danger">{this.state.errors.password}</div>)}
                     <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
                    </form>
        </React.Fragment>
            
        )
    }
}
 
export default Login;