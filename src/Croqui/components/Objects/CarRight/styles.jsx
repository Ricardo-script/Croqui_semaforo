import styled, { keyframes } from 'styled-components';

const goRight = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(400px);
    }
`;

export const Container = styled.div``;

export const MoveRight = styled.img`
    width: 70px;
    height: auto;
    //animation: ${ props => props.move === true ? goRight : ''} 3s infinite;
    //display: none;
`;
