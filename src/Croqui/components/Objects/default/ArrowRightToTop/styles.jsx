import styled, { keyframes } from 'styled-components';

const goTopToRight = (props) => keyframes`
    0%{
        transform: rotate(${props.angulo + 'deg'}) translateY(0);
        left: 0;
        opacity: 1;
    }
    50%{
        transform: rotate(${props.angulo + 'deg'}) translateY(-18vw) rotate(0deg);
        left: 0;
        opacity: 1;
    }
    75%{
        transform:  rotate(${props.angulo + 'deg'}) translateY(-19vw) rotate(90deg);
        left: 2vw;
        transition: 1s;
        opacity: 1;
    }
    100% {
        transform:  rotate(${props.angulo + 'deg'}) translateY(-19vw) rotate(90deg);
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

const appearSetting = keyframes`
	0%{
		top: 9px;
    	right: 1px;
		z-index: -1;
	}
	100%{
		top: 46px;
    	right: 1px;
		z-index: -1;
	}
`;

const appearClose = keyframes`
	0%{
		top: 11px;
    	right: 20px;
		z-index: -1;
	}
	100%{
		top: 42px;
    	right: -8px;
		z-index: -1;
	}
`;


export const Container = styled.div``;

export const MoveRightToTop = styled.img`
    width: ${props => props.tamanho + '%'};
	min-width: 15px;
    height: auto;
    position: relative;
	transform: rotate(${props => props.angulo + 'deg'});
    animation: ${ props => props.move === true ? goTopToRight : props.move === 'pause' ? pause : zoom } ${props => props.move === true ? '3s infinite'  : '.5s ease-in-out' };
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
	top: 42px;
    right: -8px;
	animation: ${props => props.remove === false ? '' : appearClose} .3s linear;

    img{
        width: 17px;
    }
`;

export const ButtonSettings = styled.div`
   	cursor: pointer;
    display: ${props => props.remove === false ? 'none' : 'block'};
	position: absolute;
    top: 46px;
    right: 1px;
	animation: ${props => props.remove === false ? '' : appearSetting} .3s linear;
	z-index: 4;
    img{
        width: 20px;
    }
`;
