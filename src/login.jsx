import React, { Component } from 'react';

class Login extends React.Component {
    state = {
            userMail: "",
            password:""
    }
    handleSubmit = (e)=>{
        e.preventDefault()
        
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
                       <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                     </div>
                     <div className="mb-3">
                       <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                       <input onChange={this.handleChange} name="password" value={this.state.password} type="password" className="form-control" id="exampleInputPassword1"/>
                     </div>
                     <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
                    </form>
        </React.Fragment>
            
        )
    }
}
 
export default Login;