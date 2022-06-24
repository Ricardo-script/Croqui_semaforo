import styled from 'styled-components';

export const Container = styled.div`
`;

export const TypeObjects = styled.div`
    position: fixed;
    align-items: center;
    justify-content: space-around;
    display: flex;
    height: 50px;
    background: #a9a6a678;
    border-radius: 6px;
    z-index: 1;
    //right: 285px;
    top: 80px;

    &#topToright{
        overflow: hidden;
        width: ${props => props.open === false ? '0' : '170px'};
        right: ${props => props.open === false ? '0' : '285px'};
        transition: .3s;
    }

    &#topToleft{
        overflow: hidden;
        width: ${props => props.open === false ? '0' : '170px'};
        right: ${props => props.open === false ? '0' : '285px'};
        transition: .3s;
    }
    &#top{
        overflow: hidden;
        width: ${props => props.open === false ? '0' : '170px'};
        right: ${props => props.open === false ? '0' : '285px'};
        transition: .3s;
    }
    &#rightToDown{
        overflow: hidden;
        width: ${props => props.open === false ? '0' : '170px'};
        right: ${props => props.open === false ? '0' : '285px'};
        top: 150px;
        transition: .3s;
    }
    &#rightTotop{
        overflow: hidden;
        width: ${props => props.open === false ? '0' : '170px'};
        right: ${props => props.open === false ? '0' : '285px'};
        top: 150px;
        transition: .3s;
    }
    &#right{
        overflow: hidden;
        width: ${props => props.open === false ? '0' : '170px'};
        right: ${props => props.open === false ? '0' : '285px'};
        top: 150px;
        transition: .3s;
    }
    &#leftToBottom{
        overflow: hidden;
        width: ${props => props.open === false ? '0' : '170px'};
        right: ${props => props.open === false ? '0' : '285px'};
        top: 227px;
        transition: .3s;
    }
    &#leftToTop{
        overflow: hidden;
        width: ${props => props.open === false ? '0' : '170px'};
        right: ${props => props.open === false ? '0' : '285px'};
        top: 227px;
        transition: .3s;
    }
    &#left{
        overflow: hidden;
        width: ${props => props.open === false ? '0' : '170px'};
        right: ${props => props.open === false ? '0' : '285px'};
        top: 227px;
        transition: .3s;
    }
    &#bottomToLeft{
        overflow: hidden;
        width: ${props => props.open === false ? '0' : '170px'};
        right: ${props => props.open === false ? '0' : '285px'};
        top: 300px;
        transition: .3s;
    }
    &#bottomToRight{
        overflow: hidden;
        width: ${props => props.open === false ? '0' : '170px'};
        right: ${props => props.open === false ? '0' : '285px'};
        top: 300px;
        transition: .3s;
    }
    &#bottom{
        overflow: hidden;
        width: ${props => props.open === false ? '0' : '170px'};
        right: ${props => props.open === false ? '0' : '285px'};
        top: 300px;
        transition: .3s;
    }
`;

export const Buttom = styled.div`
    width: 24px;
    height: 24px;
    background: #EEE;
    border-radius: 7px;
    padding: 7px;
    box-shadow: 7px 7px 7px rgb(53 50 50 / 63%);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;

    &:hover{
        background: #00c86f;
        transition: .5s;
    }

    &:active{
        position: relative;
        top: 1px;
    }
`;

export const Ico = styled.img`
    width: 100%;

    &#topToright{
        width: 38px;
        transform: rotate(-45deg);
    }
    &#topToleft{
        width: 38px;
        transform: rotate(-132deg);
    }
    &#top{
        width: 38px;
        transform: rotate(-90deg);
    }
    &#rightToDown{
        width: 38px;
        transform: rotate(45deg);
    }
    &#rightTotop{
        width: 38px;
        transform: rotate(-90deg);
    }
    &#arrowtop{
        transform: rotate(-90deg);
    }
    &#right {
        width: 38px;
    }
    &#leftToBottom{
        width: 38px;
    }
    &#leftToTop{
        width: 38px;
        transform: rotate(45deg);
    }
    &#arrowleft{
        transform: rotate(180deg);
    }
    &#left{
        width: 38px;
    }
    &#bottomToLeft{
        width: 38px;
        transform: rotate(-45deg);
    }
    &#bottomToRight{
        width: 38px;
        transform: rotate(-135deg);
    }
    &#bottom{
        width: 38px;
        transform: rotate(-90deg);
    }

`;
