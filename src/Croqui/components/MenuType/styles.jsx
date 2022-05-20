import styled from 'styled-components';

export const Container = styled.div`
`;

export const TypeObjects = styled.div`
    position: fixed;
    align-items: center;
    justify-content: space-around;
    display: flex;
    height: 50px;
    background: #a9a6a6;
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
        transform: rotate(-44deg);
    }
    &#topToleft{
        width: 38px;
        transform: rotate(-132deg);
    }
    &#top{
        width: 38px;
        transform: rotate(-90deg);
    }
    &#arrow{
        width: 30px;
    }

`;