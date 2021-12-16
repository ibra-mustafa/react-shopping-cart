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
    await axios.post("http://localhost:3000/products",this.state)
   
  }
    render() { 
        return(
            <React.Fragment>
            <form>
              <h1>Add </h1>
             <div className="mb-3">
               <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
               <input name="name" onChange={this.handleChange} value={this.state.name} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
             </div>
             <div className="mb-3">
               <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
               <input name="price" onChange={this.handleChange} value={this.state.price} type="Amount" className="form-control" id="exampleInputPassword1"/>
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