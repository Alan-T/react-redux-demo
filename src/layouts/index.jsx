import React, { Suspense } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';

const Layout = (props) => {
    return <div>
        <Suspense fallback={<div>正在加载...</div>}>
            <Switch>
                <Route exact path="/login" component={React.lazy(() => import(`../pages/login`))} />
                <Route path="/" component={React.lazy(() => import(`../layouts/base-layout`))} />
            </Switch>
        </Suspense>
    </div>
}

export default Layout;