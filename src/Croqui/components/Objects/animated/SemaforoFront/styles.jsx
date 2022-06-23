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

export const Container = styled.div`
`;

export const Img = styled.img`
    width: ${props => props.tamanho + '%'};
	min-width: 10px;
    animation: ${ zoom } .3s ease-in-out;
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
        top: -5px;
        right: -25px;
    }
`;

export const ButtonSettings = styled(Options)`
    img{
        width: 20px;
        position: relative;
        top: -29px;
        right: -48px;
    }
`;

