import React, {PureComponent} from 'react';
import {CardNUmber, RecommendCard, RecommendCentent, RecommendTitle} from "../style";

class Recommend extends PureComponent {
    render() {
        return (
            <div style={{marginTop:"30px"}}>
                <RecommendTitle>Popular</RecommendTitle>
                {this.props.popularList.map((elem, index)=>{
                    elem = elem.toJS();
                    return (
                        <RecommendCard key={index}>
                            <CardNUmber>{index > 9 ? index + "" : "0" + (index + 1)}</CardNUmber>
                            <RecommendCentent>
                                <h3 className={"title"}>{elem.title}</h3>
                                <h3 className={"subtitle"}>{elem.subtitle}</h3>
                                <h3 className={"day"}>{elem.day}</h3>
                            </RecommendCentent>
                        </RecommendCard>
                    )
                })}
            </div>
        );
    }
}

export default Recommend;