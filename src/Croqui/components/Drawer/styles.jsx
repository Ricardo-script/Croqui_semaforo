import styled from "styled-components";

export const AreaDrawer = styled.div`
 	width: ${props => props.open === true ? '300px' : '0'};
    background: #a9a6a6b8;
    overflow: hidden;
    transition: .5s;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 4;

    @media(max-width: 580px){
        width: ${props => props.open === true ? '100%' : '0'};
		overflow: scroll;
    }

    @media(max-height: 620px){
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

export const Header = styled.div`
	width: 100%;
	height: 50px;
	background: #062467;
`;

export const Title = styled.span`
	width: 100%;
    height: 100%;
    color: #FFF;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    font-family: 'Roboto';
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const AreaButtons = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 10px;
	gap: 25px;
`;

export const ButtonAdd = styled.button`
	&.icon-btn {
		width: 50px;
		height: 50px;
		border: 1px solid #cdcdcd;
		background: white;
		border-radius: 25px;
		overflow: hidden;
		position: relative;
		transition: width 0.2s ease-in-out;
		cursor: pointer;
	}

	&.add-btn:hover {
		width: 120px;
	}

	&.add-btn::before,
	&.add-btn::after {
		transition: width 0.2s ease-in-out, border-radius 0.2s ease-in-out;
		content: "";
		position: absolute;
		height: 4px;
		width: 10px;
		top: calc(50% - 2px);
		background: #27cb4a;
	}

	&.add-btn::after {
		right: 14px;
		overflow: hidden;
		border-top-right-radius: 2px;
		border-bottom-right-radius: 2px;
	}

	&.add-btn::before {
		left: 14px;
		border-top-left-radius: 2px;
		border-bottom-left-radius: 2px;
	}

	&.icon-btn:focus {
		outline: none;
	}

	.btn-txt {
		opacity: 0;
		transition: opacity 0.2s;
		font-family: 'Roboto';
		font-weight: 500;
		color: #2c2c2c;
	}

	&.add-btn:hover::before,
	&.add-btn:hover::after {
		width: 4px;
		border-radius: 2px;
	}

	&.add-btn:hover .btn-txt {
		opacity: 1;
	}

	.add-icon::after,
	.add-icon::before {
		transition: all 0.2s ease-in-out;
		content: "";
		position: absolute;
		height: 20px;
		width: 2px;
		top: calc(50% - 10px);
		background: #27cb4a;
		overflow: hidden;
	}

	.add-icon::before {
		left: 22px;
		border-top-left-radius: 2px;
		border-bottom-left-radius: 2px;
	}

	.add-icon::after {
		right: 22px;
		border-top-right-radius: 2px;
		border-bottom-right-radius: 2px;
	}

	&.add-btn:hover .add-icon::before {
		left: 15px;
		height: 4px;
		top: calc(50% - 2px);
	}

	&.add-btn:hover .add-icon::after {
		right: 15px;
		height: 4px;
		top: calc(50% - 2px);
	}

	&:active{
		position: relative;
		top: 1px;
	}
`;

export const AreaBox = styled.div`

`;

export const Group = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
    gap: 18px;
    width: 90%;
    margin: 12px auto;
`;

export const Box = styled.div`
	width: 110px;
    height: 120px;
    background: #EEE;
    border-radius: 7px;
    padding: 0 7px;
    box-shadow: 7px 7px 7px rgb(53 50 50 / 63%);
`;

export const HeaderBox = styled.div`
	display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Estagio = styled.span`
	font-size: 21px;
	margin-left: 5px;
    font-weight: 600;
    display: block;
    color: #505050;
`;

export const TitleBox = styled.span`
	display: block;
    color: #505050;
	width: 100%;
    text-align: center;
`;

export const AreaImg = styled.div`
	width: 110px;
    height: 83px;
	img{
		width: 100%;
    	height: 100%;
		border-radius: 3px;
    	margin-top: 3px;
	}
`;

