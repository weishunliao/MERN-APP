import React from "react";
import Loadable from 'react-loadable';

const LoadableBar = Loadable({
    loader: () => import('./index.js'),
    loading() {
        return <div>Loading...</div>
    }
});

export default () => <LoadableBar/>;
