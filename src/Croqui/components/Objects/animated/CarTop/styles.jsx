import styled, { keyframes } from 'styled-components';

const goTop = (props) => keyframes`
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    90%{
		transform: translateY(${'-' + props.percurso + 'vw'});
        opacity: 1;
    }
    100% {
		transform: translateY(${'-' + props.percurso + 'vw'});
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
	width: ${props => props.tamanho + '%'};
	min-width: 20px;
    height: auto;
	position: relative;
    animation: ${ props => props.move === true ? goTop : props.move === 'pause' ? pause : zoom } ${props => props.move === true ?

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
