import React from 'react';
import './Title.css';
import Category from './../../pages/Category/Category';

const Title = ({ subtitle, title }) => {
    return (
        <div className='title'>
            <p>{subtitle}</p>
            <h2>{title}</h2>
        </div>
    )
}

export default Title