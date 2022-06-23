import styled, { keyframes, css } from 'styled-components';

const girar = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`

    .element {
        position: absolute;
        z-index: 9;
        background-color: #FFF;
        text-align: center;
        //border: 1px solid #d3d3d3;
        top: 0;
        width: 330px;
        border-radius: 9px;
        display: ${props => props.open === false ? 'none' : 'block'};
    }

    .elementHeader {
        position: relative;
        height: 30px;
        z-index: 10;
        background-color: #062467;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        border-radius: 9px 9px 0 0;
        font-weight: 500;
        cursor: move;
    }

    #close{
        position: absolute;
        width: 17px;
        height: auto;
        top: 7px;
        right: 10px;
        cursor: pointer;
        img{
            width: 100%;
            height: auto;
        }
    }
`;


export const BodySettings = styled.div`
    height: auto;
    padding-bottom: 10px;
    width: 90%;
    margin: 10px auto;
`;

export const AreaItems = styled.div`
    margin-bottom: 10px;
    display: flex;
    gap: 15px;
`;

export const Item = styled.div`
    box-shadow: 5px 5px 4px -3px #5c5c5c;
    background: aliceblue;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;

    img{
        width: ${
			props => props.type === 'car' ? '80%' :
			props => props.type === 'pedestre' ? '50%' :
			props => props.type === 'arrow' ? '60%' :
			props => props.type === 'box' ? '60%' :
			props => props.type === 'others' ? '33%' : ''
		};
        height: fit-content;
		animation: ${props => props.type === 'car' ? css` ${ girar } 30s linear infinite` : css`none`};
    }
`;

export const Group = styled.div`
    display: flex;
    flex-direction: column;

	&#rangeTamanho{

	}

	&#rangeVelocidade{
		display: ${props => props.type !== 'car' ? 'none' : 'flex'};
	}

	&#rangePercurso{
		display: ${props => props.type !== 'car' ? 'none' : 'flex'};
	}
`;

export const Label = styled.label`
    width: fit-content;
    margin-left: 5px;
    font-size: 12px;
    font-weight: 600;
`;

export const Input = styled.input`
    padding: 0;
    margin: 0;
    width: 100%;
    cursor: ew-resize;

    &::-moz-range-progress{
    background-color: rgb(238, 62, 62);
}

`;

export const AreaInput = styled.div`
    display: flex;
    gap: 10px;
`;

export const Total = styled.div`
    width: 30px;
    height: 17px;
    background: #2c3e50;
    color: #dfdfdf;
    font-size: 12px;
    font-weight: 500;
    position: relative;
    &:after{
        content: "";
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
        width: 0px;
        height: 0px;
        border-top: 7px solid transparent;
        border-bottom: 7px solid transparent;
        border-right: 8px solid #2c3e50;
        position: absolute;
        right: 14px;
        top: 1px;
    }
`;
// AreaDescription, Description, Title

export const AreaDescription = styled.div`
    width: 60%;
`;

export const Description = styled.div`
    width: 100%;
    height: 19px;
    margin-top: 40px;
    transform: skew(0deg);
    background: #b1b1b1;
    box-shadow: -7px 0px 0px 0px #14A7CA;

`;

export const Title = styled.span`
    font-size: 12px;
    font-weight: 600;
    display: block;
    text-align: initial;
    padding-left: 7px;
`;




