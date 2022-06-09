import styled from 'styled-components';

export const Container = styled.div`
    background: #FFF;
    width: 300px;
    height: 200px;
    border-radius: 5px;
    box-shadow: 5px 5px 2px -2px #3d3d3d;
    position: absolute;
    top: 0;
    z-index: 2;
    display: ${props => props.open === false ? 'none' : 'block'};
`;