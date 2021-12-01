import React, { Component } from 'react';
import {useParams } from 'react-router';
const ProductInfo = (props) => {
    let{arr} = useParams()
    console.log(props.products.filter((x)=>{
        if(x.id === Object.Number(arr)){
            return x
        }
    }))
    // let pr = props.products[arr].filter((x)=>{
    //     if(x.id === props.products[arr].id){
    //         return x
    //     }
    // })
    return (
    <React.Fragment>
    <h1>Info of:  </h1>
    <h1>quantity: </h1>
    </React.Fragment>
    );
}
 
export default ProductInfo;