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
    width: 3.17vw;
    height: 5.17vh;
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

    &:active{
        transform: scale(1.4); 
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