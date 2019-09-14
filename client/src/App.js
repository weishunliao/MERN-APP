import React, {Fragment} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom'
import {GlobalBodyStyle} from './style';
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login";
import store from "./store";


function App() {
    return (
        <Provider store={store}>
            <Fragment>
                <GlobalBodyStyle/>
                <BrowserRouter>
                <Header/>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/detail/:id" component={Detail}/>
                        <Route exact path="/login" component={Login}/>
                    </div>
                </BrowserRouter>
            </Fragment>
        </Provider>
    );
}

export default App;
