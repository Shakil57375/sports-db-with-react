import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Service from '../Service/Service';
import LoadingSpinner from '../LoadingSpiner';

const Services = () => {
    const navigation = useNavigation()
    console.log(navigation.state)
    if (navigation.state === 'loading') {
      return <LoadingSpinner></LoadingSpinner>
    }
    const services = useLoaderData()
    // console.log(services.meals)
    return (
        <div className='grid grid-cols-3 gap-3'>
            {
                services.meals.map(service => <Service service = {service} key = {service.idMeal} ></Service>)
            }
        </div>
    );
};

export default Services;