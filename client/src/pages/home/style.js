import styled from 'styled-components'

export const HomeWrapper = styled.div`
	overflow: hidden;
	width: 960px;
	margin: 0 auto;
`;

export const HomeLeft = styled.div`
	float: left;
	margin-left: 15px;
	padding-top: 30px;
	width: 625px;
	.banner-img {
		width: 580px;
		height: 350px;
	}
`;

export const HomeRight = styled.div`
	width: 280px;
	float: right;
`;


export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 10px 0;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`;

export const ListWrapper = styled.div`
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    .pic {
        width:140px;
        float:right;
        padding-left: 5px;
    }
`;


export const ArticleContent = styled.div`
    float:left;
    width:480px;
    .subtitle {
        color:rgba(0,0,0,.54);
        font-weight:400;
        font-size:12px;
        line-height: 25px;
    }
    .title {
        font-size: 16px;
        line-height: 27px;
        font-weight: bold;
    }
    .paragraph {
        line-height: 24px;
        font-size: 13px;
        color:rgba(0,0,0,.54);
    }
`;

export const RecommendTitle = styled.h3`
        text-align: center;
        color: rgba(0, 0, 0, 0.52);
        border-bottom: 1px solid #dcdcdc;
        font-size: 24px;
        line-height: 28px;
        padding-bottom: 5px;
    `;

export const RecommendCard = styled.div`
       width:280px;
       padding: 10px 0;
       overflow:hidden;
    `;
export const RecommendCentent = styled.div`
    float:right;
     width:230px;
    .title {
        font-weight:bold;
        margin-bottom:6px;
    }
    .subtitle {
        font-weight: lighter;
        margin-top: 6px;
        margin-bottom:3px;
        font-size: 13px;
        color: grey;
    }
    .day {
        font-weight: lighter;
        margin-top: 3px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.87);
    }
`;

export const CardNUmber = styled.div`
    float: left;
    padding-top: 20px;
    padding-left: 10px;
    font-size: 25px;
    color: #00000040;
`;

export const BacktoTop = styled.div`
    height: 60px;
    width: 80px;
    color: rgba(0, 0, 0, 0.45);
    position: fixed;
    right: 10px;
    bottom: 10px;
    border: #00000040 1px solid;
    text-align: center;
    line-height: 60px;
    border-radius: 10px;
    cursor: pointer;
`;