import React from 'react';

export default function Hero({children}) {
    return <div className="hero">
        <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
                <div className="banner">
                    <h1>Summer <span>Collection</span></h1>
                    <p> <span>25%</span> OFF</p>
                    {children}
                </div>
            </div>
        </div>
    </div>;
}
