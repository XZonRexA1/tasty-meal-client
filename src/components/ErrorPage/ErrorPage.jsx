import React from 'react';
import errorImage from '../../../public/404page.png'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div>
            <img className='w-50 mx-auto' src={errorImage} alt="error photo" />
            <Link to="/"><h1 className='text-4xl font-bold'>Go Back</h1></Link>
        </div>
    );
};

export default ErrorPage;