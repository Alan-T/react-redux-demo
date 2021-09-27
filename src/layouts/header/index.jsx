import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './style.module.less';

const Header = ({ setting }) => {
    return <React.Fragment>
        <header>
            <section>
                <Link to="/" className={styles.navHome}>
                    {setting.title}
                </Link>
                <nav>
                    <Link to="/home">首页</Link>
                    <Link to="/news">新闻</Link>
                    <Link to="/user">用户</Link>
                    <Link to="/setting">设置</Link>
                </nav>
                <div className={styles.rightContent}>
                    <Link to="/login">退出</Link>
                </div>
            </section>
        </header>
    </React.Fragment >
}

export default connect(({ setting }) => ({
    setting
}))(Header)