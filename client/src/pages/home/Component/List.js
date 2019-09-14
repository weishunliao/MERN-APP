import React, {PureComponent} from 'react';
import {ArticleContent, ListWrapper} from "../style";
import {Link} from 'react-router-dom'

class List extends PureComponent {

    render() {
        return (
            <div>
                {this.props.articles.map((elem, index) => {
                    elem = elem.toJS();
                    return (
                        <ListWrapper key={index}>
                            <img alt={""} src={elem.imgUrl}
                                 className={"pic"}/>
                            <Link to={"/detail/" + elem.id} style={{color: "black"}}>
                                <ArticleContent>
                                    <h6 className={"subtitle"}>{elem.subtitle}</h6>
                                    <h3 className={"title"}>{elem.title}</h3>
                                    <p className={"paragraph"}>{elem.paragraph}</p>
                                </ArticleContent>
                            </Link>
                        </ListWrapper>

                    )
                })}
            </div>
        );
    }
}

export default List;