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

export const Container = styled.div``;

export const Img = styled.img`
    width: 26%;
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