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

export const Container = styled.div`
`;

export const Img = styled.img`
    width: ${props => props.tamanho + '%'};
	transform: rotate(${props => props.angulo + 'deg'});
	min-width: 5px;
    animation: ${ zoom } .3s ease-in-out;
    transition: .2s;
    &:active{
        transform: scale(1.4);
    }

	@media(max-width: 580px){
		min-width: 0;
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
