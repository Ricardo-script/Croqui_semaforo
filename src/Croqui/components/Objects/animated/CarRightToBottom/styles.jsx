import styled, { keyframes } from 'styled-components';

const goRightToBottom = (props) => keyframes`
	0%{
        transform:
			translateY(0)
			translateX(0)
			rotate(${((-1)*props.angulo + 90 ) + 'deg'});
        opacity: 1;
    }
	50%{
		transform:
			translateY(${((-1)*(Math.sin(props.angulo * (Math.PI / 180)) * props.percurso) + 'vw')})
			translateX(${(Math.cos(props.angulo * (Math.PI / 180))*props.percurso) + 'vw'})
			rotate(${( (-1)*props.angulo + 90 ) + 'deg'});
        opacity: 1;
	}
	75%{
		transform:
			translateY(${((-1)*(Math.sin(props.angulo * (Math.PI / 180)) * props.percurso) + 'vw')})
			translateX(${(Math.cos(props.angulo * (Math.PI / 180))*props.percurso) + 'vw'})
			rotate(${((-1)*props.anguloFinal + 90) + 'deg'});
        opacity: 1;
	}

    100%{
        transform:
			translateY(${(((-1)*(Math.sin(props.anguloFinal * (Math.PI / 180))) * props.percursoFinal) + ((-1)*(Math.sin(props.angulo * (Math.PI / 180)) * props.percurso)) + 'vw') })
			translateX(${(Math.cos(props.anguloFinal * (Math.PI / 180)) * props.percursoFinal) + (Math.cos(props.angulo * (Math.PI / 180))*props.percurso) + 'vw'})
			rotate(${((-1)*props.anguloFinal + 90) + 'deg'});
        opacity: 1;
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
    width: ${props => props.tamanho + '%'};
	min-width: 20px;
    height: auto;
    position: relative;
	transform: rotate(${props => ((-1) * props.angulo + 90) + 'deg'});
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
		right: -23px;
    	z-index: 1;
    }
`;

