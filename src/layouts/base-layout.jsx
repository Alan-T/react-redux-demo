import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from "./header";
import Main from "./main";
import Footer from './footer';

const BaseLayout = (props) => {
    return <React.Fragment>
        <Header />
        <Main props={props} >
            <Suspense fallback={<div></div>}>
                <Switch>
                    <Route exact path="/" component={React.lazy(() => import(`../pages/home`))} />
                    <Route exact path="/home" component={React.lazy(() => import(`../pages/home`))} />
                    <Route exact path="/news" component={React.lazy(() => import(`../pages/news`))} />
                    <Route exact path="/user" component={React.lazy(() => import(`../pages/user`))} />
                    <Route exact path="/setting" component={React.lazy(() => import(`../pages/setting`))} />
                    {/* <Redirect exact form='/' to="/home" /> */}
                </Switch>
            </Suspense>
        </Main>
        <Footer />
    </React.Fragment>
}

export default BaseLayout