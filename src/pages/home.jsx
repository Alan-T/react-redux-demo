import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = (props) => {
    const { setting } = props;

    return (
        <div>
            <h1>首页</h1>
            <div>
                标题名称： {setting.title}
            </div>

            <div>
                <Link to="/news">跳转到News页面</Link>
            </div>
        </div >
    )
}
export default connect(({ setting }) => ({
    setting
}))(Home)