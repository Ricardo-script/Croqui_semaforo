import styled from 'styled-components';

export const Container = styled.section`
    .element {
        position: absolute;
        top: ${props => props.top + 'vh'};
        left: ${props => props.left + 'vw'};
        z-index: 2;
        text-align: center;
        width: 3.7%;
    }

    .elementHeader {
        cursor: grab;
        z-index: 3;
        user-select: none;

        &:active{
            cursor: grabbing;
        }
    }
`;
