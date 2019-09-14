import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {fade} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Logo, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem} from './style';
import {connect} from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import ArrowNewIcon from '@material-ui/icons/Autorenew';
import Button from "@material-ui/core/Button";
import {
    getHandleInputBlurAction,
    getHandleInputFocusAction,
    getHandleMouseInAction, getHandleMouseOutAction,
    getSearchSuggestionList
} from "./store/actionCreator";
import {getHandleSignOutAction} from "../../pages/login/store/actionCreator";


const styles = theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    button: {
        margin: theme.spacing(1),
        color: 'white',
        border: 'solid white 0.7px'
    },
});


class AppNav extends PureComponent {

    handleChange = () => {
        let newList = [];
        const content = this.props.searchSuggestionList;
        let len = content < 8 ? content.length : 8;
        for (let i = 0; i < len; i++) {
            newList.push(<SearchInfoItem key={i}>{content[i]}</SearchInfoItem>)
        }
        return newList;
    };

    showPopularSearch = () => {
        if (this.props.mouseIn || this.props.focused) {
            return (<SearchInfo onMouseEnter={this.props.handleMouseIn} onMouseLeave={this.props.handleMouseOut}>
                <SearchInfoTitle>
                    Suggestion:
                    <SearchInfoSwitch onClick={this.props.handleInputFocus}>
                        <ArrowNewIcon style={{fontSize: '1rem', float: 'left'}}>
                        </ArrowNewIcon>
                        Change
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <div>
                    {this.handleChange().map((elem) => {
                        return elem;
                    })}
                </div>
            </SearchInfo>);
        } else {
            return null;
        }
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.grow}>
                <AppBar position="static">
                    <Toolbar>
                        <div>
                            <Link to={"/"}>
                                <Logo/>
                            </Link>
                        </div>
                        <Typography className={classes.title} variant="h6" noWrap style={{marginLeft: "100px"}}>
                            MyPosts
                        </Typography>

                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{'aria-label': 'search'}}
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInputBlur}
                            />
                            {this.showPopularSearch(this.props.focused)}
                        </div>
                        <div className={classes.grow}/>
                        {!this.props.login ? <Link to={"/login"} style={{color: "white"}}><div><Button variant="outlined" className={classes.button}>
                            Sign in</Button></div></Link> :
                            <div>
                                <Button variant="outlined" className={classes.button} onClick={this.props.handleSignOut}>
                                    Sign out</Button>
                                <IconButton
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <AccountCircle fontSize={"large"}/>
                                </IconButton>
                            </div>}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        searchSuggestionList: state.getIn(['header', 'searchSuggestionList']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login:state.getIn(['login', 'login']),
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(getSearchSuggestionList());
            dispatch(getHandleInputFocusAction());
        },
        handleInputBlur() {
            dispatch(getHandleInputBlurAction());
        },
        handleMouseIn() {
            dispatch(getHandleMouseInAction());
        },
        handleMouseOut() {
            dispatch(getHandleMouseOutAction());
        },
        handleSignOut() {
            dispatch(getHandleSignOutAction());
        },
    }
};

AppNav = withStyles(styles)(AppNav);
export default connect(mapStateToProps, mapDispatchToProps)(AppNav);
