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

export const AreaOcupacao = styled.div`
	width: ${props => props.tamanho + 'px'};
	height:${props => props.tamanho + 'px'};
	min-width: 20px;
	min-height: 20px;
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
`;

export const TaxaOcupacao = styled.div`
    font-size: 17px;
    color: ${
        props => props.taxa <= 33 ? '#024602' :
        props.taxa >= 33 && props.taxa <= 67 ? '#585c34' :
        props.taxa > 67 ? '#6b1212' : ''
    };
    font-weight: 600;
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
