import React, { Component } from 'react';
import axios from 'axios';
class Editit extends React.Component {
    state = {
        name:"",price:"",count:0,inCart: false
    }
    
     handleChange=(e)=>{
        let stateClone = {...this.state}
        stateClone[e.currentTarget.name] = e.currentTarget.value
        this.setState(stateClone)
  }
   async componentDidMount(){
    let { data }= await axios.get("http://localhost:3000/products/"+this.props.id , this.state)
    let clone = {...this.state}
    clone.name = data.name
    clone.price = data.price
    this.setState(clone)
  }
  editProduct=async(e)=>{
    let stateClone = {...this.state}
    e.preventDefault()
    await axios.put("http://localhost:3000/products/"+this.props.id ,stateClone)
  }
    render() { 
        return(
            <React.Fragment>
            <form>
              <h1>Edit </h1>
             <div className="mb-3">
               <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
               <input name="name" onChange={this.handleChange} value={this.state.name} type="text" className="form-control"/>
             </div>
             <div className="mb-3">
               <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
               <input name="price" onChange={this.handleChange} value={this.state.price} type="Amount" className="form-control" />
             </div>
             <button onClick={this.editProduct} type="submit" className="btn btn-primary">
               Edit
            </button>
            </form>
        </React.Fragment>
        );
    }
}
 
export default Editit;