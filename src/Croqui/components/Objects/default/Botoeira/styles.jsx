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
		top: 7px;
    	right: -11px;
		z-index: -1;
	}
	100%{
		top: 55px;
    	right: -11px;
		z-index: -1;
	}
`;

const appearClose = keyframes`
	0%{
		top: 10px;
		right: 7px;
		z-index: -1;
	}
	100%{
		top: 39px;
    	right: -21px;
		z-index: -1;
	}
`;


export const Container = styled.div``;

export const Img = styled.img`
    width: ${props => props.tamanho + '%'};
	transform: rotate(${props => props.angulo + 'deg'});
	min-width: 5px;
    height: auto;
    position: relative;
    transition: .2s;
    animation: ${ zoom } .3s ease-in-out;

    &:hover{
        cursor: pointer;
    }
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
	top: 39px;
    right: -21px;
	animation: ${props => props.remove === false ? '' : appearClose} .3s linear;

    img{
        width: 17px;
    }
`;

export const ButtonSettings = styled.div`
   	cursor: pointer;
    display: ${props => props.remove === false ? 'none' : 'block'};
	position: absolute;
	top: 55px;
    right: -11px;
	animation: ${props => props.remove === false ? '' : appearSetting} .3s linear;
	z-index: 4;
    img{
        width: 20px;
    }
`;

