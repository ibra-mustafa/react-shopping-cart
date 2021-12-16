import React from 'react';
import { render } from '@testing-library/react';
import { useParams, useNavigate } from 'react-router';
import AddNew from './addNew';
let Add = (props)=> {
  let redirect = (e)=>{
    let navigate = useNavigate
    return navigate
  }


  let RrenderMe = ()=>{
    let {id} = useParams()
    if(id == "new"){
      return <AddNew redirect ={redirect}/>
    }
  }
  return RrenderMe()
}
 
export default Add;