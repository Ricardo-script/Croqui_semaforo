import styled, { keyframes } from 'styled-components';

const goTop = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(400px);
    }
`;

export const Container = styled.div``;

export const MoveTop = styled.img`
    width: 33px;
    height: auto;
    //animation: ${ props => props.move === true ? goTop : ''} 3s infinite;
    //display: none;
`;