import styled, { keyframes } from 'styled-components';


const goRight = (props) => keyframes`
    0% {
        transform: rotate(${props.angulo + 'deg'}) translateY(0);
        opacity: 1;
    }
    90%{
		transform: rotate(${props.angulo + 'deg'}) translateY(${'-' + props.percurso + 'vw'});
        opacity: 1;
    }
    100% {
		transform: rotate(${props.angulo + 'deg'}) translateY(${'-' + props.percurso + 'vw'});
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

const appearSetting = keyframes`
	0%{
		top: 80px;
    	right: 0px;
		z-index: -1;
	}
	100%{
		top: 131px;
    	right: -37px;
		z-index: -1;
	}
`;

const appearClose = keyframes`
	0%{
		top: 80px;
    	right: 0px;
		z-index: -1;
	}
	100%{
		top: 107px;
    	right: -29px;
		z-index: -1;
	}
`;


export const Container = styled.div``;

export const Content = styled.div``;

export const MoveRight = styled.img`
    width: ${props => props.tamanho + '%'};
	min-width: 10px;
    height: auto;
    position: relative;
	transform: rotate(${props => props.angulo + 'deg'});
    animation: ${ props => props.move === true ? goRight : props.move === 'pause' ? pause : zoom } ${props => props.move === true ?

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
        transform: scale(1.4) rotate(90deg);
    }

	@media(max-width: 580px){
		min-width: 0;
	}
`;

export const Options = styled.div`
    width: 0;
    height: 0;
    cursor: pointer;
    display: ${props => props.remove === false ? 'none' : 'block'};
	position: absolute;
	top: 107px;
    right: -29px;
	animation: ${props => props.remove === false ? '' : appearClose} .3s linear;

    img{
        width: 17px;
    }
`;

export const ButtonSettings = styled.div`
   	cursor: pointer;
    display: ${props => props.remove === false ? 'none' : 'block'};
	position: absolute;
    top: 131px;
    right: -25px;
	animation: ${props => props.remove === false ? '' : appearSetting} .3s linear;
	z-index: 4;
    img{
        width: 20px;
    }
`;

