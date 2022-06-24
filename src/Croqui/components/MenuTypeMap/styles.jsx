import styled from 'styled-components';

export const Container = styled.div`
`;

export const TypeObjects = styled.div`
    position: fixed;
    align-items: center;
    justify-content: space-around;
    display: flex;
    height: 50px;
	background: #a9a6a678;
    border-radius: 6px;
    z-index: 1;
    //right: 285px;
    top: 80px;

    &#maps{
        overflow: hidden;
        width: ${props => props.open === false ? '0' : '490px'};
		height:${props => props.open === false ? '0' : '150px'};
        right: ${props => props.open === false ? '0' : '285px'};
        top: 520px;
        transition: .3s;
        display: flex;
        gap: 10px;
		padding: 0 15px;
    }
`;

export const Buttom = styled.div`
    width: 90px;
    height: 90px;
    background: #EEE;
    border-radius: 7px;
    padding: 7px;
    box-shadow: 7px 7px 7px rgb(53 50 50 / 63%);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;

    &:hover{
        background: #00c86f;
        transition: .5s;
    }

    &:active{
        position: relative;
        top: 1px;
    }
`;

export const Ico = styled.img`
    width: 100%;
`;
