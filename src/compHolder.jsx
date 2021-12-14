import React, { Component } from 'react';
import NavBar from './navbar';
import ShoppingCart from './shoppingCart';
import { Routes, Route, Link } from "react-router-dom";
import ProductInfo from './productInfo';
import NotFound from './404';
import Table from './table';
import Login from './login';
import axios from 'axios';
import Admin from './admin';
import Add from './add';
class App extends React.Component {
    state={
        products:[]
    }
    async componentDidMount(){
      
        let {data} = await axios.get('http://localhost:3000/products')
        this.setState({products: data})
    }
    handleCart = (product)=>{
        let products= [...this.state.products]
        let index= this.state.products.indexOf(product)
        products[index] = {...products[index]}
        products[index].inCart=!products[index].inCart
        this.setState({products})
      }

    // deleteHandler=(product)=>{
    //     //cloning and editing the state object
    //     let products = this.state.products.filter(p => product.id !==  p.id )
    //     //setting the state
    //     this.setState({products}) 
    // }
    reset=()=>{
        let products = this.state.products
        products.forEach((p)=>{p.count=0})
        this.setState({products})
    }
    incerment= (product)=> {
        let products= [...this.state.products]
        let index= this.state.products.indexOf(product)
        products[index].count++
        this.setState({products})
    }
    render() { 
        return (
        <React.Fragment>
            
            <NavBar productsCount={this.state.products.filter((p)=> p.count>0).length}/>
            <div className="container navbar-expand-lg">              
            <Routes>
                <Route path="/shoppingCart" 
                element={<ShoppingCart 
                    products ={this.state.products.filter(x=>x.inCart)}
                    reset ={this.reset} 
                    incerment={this.incerment} 
                    deleteHandler={this.handleCart}
                />}/>
                <Route path="/productInfo/:arr"  element={<ProductInfo products={this.state.products}/>}/>
                <Route path="*"  element={<NotFound/>}/>
                <Route path="/table"  element={<Table products={this.state.products} handleCart={this.handleCart}/>}/>
                <Route path="/admin" element={<Admin products={this.state.products}/>}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/add" element={<Add />}/>
            </Routes>
            </div>
        </React.Fragment>
            
        );
    }
}
 
export default App;