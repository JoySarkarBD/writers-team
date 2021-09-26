import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="container header bg-warning pb-3 border rounded-bottom text-secondary">
                <h1>Writers seminar.</h1>
                <h5>We want to gift some brand new books to our future generation to make their future better.</h5>
                <h2>Total budget: 1 Billion</h2>
            </div>
        </div>
    );
};

export default Header;