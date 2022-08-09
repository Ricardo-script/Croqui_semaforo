import styled, { keyframes } from 'styled-components';

const goTop = (props) => keyframes`
    0% {
        transform: rotate(${props.angulo + 'deg'}) translateY(0);
        opacity: 1;
    }
    90%{
        transform: rotate(${props.angulo + 'deg'}) translateY(-2.7vw);
        opacity: 1;
    }
    100% {
        transform: rotate(${props.angulo + 'deg'}) translateY(-3vw);
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
		top: 13px;
    	right: -11px;
		z-index: -1;
	}
	100%{
		top: 48px;
    	right: -11px;
		z-index: 4;
	}
`;

const appearClose = keyframes`
	0%{
		top: 16px;
    	right: 7px;
		z-index: -1;
	}
	100%{
		top: 37px;
    	right: -16px;
		z-index: 4;
	}
`;

export const Container = styled.div``;

export const MoveTop = styled.img`
	width: ${props => props.tamanho + '%'};
	min-width: 5px;
    height: auto;
    position: relative;
	transform: rotate(${props => props.angulo + 'deg'});
    animation: ${ props => props.move === true ? goTop : props.move === 'pause' ? pause : zoom } ${props => props.move === true ? '1.3s infinite'  : '.5s ease-in-out' };
    transition: .2s;
    &:active{
        transform: scale(1.4);
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
	top: 37px;
    right: -16px;
	animation: ${props => props.remove === false ? '' : appearClose} .3s linear;

    img{
        width: 17px;
    }
`;

export const ButtonSettings = styled.div`
   	cursor: pointer;
    display: ${props => props.remove === false ? 'none' : 'block'};
	position: absolute;
    top: 48px;
    right: -11px;
	animation: ${props => props.remove === false ? '' : appearSetting} .3s linear;
	z-index: 4;
    img{
        width: 20px;
    }
`;
