import React, {PureComponent} from 'react';
import image from '../../static/img/1.jpg';
import Avatar from "@material-ui/core/Avatar";
import {Author, Button, DetailWrapper, Card, Article} from "./style";
import {connect} from "react-redux";
import {getPostAction} from "./store/actionCreator";
import {withRouter} from 'react-router-dom'

class Detail extends PureComponent {

    componentDidMount() {
        this.props.fetchPostFromAPI(this.props.match.params.id);
    }

    render() {
        const post = this.props.post.toJS();
        return (
            <DetailWrapper>
                <img src={post.image} alt={"banner"}/>
                <h1 className={"title"}>{post.title}</h1>
                <Author>
                    <Avatar alt="Remy Sharp" src={image} style={{float: "left"}}/>
                    <Card>
                        <span className={"name"}>{post.name}</span>
                        <Button>
                            Follow me
                        </Button>
                    </Card>
                </Author>
                <Article dangerouslySetInnerHTML={{__html: post.post}} >
                </Article>
            </DetailWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.getIn(['detail', 'post']),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostFromAPI(id) {
            dispatch(getPostAction(id));
        },
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));
