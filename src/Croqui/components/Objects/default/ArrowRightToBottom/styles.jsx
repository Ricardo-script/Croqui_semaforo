import styled from 'styled-components';


export const Container = styled.div``;

export const MoveRightToBottom = styled.img`
    width: 80%;
    height: auto;
    position: relative;
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
