import styled, { keyframes } from 'styled-components';

const goRight = keyframes`
    0% {
        transform: translateX(0);
        opacity: 1;
    }
    90%{
        transform: translateX(22vw);
        opacity: 1;
    }
    100% {
        transform: translateX(21vw);
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

export const MoveRight = styled.img`
    width: 130%;
    height: auto;
    position: relative;
    animation: ${ props => props.move === true ? goRight : props.move === 'pause' ? pause : zoom } ${props => props.move === true ? '3s infinite'  : '.5s ease-in-out' };
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
