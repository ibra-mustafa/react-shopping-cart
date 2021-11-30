import React, { Component } from "react";
import Product from "./product";

class ShoppingCart extends Component{
        render(){
        return(
            <React.Fragment>
                
                <h1>Shopping Cart</h1>
                <button className='btn btn-sm btn-secondary' onClick={this.props.reset}> reset</button>
                {this.props.products.map(product =>{
                    return(<Product key={product.id}
                     product={product} 
                     incerment={this.props.incerment} 
                     onDelete={this.props.deleteHandler}>
                        <h4>{product.id}</h4>
                        </Product>)
                })}
            </React.Fragment>
        )
    }
}

export default ShoppingCart 