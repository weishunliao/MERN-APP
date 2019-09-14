import styled from 'styled-components'
import logo from '../../static/img/logo.svg';
export const HeaderWrapper = styled.div`
    position: relative;
    height:58px;
    border-bottom: solid 1px #f0f0f0;
`;

export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 58px;
    background: url(${logo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 45% ;
`;

export const SearchInfo = styled.div`
	position: absolute;
	left:0;
	top:45px;
	width:235px;
	box-shadow:0 0 8px rgba(0,0,0,0.2);
	background:white;
	padding:10px;
`;

export const SearchInfoTitle = styled.div`
    margin-top: 5px;
    margin-left: 5px;
    margin-bottom: 10px;
    line-height: 20px;
    font-size: 14px;
    color:rgba(0, 0, 0, 0.77);
`;

export const SearchInfoSwitch = styled.span`
    float:right;
    font-size: 12px;
    margin-right:10px;
    cursor: pointer;
    
`;



export const SearchInfoItem = styled.a`
    display: block;
    color: #0000008a;
    border: 1px solid;
    line-height: 20px;
    padding: 0 5px;
    float: left;
    margin: 5px 5px;
    border-radius: 3px;
    font-size: 12px;
`;


