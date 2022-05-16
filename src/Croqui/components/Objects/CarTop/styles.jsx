import styled, { keyframes } from 'styled-components';

const goTop = keyframes`
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    90%{
        transform: translateY(-19vw);
        opacity: 1;
    }
    100% {
        transform: translateY(-20vw);
        opacity: 0;
    }
`;

const zoom = keyframes`
    0%{
        transform: scale(.5);
    }
    25%{
        transform: scale(2.0);
    }
    50%{
        transform: scale(.7);
    }
    100%{
        transform: scale(1);
    }
`;

const pause = keyframes` // parar carro no farol vermelho
    0%{
        transform: translateX(0);
    }
`;


export const Container = styled.div``;

export const MoveTop = styled.img`
    width: 33px;
    height: auto;
    animation: ${ props => props.move === true ? goTop : props.move === 'pause' ? pause : zoom } ${props => props.move === true ? '3s infinite'  : '.5s ease-in-out' };
`;

export const Options = styled.div`
    cursor: pointer;
    display: ${props => props.remove === false ? 'none' : 'block'};
    
    img{
        width: 17px;
        position: relative;
        top: -5px;
        right: -25px;
    }
`;
