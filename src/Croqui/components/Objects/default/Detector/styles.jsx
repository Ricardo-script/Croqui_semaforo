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

export const AreaDetector = styled.div`
    width: 3.17vw;
    height: 5.17vh;
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
`;

export const QntTotal = styled.div`
    font-size: 1vw;
    color: #054597;
    font-weight: 600;
`;

export const Options = styled.div`
    cursor: pointer;
    display: ${props => props.options === false ? 'none' : 'block'};
    
    img{
        width: 17px;
        position: relative;
        top: -5px;
        right: -25px;
    }
`;
