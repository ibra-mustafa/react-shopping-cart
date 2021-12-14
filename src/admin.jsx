import React, { Component } from 'react';

class Admin extends React.Component {
    render() { 
        return (
            <React.Fragment>
            <table className="table">
  <thead className="black white-text">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    { this.props.products.map(element => {
            return(
                 <tr>
                    <td>{element.name}</td>
                    <td>{element.price}</td>
                    <td>{element.id}</td>
                 </tr>
            )
        })
    }
  </tbody>
</table>
        </React.Fragment>
        );
    }
}
 
export default Admin;