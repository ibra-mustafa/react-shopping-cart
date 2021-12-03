import React from 'react';
import {Navigate, useNavigate, useParams } from 'react-router';
const ProductInfo = (props) => {
    let{arr} = useParams()
    // console.log(props.products[0].name, arr)
    let pr = props.products.filter((x)=>{
        if( x.id === parseInt(arr) )
            return x
    })
    let savefunc = useNavigate()
    return (
    <React.Fragment>
        <h1>Info of: {pr[0].name} </h1>
        <h1>quantity: {pr[0].count} </h1>
        <button onClick={()=>savefunc('/shoppingCart')} className="btn btn-primary btn-sm">Save</button>
    </React.Fragment>
    );
}
 
export default ProductInfo;