import React, {PureComponent} from 'react';
import {HeaderWrapper} from './style'
import AppNav from './AppNav';

class Header extends PureComponent {
    render() {
        return (
            <HeaderWrapper>
                <AppNav/>
            </HeaderWrapper>
        );
    }
}


export default Header;