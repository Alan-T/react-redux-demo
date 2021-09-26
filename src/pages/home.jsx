import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const Home = (props) => {
    debugger
    return (
        <div>
            Home
            {props.global.title}
            <Link to="/news">News</Link>
        </div >
    )
}
export default connect(({ global }) => ({
    global
}))(Home)