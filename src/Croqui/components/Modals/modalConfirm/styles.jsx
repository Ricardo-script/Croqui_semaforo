import styled from 'styled-components';

export const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 415px;
    height: fit-content;
    box-shadow: rgb(121 121 121 / 27%) -6px 6px 3px -1px;
    display: ${props => props.open === false ? 'none' : 'block'};
    z-index: 4;
`;

export const Header = styled.div`
    background: #001E62;
    color: #FFF;
    font-size: 16px;
    border-radius: 6px 6px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 30px;

    span{
        text-align: center;
        user-select: none;
    }

    img{
        width: 20px;
        height: auto;
    }
`;

export const Close = styled.div`
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: 5px;
`;

export const Content = styled.div`
    background: #FFF;

    span{
        font-size: 14px;
        text-align: center;
        display: block;
        padding: 10px 0;
    }
`;

export const AreaButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    padding: 0 20px 20px 0;
`;

export const Buttom = styled.div`
    background: #001E62;
    color: #FFF;
    border-radius: 3px;
    width: 100px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    user-select: none;
    cursor: pointer;

    &:active{
        position: relative;
        top: 1px;
    }
`;