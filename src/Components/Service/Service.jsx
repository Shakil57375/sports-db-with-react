import React from 'react';
import './service.css'
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpiner';
const Service = ({service}) => {
    const {idMeal, strArea, strCategory, strMeal} = service
    const navigation = useNavigation()
    const navigate = useNavigate()
    const handleNavigation = () =>{
        navigate(`/service/${strMeal}`)
    }
    console.log(navigation.state)
    if (navigation.state === 'loading') {
      return <LoadingSpinner></LoadingSpinner>
    }
    // console.log(service);
    return (
        <div className='meals bg-yellow-200 shadow-lg'>
            <h1>ID : {idMeal} </h1>
            <h2>Name : {strMeal} </h2>
            <h3>Area : {strArea} </h3>
            <h4>Food Category : {strCategory} </h4>
            <Link className='btn mr-4 mt-4' to={`/service/${strMeal}`}>Show Details</Link>
            <Link className='btn' to={`/service/${strMeal}`} ><button>With button</button></Link>
            <button className='btn mt-4' onClick={handleNavigation}>with handeler</button>
        </div>
    );
};

export default Service;