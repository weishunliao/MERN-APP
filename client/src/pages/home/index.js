import React, {PureComponent} from 'react';
import {HomeWrapper, HomeLeft, HomeRight, BacktoTop} from './style';
import {connect} from "react-redux";
import banner from '../../static/img/banner.jpg';
import List from './Component/List';
import Topic from './Component/Topic';
import Recommend from './Component/Recommend';
import {getArticleListAction, getPopularListAction, getScrollAction} from "./store/actionCreators";

class Home extends PureComponent {

    componentDidMount() {
        this.props.fetchDataFromAPI();
        this.props.fetchListFromAPI();
        window.addEventListener('scroll', this.props.handleScroll);
    }


    render() {
        return (
            <div>
                <HomeWrapper>
                    <HomeLeft>
                        <img src={banner} alt="banner" className={"banner-img"}/>
                        <Topic topics={this.props.topics}>
                        </Topic>
                        <List articles={this.props.articles}>
                        </List>
                    </HomeLeft>
                    <HomeRight>
                        <Recommend popularList={this.props.popularList}>
                        </Recommend>
                    </HomeRight>
                    {this.props.atTop ? "" : <BacktoTop onClick={this.handleBackTop}>Top</BacktoTop>}
                </HomeWrapper>
            </div>
        );
    }
    handleBackTop = () => {
        window.scrollTo(0, 0);
    }
}


const mapStateToProps = (state) => {
    return {
        topics: state.getIn(['home', 'topics']),
        articles: state.getIn(['home', 'articles']),
        popularList:state.getIn(['home', 'popularList']),
        atTop:state.getIn(['home', 'atTop']),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDataFromAPI() {
            dispatch(getArticleListAction());
        },
        fetchListFromAPI() {
            dispatch(getPopularListAction());
        },
        handleScroll() {
            if (document.documentElement.scrollTop > 150) {
                dispatch(getScrollAction(false));
            } else {
                dispatch(getScrollAction(true));
            }
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
