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
    	right: -12px;
		z-index: -1;
	}
	100%{
		top: 41px;
    	right: -12px;
		z-index: 4;
	}
`;

const appearClose = keyframes`
	0%{
		top: 25px;
    	right: 6px;
		z-index: -1;
	}
	100%{
		top: 30px;
    	right: -20px;
		z-index: -1;
	}
`

export const Container = styled.div``;

export const Img = styled.img`
    width: ${props => props.tamanho + '%'};
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
`;

export const AreaPlug = styled.div`
   	width: ${props => props.tamanho + 'px'};
	height:${props => props.tamanho + 'px'};
	min-width: 10px;
	min-height: 20px;
    position: relative;
    border: 2px solid #FFF;
    border-radius: 4px;
    background: #488be49e;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .2s;
    animation: ${ zoom } .3s ease-in-out;

    &:active{
        transform: scale(1.4);
    }

	@media(max-width: 580px){
		min-width: 0;
	}
`;

export const QntTotal = styled.div`
    font-size: 17px;
    color: #054597;
    font-weight: 600;
`;

export const Options = styled.div`
    width: 0;
    height: 0;
    cursor: pointer;
    display: ${props => props.remove === false ? 'none' : 'block'};
	position: absolute;
	top: 30px;
    right: -20px;
	animation: ${props => props.remove === false ? '' : appearClose} .3s linear;

    img{
        width: 17px;
    }
`;

export const ButtonSettings = styled.div`
   	cursor: pointer;
    display: ${props => props.remove === false ? 'none' : 'block'};
	position: absolute;
	top: 41px;
    right: -12px;
	animation: ${props => props.remove === false ? '' : appearSetting} .3s linear;
	z-index: 4;
    img{
        width: 20px;
    }
`;
