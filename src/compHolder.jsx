import React, { Component } from 'react';
import NavBar from './navbar';
import ShoppingCart from './shoppingCart';
import { Routes, Route, Link } from "react-router-dom";
import Home  from './home';
import Contact from './contact';
import About from './about';
import ProductInfo from './productInfo';
import NotFound from './404';
class App extends React.Component {
    state={
        products:[{id:1, name:'burger',count:0 },
        {id:2, name:'fries',count:3}]
    }
    deleteHandler=(product)=>{
        //cloning and editing the state object
        let products = this.state.products.filter(p => product.id !==  p.id )
        //setting the state
        this.setState({products}) 
    }
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
                    products ={this.state.products}
                    reset ={this.reset} 
                    incerment={this.incerment} 
                    deleteHandler={this.deleteHandler}
                />}/>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Home/>} />
                <Route path="/productInfo/:arr"  element={<ProductInfo products={this.state.products}/>}/>
                <Route path="*"  element={<NotFound/>}/>
            </Routes>
            </div>
        </React.Fragment>
            
        );
    }
}
 
export default App;