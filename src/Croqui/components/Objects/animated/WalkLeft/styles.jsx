import styled, { keyframes } from 'styled-components';

const walkToLeft = keyframes`
    0%{
        transform: translateX(0);
        opacity: 1;
    }

    98%{
        transform: translateX(-9vw);
        opacity: 1;
    }

    100% {
        transform: translateX(-9vw);
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

export const MoveWalkLeft = styled.img`
    width: 45%;
    height: auto;
    position: relative;
    animation: ${ props => props.move === true ? walkToLeft : props.move === 'pause' ? pause : zoom } ${props => props.move === true ? '4s infinite'  : '.5s ease-in-out' };
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
