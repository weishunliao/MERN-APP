import styled from 'styled-components'

export const DetailWrapper = styled.div`
    text-align: center;
    margin-top: 35px;
    margin-bottom: 35px;
    .title {
        line-height: 48px;
        font-size: 30px;
        font-family: Georgia;
        color: rgba(0, 0, 0, 0.77);
        font-weight: lighter;
        width: 70%;
        margin: 0 auto;
    }
`;

export const Author = styled.div`
    overflow: hidden;
    width: 150px;
    margin-left: 15%;
    margin-top: 15px;
`;

export const Card = styled.div`
    float: right;
    color: #000000c2;
    .name {
        font-family:-webkit-pictograph;
    }
`;

export const Button = styled.div`
    color: rgba(3, 168, 124, 1);
    font-size: 10px;
    border: 1px solid rgba(3, 168, 124, 1);
    padding: 2px;
    border-radius: 3px;
    margin-top: 5px;
    cursor: pointer;
`;

export const Article = styled.p`
    width: 70%;
    margin: 0 auto;
    font-size: 21px;
    font-family: Georgia;
    text-align: initial;
    line-height: 1.58;
    margin-top: 20px;
    color: rgba(0, 0, 0, 0.67);
    font-weight: lighter;
`;