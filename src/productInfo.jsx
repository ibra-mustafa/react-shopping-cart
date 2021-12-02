import React, { Component } from 'react';
import {useParams } from 'react-router';
const ProductInfo = (props) => {
    let{arr} = useParams()
    // console.log(props.products[0].name, arr)
    let pr = props.products.filter((x)=>{
        if( x.id === parseInt(arr) )
            return x
        
    })
    return (
    <React.Fragment>
        <h1>Info of: {pr[0].name} </h1>
        <h1>quantity: {pr[0].count} </h1>
    </React.Fragment>
    );
}
 
export default ProductInfo;