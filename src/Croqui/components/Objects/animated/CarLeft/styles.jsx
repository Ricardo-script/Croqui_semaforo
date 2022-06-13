import styled, { keyframes } from 'styled-components';

const goLeft = keyframes`
    0% {
        transform: translateX(0);
        opacity: 1;
    }
    90%{
        transform: translateX(-22vw);
        opacity: 0.7;
    }
    100% {
        transform: translateX(-22vw);
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

export const MoveLeft = styled.img`
    width: 130%;
    height: auto;
    animation: ${ props => props.move === true ? goLeft : props.move === 'pause' ? pause : zoom } ${props => props.move === true ? '3s infinite'  : '.5s ease-in-out' };
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

export const ButtonSettings = styled(Options)`
    img{
        width: 20px;
        position: relative;
        top: -29px;
        right: -48px;
    }
`;

