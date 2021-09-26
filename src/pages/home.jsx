import React from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';

const Home = (props) => {
    return (
        <div>
            Home
            <Link to="/news">News</Link>
        </div >
    )
}
export default Home