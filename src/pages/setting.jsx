import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
const Setting = (props) => {
    const { dispatch } = props;
    const [title, setTitle] = useState('标题')

    const updateTitle = () => {
        dispatch({
            type: 'setting/changeSetting',
            payload: {
                title: title,
                copyright: '',
            }
        })
    }

    return (
        <div>
            <h1>设置</h1>
            <label htmlFor="">修改标题：</label> <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
            <button onClick={updateTitle}>修改标题</button>

        </div >
    )
}
export default connect()(Setting)