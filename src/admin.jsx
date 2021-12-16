import React from 'react';
import { Link } from 'react-router-dom';
class Admin extends React.Component {
  can = ()=>{
    return(<div className="btn btn-danger"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
  </svg></div>)
  }
  edit = ()=>{
    return(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-left-square" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm10.096 3.146a.5.5 0 1 1 .707.708L6.707 9.95h2.768a.5.5 0 1 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.475a.5.5 0 1 1 1 0v2.768l4.096-4.097z"/>
</svg>)
  }
  new = ()=>{
    
  }
    render() { 
        return (
            <React.Fragment>
              <h1>
                Admin
              </h1>              
              <Link to="/add/new">
              <div className="btn btn-primary" onClick={this.new}>
                  Add
              </div>       
               </Link>  
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
                 <tr key= {element.id}>
                    <td>{element.name}</td>
                    <td>{element.price}</td>
                    <td><Link to={`add/${element.id}`}> {this.edit()}</Link></td>
                    <td className='click' onClick={()=>this.props.deleteHandler(element)}>{this.can()}</td>
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