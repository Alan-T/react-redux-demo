import React from "react";
import styles from './style.module.less';

const Main = (props) => {
    return <div className={styles.main}>
        <section>
            {props.children}
        </section>
    </div>
}
export default Main