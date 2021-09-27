import React from 'react';
import { connect } from 'react-redux';
const News = (props) => {
    const { global, dispatch } = props;

    const fetchNotice = () => {
        dispatch({
            type: 'global/fetchNotices',
            payload: [
                { name: '123', key: 1 },
                { name: '124', key: 2 }
            ]
        })
    }

    const clearNotice = () => {
        dispatch({
            type: 'global/clearNotices',
            payload: []
        })
    }

    return (
        <div>
            <p style={{ fontSize: '16px', lineHeight: '36px' }}>
                一共有消息 {global.notices.length} 条
            </p>
            <div>
                <button onClick={fetchNotice}>
                    获取消息
                </button>
                <button onClick={clearNotice}>
                    删除消息
                </button>
            </div>
        </div >
    )
}
export default connect(({ global }) => ({
    global
}))(News)