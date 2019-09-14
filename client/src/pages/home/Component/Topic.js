import React, {PureComponent} from 'react';
import {TopicWrapper} from "../style";
import Chip from "@material-ui/core/Chip";
import Avatar from '@material-ui/core/Avatar';



class Topic extends PureComponent {
    render() {
        return (
            <TopicWrapper>
                {this.props.topics.map((elem)=>{
                    return (<Chip
                        avatar={
                            <Avatar>{elem.charAt(0)}</Avatar>
                        }
                        label={elem}
                        component="a"
                        href="#chip"
                        clickable
                        style={{marginLeft:"10px", marginBottom:"10px"}}
                        key={elem}
                    />);
                })}

            </TopicWrapper>
        );
    }
}

export default Topic;