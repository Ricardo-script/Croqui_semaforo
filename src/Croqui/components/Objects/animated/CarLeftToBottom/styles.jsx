import styled, { keyframes } from 'styled-components';

const goLeftToBottom = keyframes`
    0%{
        transform: translateX(0);
        top: 0;
        opacity: 1;
    }
    50%{
        transform: translateX(-39vw) rotate(0deg);
        top: 0;
        opacity: 1;
    }
    75%{
        transform: translateX(-40vw) rotate(-90deg);
        top: 2vw;
        transition: 1s;
        opacity: 1;
    }
    100% {
        transform: translateX(-40vw) rotate(-90deg);
        top: 20vw;
        transition: 1s;
        opacity: 0.4;
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

export const MoveLeftToBottom = styled.img`
    width: 130%;
    height: auto;
    position: relative;
    animation: ${ props => props.move === true ? goLeftToBottom : props.move === 'pause' ? pause : zoom } ${props => props.move === true ? '5s infinite'  : '.5s ease-in-out' };
    transition: .2s;
    &:active{
        transform: scale(1.4);
    }
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
