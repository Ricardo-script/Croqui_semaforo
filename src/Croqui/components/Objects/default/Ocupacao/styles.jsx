import styled, { keyframes } from 'styled-components';

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

const appearSetting = keyframes`
	0%{
		top: 23px;
    	right: 30px;
		z-index: -1;
	}
	100%{
		top: 65px;
    	right: 30px;
		z-index: -1;
	}
`;

const appearClose = keyframes`
	0%{
		top: 22px;
    	right: 48px;
		z-index: -1;
	}
	100%{
		top: 67px;
    	right: 7px;
		z-index: -1;
	}
`;


export const Container = styled.div``;

export const AreaOcupacao = styled.div`
	width: ${props => props.tamanho + 'vw'};
	height:${props => props.tamanho + 2.5 +  'vh'};
	min-width: 5px;
	min-height: 5px;
    position: relative;
    border: 2px solid #FFF;
    border-radius: 4px;
    background: ${
        props => props.taxa <= 33 ? '#25ff2596' :
        props.taxa >= 33 && props.taxa <= 67 ? '#e4ff00b8' :
        props.taxa > 67 ? '#ff5454ba' : ''
    };
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .2s;
    animation: ${ zoom } .3s ease-in-out;
	transform: rotate(${props => props.angulo + 'deg'});

    &:active{
        transform: scale(1.4);
    }

	@media(max-width: 580px){
		min-width: 0;
		height: 2.8vh;
	}
`;

export const TaxaOcupacao = styled.div`
    font-size: 1vw;
    color: ${
        props => props.taxa <= 33 ? '#024602' :
        props.taxa >= 33 && props.taxa <= 67 ? '#585c34' :
        props.taxa > 67 ? '#6b1212' : ''
    };
    font-weight: 600;

	@media(max-width: 900px){
		font-size: 1.3vw;
	}

	@media(max-width: 580px){
		font-size: 1.8vw;
	}
`;

export const Options = styled.div`
    width: 0;
    height: 0;
    cursor: pointer;
    display: ${props => props.remove === false ? 'none' : 'block'};
	position: absolute;
	top: 67px;
    right: 7px;
	animation: ${props => props.remove === false ? '' : appearClose} .3s linear;

    img{
        width: 17px;
    }
`;

export const ButtonSettings = styled.div`
   	cursor: pointer;
    display: ${props => props.remove === false ? 'none' : 'block'};
	position: absolute;
	top: 65px;
    right: 30px;
	animation: ${props => props.remove === false ? '' : appearSetting} .3s linear;
	z-index: 4;
    img{
        width: 20px;
    }
`;
