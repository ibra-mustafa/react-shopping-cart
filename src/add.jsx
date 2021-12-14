import React, { Component } from 'react';
class Add extends React.Component {
    render() { 
        return (
        <React.Fragment>
            <form>
              <h1>Add </h1>
             <div className="mb-3">
               <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
               <input name="productName"   type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
             </div>
             <div className="mb-3">
               <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
               <input name="Amount"  type="Amount" className="form-control" id="exampleInputPassword1"/>
             </div>
             <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </React.Fragment>
);
    }
}
 
export default Add;