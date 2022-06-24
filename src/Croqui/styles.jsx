import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    overflow: hidden;

    @media(max-width: 580px){
        flex-direction: column;
        overflow: scroll;
    }
`;

export const AreaMapaCroqui = styled.div`
   width: 100%;
   position: relative;
`;

export const ButtonOpen = styled.div`
    position: absolute;
    z-index: 5;
    top: 7px;
    right: 7px;
    cursor: pointer;
`;

export const MapaCroqui = styled.div`
    width: 100%;
    display: flex;
    img{
        width: 100%;
        height: 100vh;

        @media(max-width: 580px){
            object-fit: contain;
            background: #383737;
        }
    }
`;

export const AreaEditor = styled.div`
    width: ${props => props.open === true ? '300px' : '0'};
    background: #062467;
    overflow: hidden;
    transition: .5s;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 4;

    @media(max-width: 580px){
        width: ${props => props.open === true ? '100%' : '0'};
		overflow: scroll;
    }

    @media(max-height: 520px){
        overflow-y: scroll;
        &::-webkit-scrollbar {
		    width: 4px;
            &-track-piece {
                background-color: #383838;
            }

            &-thumb:vertical,
            &-thumb:horizontal {
                background-color: #141414;
                border-radius:5px;
            }

            &-thumb:vertical:hover,
            &-thumb:horizontal:hover {
                background-color: #717171;
            }
	    }
    }
`;
export const Editor = styled.div`
    padding: 5px 15px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AreaTools = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const Fieldset = styled.fieldset`
    border: 1px solid #FFF;
    border-radius: 4px;
`;

export const Legend = styled.legend`
    color: #FFF;
    font-family: 'roboto';
    font-size: 12px;
`;

export const AreaButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;

`;

export const Buttom = styled.div`
    width: 24px;
    height: 24px;
    background: #EEE;
    border-radius: 7px;
    padding: 7px;
    box-shadow: 7px 7px 7px rgb(53 50 50 / 63%);
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
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

export const ButtomLabel = styled.label`
 	width: 24px;
    height: 24px;
    background: #EEE;
    border-radius: 7px;
    padding: 7px;
    box-shadow: 7px 7px 7px rgb(53 50 50 / 63%);
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: pointer;

    &:hover{
        background: #00c86f;
        transition: .5s;
    }

    &:active{
        position: relative;
        top: 1px;
    }

	input[type='file'] {
  		display: none;
	}
`;

export const OptionButton = styled.div``;

export const Img = styled.img`
    width: 100%;
    //user-select: none;

    &#top-left{
        transform: scaleX(-1);
    }
    &#right-down{
        transform: rotate(90deg);
    }
    &#right-top{
        transform: rotate(90deg) scaleX(-1);
    }
    &#right{
        transform: rotate(90deg);
    }
    &#left-down{
        transform: rotate(-90deg) scaleX(-1);
    }
    &#left-top{
        transform: rotate(-90deg);
    }
    &#left{
        transform: rotate(-90deg);
    }
    &#down-left{
        transform: rotate(-180deg) scaleX(1);
    }
    &#down{
        transform: rotate(180deg);
    }
    &#down-right{
        transform: rotate(180deg) scaleX(-1);
    }
    &#play{
        width: 17px;
    }
    &#settings{
        width: 25px;
    }
    &#icoSemaforo {
        width: 15px;
        padding-right: 1px;
    }
    &#close{
        width: 17px;
    }
    &#clear{

    }
	&#upload{
		width: 32px;
	}
	&#default{
		width: 40px;
	}
`;

export const ButtonSave = styled.button`
	border-radius: 4px;
	background-color: #5ca1e1;
	border: none;
	color: #fff;
	text-align: center;
	font-size: 14px;
    padding: 10px;
	width: 100%;
	transition: all 0.5s;
	cursor: pointer;
	box-shadow: 0 10px 20px -8px rgba(0, 0, 0,.7);
	display: inline-block;
	position: relative;
	transition: 0.5s;
	cursor: pointer;

	&:after {
		content: '»';
		position: absolute;
		opacity: 0;
		top: -2px;
    	font-size: 30px;
		right: -20px;
		transition: 0.5s;
	}

	&:hover{
		padding-right: 24px;
		padding-left:8px;
	}

	&:hover:after {
		opacity: 1;
		right: 10px;
	}

	&:active{
		position: relative;
		top: 1px;
	}
`;
