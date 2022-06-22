import styled, { keyframes } from 'styled-components';

const goLeftToBottom = keyframes`
    0%{
        transform: translateY(0);
        left: 0;
        opacity: 1;
    }
    50%{
        transform: translateY(-18vw) rotate(0deg);
        left: 0;
        opacity: 1;
    }
    75%{
        transform: translateY(-19vw) rotate(90deg);
        left: 2vw;
        transition: 1s;
        opacity: 1;
    }
    100% {
        transform: translateY(-19vw) rotate(90deg);
        left: 20vw;
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
    width: ${props => props.tamanho + '%'};
	min-width: 15px;
    height: auto;
    position: relative;
    animation: ${ props => props.move === true ? goLeftToBottom : props.move === 'pause' ? pause : zoom } ${props => props.move === true ? '3s infinite'  : '.5s ease-in-out' };
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
`
