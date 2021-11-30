import React from "react";
class Product extends React.Component {
    // state={
    //     name:this.props.product.name,
    //     count:this.props.product.count        
    // }  
    render() { 
        return( 
         <div>
            <span>{this.props.product.name}</span>
            <span className='p-3'>{this.props.product.count}</span>
            <button onClick={()=>this.props.incerment(this.props.product)} className= "btn btn-primary btn-sm">+</button>
            <button onClick={()=>this.props.onDelete(this.props.product)} className= "btn btn-danger btn-sm m-1">X</button>
            </div>
        )
             
    }
}

export default Product;