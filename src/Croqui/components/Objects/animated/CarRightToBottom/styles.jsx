import styled, { keyframes } from 'styled-components';

const goRightToBottom = (props) => keyframes`
    0%{
        transform: translateX(0);
        top: 0;
        opacity: 1;
    }
    50%{
		transform: translateX(${props.percurso + 'vw'}) rotate(0deg);
        top: 0;
        opacity: 1;
    }
    75%{
		transform: translateX(${props.percurso + 'vw'}) rotate(90deg);
        top: 2vw;
        transition: 1s;
        opacity: 1;
    }
    100% {
        transform: translateX(${props.percurso + 'vw'}) rotate(90deg);
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

const appearIn = keyframes`
	0%{
		top: -40px;
    	right: 0px;
	}
	100%{
		top: -5px;
        right: -48px;
	}
`;

export const Container = styled.div``;

export const MoveRightToBottom = styled.img`
    width: ${props => props.tamanho + 30 + '%'};
	min-width: 20px;
    height: auto;
    position: relative;
    animation: ${ props => props.move === true ? goRightToBottom : props.move === 'pause' ? pause : zoom } ${props => props.move === true ?

	(
        props.velocidade === 10 ? '1s infinite linear'   :
        props.velocidade ===  9 ? '1.5s infinite linear' :
        props.velocidade ===  8 ? '2s infinite linear'   :
        props.velocidade ===  7 ? '2.5s infinite linear' :
        props.velocidade ===  6 ? '3s infinite linear'   :
        props.velocidade ===  5 ? '3.5s infinite linear' :
        props.velocidade ===  4 ? '4s infinite linear'   :
        props.velocidade ===  3 ? '4.5s infinite linear' :
        props.velocidade ===  2 ? '5s infinite linear'   :
        props.velocidade ===  1 ? '5.5s infinite linear' :
        props.velocidade ===  0 ? '10s infinite linear'  : ''
    )

	: '.5s ease-in-out' };
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
        animation: ${props => props.remove === false ? '' : appearIn} .3s linear;
		z-index: -1;
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

