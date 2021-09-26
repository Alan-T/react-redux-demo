import React from 'react';
import { connect } from 'react-redux';
const News = (props) => {
    debugger
    return (
        <div>
            {props.global.title}
            News
        </div >
    )
}
export default connect(({ global }) => ({
    global
}))(News)