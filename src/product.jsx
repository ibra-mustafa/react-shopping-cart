import React from "react";
import { Link } from 'react-router-dom';
class Product extends React.Component {
    render() { 
        return( 
         <div>
            <span>
                <Link to={`/productInfo/${this.props.product.id}`} >
                 {this.props.product.name}
                 </Link>
                </span>
            <span className='p-3'>{this.props.product.count}</span>
            <button onClick={()=>this.props.incerment(this.props.product)} className= "btn btn-primary btn-sm">+</button>
            <button onClick={()=>this.props.onDelete(this.props.product)} className= "btn btn-danger btn-sm m-1">X</button>
            </div>
        )
             
    }
}

export default Product;