import styled, { keyframes } from 'styled-components';

const goTop = keyframes`
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-355px);
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


export const Container = styled.div``;

export const MoveTop = styled.img`
    width: 33px;
    height: auto;
    animation: ${ props => props.move === true ? goTop : zoom } ${props => props.move === true ? '3s infinite'  : '.5s linear' };
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
