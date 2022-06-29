import styled, { keyframes } from 'styled-components';

const walkToLeft = (props) => keyframes`
    0%{
        transform: translateX(0);
        opacity: 1;
    }

    98%{
		transform: translateX(${'-' + props.percurso + 'vw'});
        opacity: 1;
    }

    100% {
		transform: translateX(${'-' + props.percurso + 'vw'});
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

export const MoveWalkLeft = styled.img`
	width: ${props => props.tamanho +'%'};
	min-width: 15px;
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
        animation: ${props => props.remove === false ? '' : appearIn} .3s linear;
		z-index: -1;
    }
`;

export const ButtonSettings = styled(Options)`
    img{
        width: 20px;
        position: relative;
        top: -29px;
		right: -23px;
    	z-index: 1;
    }
`;
