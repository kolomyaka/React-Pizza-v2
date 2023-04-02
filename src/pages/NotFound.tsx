import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <>
            <div className="content">
                <div className="container container--cart">
                    <div className="cart cart--empty">
                        <h4 className="cart--emoji">😕</h4>
                        <h2>That page can’t be found</h2>
                        <p>Maybe try one of the links below</p>
                        <Link to="/" className="button button--black">
                            <span>Go to home page</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
