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
	margin-top: 15px;

    img{
        width: ${
			props => props.type === 'car' || props.type === 'car-curve' ? '32%' :
			props => props.type === 'pedestre' ? '50%' :
			props => props.type === 'arrow' ? '60%' :
			props => props.type === 'box' ? '60%' :
			props => props.type === 'others' ? '33%' : ''
		};
        height: fit-content;
		animation: ${props => props.type === 'car' || props.type === 'car-curve' ? css` ${ girar } 30s linear infinite` : css`none`};
    }
`;

export const AreaPlay = styled.div`
	width: 29px;
    height: 24px;
    background: #f3f0f1;
    position: relative;
    background: #f3f0f1;
    border-radius: 7px;
    text-align: center;
    cursor: pointer;
    -webkit-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
	box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2);
    color: #6f6cde;
	margin-bottom: 5px;
	margin-left: 35px;

	&:active {
		opacity: 1;
		box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5), inset 8px 8px 16px rgba(0, 0, 0, 0.1);
		color: #79e3b6;
	}

	img{
		width: 14px;
	}
`;

export const Group = styled.div`
    display: flex;
    flex-direction: column;

	&#rangeColor{
		display: ${props => props.type !== 'car' && props.type !== 'car-curve' ? 'none' : 'flex'};
	}

	&#rangeVelocidade{
		display: ${props => props.type !== 'car' && props.type !== 'car-curve' && props.type !== 'pedestre' ? 'none' : 'flex'};
	}

	&#rangePercurso{
		display: ${props => props.type !== 'car' && props.type !== 'car-curve' && props.type !== 'pedestre' ? 'none' : 'flex'};
	}

	&#rangePercursoFinal{
		display: ${props => props.type === 'car-curve' ? 'flex' : props.type !== 'car-curve' || props.type !== 'pedestre' ? 'none' : 'flex'};
	}

	&#rangeAnguloFinal{
		display: ${ props => props.type === 'car-curve' ? 'flex' : props =>  props.type !== 'car-curve' || props.type !== 'pedestre' ? 'none' : 'flex'};
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

export const AreaDescription = styled.div`
    width: 60%;
`;

export const Description = styled.div`
    width: 183px;
	height: 20px;
    display: flex;
    align-items: center;
    padding-bottom: 3px;
    transform: skew(0deg);
    background: #b1b1b1;
    box-shadow: -3px 0px 0px 0px #14A7CA;
`;

export const Title = styled.span`
    font-size: 12px;
    font-weight: 600;
    display: block;
    text-align: initial;
    padding-left: 7px;
`;

export const AreaFields = styled.div``;

export const LabelFloat = styled.div`
    position: relative;
    padding-top: 8px;
	margin-top: 2px;

    input{
        &:required:invalid + label{
            color: red;
        }

        &:focus:required:invalid{
            border-bottom: 2px solid red;
        }

        &:required:invalid + label:before{
            content: '*';
        }
        &:focus + label{
            font-size: 10px;
			margin-top: 1px;
			background: #FFF;
			padding: 0 5px;
			color: #3951b2;
        }
        &:not(:placeholder-shown) + label{
			font-size: 10px;
			margin-top: 1px;
			background: #FFF;
			padding: 0 5px;
			color: #3951b2;
        }
    }

	&#grupo{
		display: ${props => props.title === 'Botoeira' ? 'none' : 'block'};
	}

	&#detector{
		display: ${props => props.title === 'Taxa de ocupação' || props.title !== 'Taxa de ocupação' ? 'block' : 'none'};
	}

	&#anel{
		display: ${props => props.title !== 'Botoeira' || props.title !== 'Taxa de ocupação' ? 'block' : 'none'};
	}

	&#controlador{
		display: ${props => props.title !== 'Botoeira' || props.title !== 'Taxa de ocupação' ? 'block' : 'none'};
	}
`;

export const InputField = styled.input`
    border: 0;
    border: 1px solid lightgrey;
    outline: none;
    width: 100%;
	height: 22px;
    font-size: 12px;
	font-family: 'Roboto';
	font-weight: 500;
    transition: all .3s ease-out;
    -webkit-transition: all .3s ease-out;
    -moz-transition: all .3s ease-out;
    -webkit-appearance:none;
    border-radius: 0;
	text-indent: 5px;
	box-shadow: 5px 5px 0px -2px #dbdbdb;

    &:focus{
        border: 1px solid #3951b2;
		box-shadow: 5px 5px 0px -2px #2942a7;
    }

    &::placeholder{
        color:transparent;
    }
`;

export const LabelField = styled.label`
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 13px;
	margin-top: 12px;
    transition: all .3s ease-out;
    font-family: inherit;
    font-size: 12px;
    font-weight: 500;
`;

export const AreaColors = styled.div`
    height: 20px;
    width: 87%;
	display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 3px;
`;

export const Color = styled.div`
    width: 15px;
    height: 15px;
	border-radius: 33%;
	cursor: pointer;

	&#red{
		background: #fc4141;

		&:hover{
			transform: scale(1.5);
		}
	}
	&#grey{
		background: #c9c5c5;

		&:hover{
			transform: scale(1.5);
		}
	}
	&#yellow{
		background: #dadd23;

		&:hover{
			transform: scale(1.5);
		}
	}
	&#blue{
		background: #2336e0;

		&:hover{
			transform: scale(1.5);
		}
	}

	&#brown{
		background: #5f2e06;

		&:hover{
			transform: scale(1.5);
		}
	}
`;


