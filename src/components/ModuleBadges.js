import React from 'react';
import '../assets/css/modulebadges.css';
import { Link } from 'react-router-dom';

function ModuleBadges() {
    return (
        <div className='badge-container'>
            <Link to="/badges">
                <button className='btn btn-primary module-badge'>Badge 1</button>
            </Link>
            <Link to="/badges">
                <button className='btn btn-primary module-badge'>Badge 1</button>
            </Link>
            <Link to="/badges">
                <button className='btn btn-primary module-badge'>Badge 1</button>
            </Link>
            <Link to="/badges">
                <button className='btn btn-primary module-badge'>Badge 1</button>
            </Link>
            <Link to="/badges">
                <button className='btn btn-primary module-badge badge-inactive'>Badge 1</button>
            </Link>
            <Link to="/badges">
                <button className='btn btn-primary module-badge badge-inactive'>Badge 1</button>
            </Link>
        </div>
    );
};

export default ModuleBadges;
