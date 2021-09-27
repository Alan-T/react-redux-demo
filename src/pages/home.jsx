import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = (props) => {
    const { dispatch } = props;

    const alterTitle = () => {
        dispatch({
            type: 'global/updateSetting',
            payload: {
                title: '我是修改过的标题',
                copyright: '',
            }
        })
    }

    return (
        <div>
            Home
            {props.global.title}
            <Link to="/news">News</Link>
            <button onClick={alterTitle}>
                修改标题
            </button>
        </div >
    )
}
export default connect(({ global }) => ({
    global
}))(Home)