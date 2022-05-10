import styled  from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    overflow: hidden;

    @media(max-width: 580px){
        flex-direction: column;
        overflow: scroll;
    }
`;

export const AreaMapaCroqui = styled.div`
   width: 100%;
   position: relative;
`;

export const ButtonOpen = styled.div`
    position: absolute;
    z-index: 12;
    top: 7px;
    right: 7px;
    cursor: pointer;
`;

export const MapaCroqui = styled.div`
    width: 100%;
    img{
        width: 100%;
        height: 99.9vh;
        //object-fit: cover;
    }
`;

export const AreaEditor = styled.div`
    width: ${props => props.open === true ? '300px' : '0'};
    background: #062467;
    overflow: hidden;
    transition: .5s;
    //position: relative;
    //display: none;

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 11;

    @media(max-width: 580px){
        width: 100%;
    }
`;
export const Editor = styled.div`
    padding: 5px 15px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AreaTools = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const Fieldset = styled.fieldset`
    border: 1px solid #FFF;
    border-radius: 4px;
`;

export const Legend = styled.legend`
    color: #FFF;
    font-family: 'roboto';
    font-size: 12px;
`;

export const AreaButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;

`;

export const Buttom = styled.div`
    width: 24px;
    height: 24px;
    background: #EEE;
    border-radius: 7px;
    padding: 7px;
    box-shadow: 7px 7px 7px rgb(53 50 50 / 63%);
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

export const Img = styled.img`
    width: 100%;

    &#top-left {
        transform: scaleX(-1);
    }
    &#right-down {
        transform: rotate(90deg);
    }
    &#right-top {
        transform: rotate(90deg) scaleX(-1);
    }
    &#right {
        transform: rotate(90deg);
    }
`;