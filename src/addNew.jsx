import React, { Component } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
class AddNew extends React.Component {
    state = {
        name:"",price:"",count:0,inCart: false
    }
    
  handleChange=(e)=>{
        let stateClone = {...this.state}
        stateClone[e.currentTarget.name] = e.currentTarget.value
        this.setState(stateClone)
  }
  newProduct = async(e)=>{
      e.preventDefault()
    let clone = {...this.state}
    await axios.post("http://localhost:3000/products/", clone)

  }
    render() { 
        return(
            <React.Fragment>
            <form>
              <h1>Add </h1>
             <div className="mb-3">
               <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
               <input name="name" onChange={this.handleChange} value={this.state.name} className="form-control"aria-describedby="emailHelp"/>
             </div>
             <div className="mb-3">
               <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
               <input name="price" onChange={this.handleChange} value={this.state.price}  className="form-control" />
             </div>
             <button onClick={this.newProduct} type="submit" className="btn btn-primary">
               Add
            </button>
            </form>
        </React.Fragment>
        );
    }
}
 
export default AddNew;