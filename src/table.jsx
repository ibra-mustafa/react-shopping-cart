import React from 'react';
import Cart from './cart';
let Table = (props) => {
  
  return(
            <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {props.products.map(element => {
              return(
              <tr key={element.id}>
                     <th scope="row">{element.name}</th>
                     <td>{element.price}</td>
                     <td> <Cart click={props.handleCart} product={element}/> </td>
              </tr>
                    )})}
  </tbody>
  
</table>
        )
    }


export default Table