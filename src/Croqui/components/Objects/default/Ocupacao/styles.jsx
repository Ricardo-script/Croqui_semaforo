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

export const AreaOcupacao = styled.div`
    width: 50px;
    height: 50px;
    position: relative;
    border: 2px solid #FFF;
    border-radius: 4px;
    background: #25ff2596;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .2s;
    animation: ${ zoom } .3s ease-in-out;

    &:active{
        transform: scale(1.4); 
    }
`;

export const TaxaOcupacao = styled.div`
    font-size: 17px;
    color: #024602;
    font-weight: 600;
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
