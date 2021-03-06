import React from 'react';
import { Container } from './styles';

export default function ItemDraggable(props){

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById('elementHeader' + props.index + props.object)) {
            document.getElementById('elementHeader' + props.index + props.object).onmousedown = dragMouseDown;
        } else {
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e){
            e = e || window.event;
            e.preventDefault();

            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();

            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;

            // inserido somente quando clicar e segura, ao soltar remove os styles de top e left preservando a responsividade
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

            //converte px em vw:
            const top = ((elmnt.offsetTop - pos2) * 100 / document.documentElement.clientHeight);
            const left = ((elmnt.offsetLeft - pos1) * 100 / document.documentElement.clientWidth);


            //setar valores no state conforme arrasto de objetos no mapa
            if(props.carRight){
                const valuesCarRight = [...props.carRight];
                valuesCarRight[props.index].top = top;
                valuesCarRight[props.index].left = left;
                props.setCarRight(valuesCarRight);
            }
            if(props.carTop){
                const valuesCarTop = [...props.carTop];
                valuesCarTop[props.index].top = top;
                valuesCarTop[props.index].left = left;
                props.setCarTop(valuesCarTop);
            }
            if(props.carLeft){
                const valuesCarLeft = [...props.carLeft];
                valuesCarLeft[props.index].top = top;
                valuesCarLeft[props.index].left = left;
                props.setCarLeft(valuesCarLeft);
            }
            if(props.carBottom){
                const valuesCarBottom = [...props.carBottom];
                valuesCarBottom[props.index].top = top;
                valuesCarBottom[props.index].left = left;
                props.setCarBottom(valuesCarBottom);
            }
            if(props.objSemaforo){
                const valuesSemaforo = [...props.objSemaforo];
                valuesSemaforo[props.index].top = top;
                valuesSemaforo[props.index].left = left;
                props.setObjSemaforo(valuesSemaforo);
            }
            if(props.carTopToRight){
                const valuesCarTopToRight = [...props.carTopToRight];
                valuesCarTopToRight[props.index].top = top;
                valuesCarTopToRight[props.index].left = left;
                props.setCarTopToRight(valuesCarTopToRight);
            }
            if(props.carTopToLeft){
                const valuesCarTopToLeft = [...props.carTopToLeft];
                valuesCarTopToLeft[props.index].top = top;
                valuesCarTopToLeft[props.index].left = left;
                props.setCarTopToLeft(valuesCarTopToLeft);
            }
            if(props.carRightToTop){
                const valuesCarRightToTop = [...props.carRightToTop];
                valuesCarRightToTop[props.index].top = top;
                valuesCarRightToTop[props.index].left = left;
                props.setCarRightToTop(valuesCarRightToTop);
            }
            if(props.carLeftToTop){
                const valuesCarLeftToTop = [...props.carLeftToTop];
                valuesCarLeftToTop[props.index].top = top;
                valuesCarLeftToTop[props.index].left = left;
                props.setCarLeftToTop(valuesCarLeftToTop);
            }
            if(props.carRightToBottom){
                const valuesCarRightToBottom = [...props.carRightToBottom];
                valuesCarRightToBottom[props.index].top = top;
                valuesCarRightToBottom[props.index].left = left;
                props.setCarRightToBottom(valuesCarRightToBottom);
            }
            if(props.carLeftToBottom){
                const valuesCarLeftToBottom = [...props.carLeftToBottom];
                valuesCarLeftToBottom[props.index].top = top;
                valuesCarLeftToBottom[props.index].left = left;
                props.setCarLeftToBottom(valuesCarLeftToBottom);
            }
            if(props.carBottomToLeft){
                const valuesCarBottomToLeft = [...props.carBottomToLeft];
                valuesCarBottomToLeft[props.index].top = top;
                valuesCarBottomToLeft[props.index].left = left;
                props.setCarBottomToLeft(valuesCarBottomToLeft);
            }
            if(props.carBottomToRight){
                const valuesCarBottomToRight = [...props.carBottomToRight];
                valuesCarBottomToRight[props.index].top = top;
                valuesCarBottomToRight[props.index].left = left;
                props.setCarBottomToRight(valuesCarBottomToRight);
            }
            if(props.walkLeft){
                const valuesWalkLeft = [...props.walkLeft];
                valuesWalkLeft[props.index].top = top;
                valuesWalkLeft[props.index].left = left;
                props.setWalkLeft(valuesWalkLeft);
            }
            if(props.walkRight){
                const valuesWalkRight = [...props.walkRight];
                valuesWalkRight[props.index].top = top;
                valuesWalkRight[props.index].left = left;
                props.setWalkRight(valuesWalkRight);
            }
            if(props.walkBottom){
                const valuesWalkBottom = [...props.walkBottom];
                valuesWalkBottom[props.index].top = top;
                valuesWalkBottom[props.index].left = left;
                props.setWalkBottom(valuesWalkBottom);
            }
            if(props.walkTop){
                const valuesWalkTop = [...props.walkTop];
                valuesWalkTop[props.index].top = top;
                valuesWalkTop[props.index].left = left;
                props.setWalkTop(valuesWalkTop);
            }
            if(props.arrowTopToRight){
                const valuesArrowTopToRight = [...props.arrowTopToRight];
                valuesArrowTopToRight[props.index].top = top;
                valuesArrowTopToRight[props.index].left = left;
                props.setArrowTopToRight(valuesArrowTopToRight);
            }
            if(props.arrowTopToLeft){
                const valuesArrowTopToLeft = [...props.arrowTopToLeft];
                valuesArrowTopToLeft[props.index].top = top;
                valuesArrowTopToLeft[props.index].left = left;
                props.setArrowTopToLeft(valuesArrowTopToLeft);
            }
            if(props.arrowRightToBottom){
                const valuesArrowRightToBottom = [...props.arrowRightToBottom];
                valuesArrowRightToBottom[props.index].top = top;
                valuesArrowRightToBottom[props.index].left = left;
                props.setArrowRightToBottom(valuesArrowRightToBottom);
            }
            if(props.arrowRightToTop){
                const valuesArrowRightToTop = [...props.arrowRightToTop];
                valuesArrowRightToTop[props.index].top = top;
                valuesArrowRightToTop[props.index].left = left;
                props.setArrowRightToTop(valuesArrowRightToTop);
            }
            if(props.arrowTop){
                const valuesArrowTop = [...props.arrowTop];
                valuesArrowTop[props.index].top = top;
                valuesArrowTop[props.index].left = left;
                props.setArrowTop(valuesArrowTop);
            }
            if(props.arrowRight){
                const valuesArrowRight = [...props.arrowRight];
                valuesArrowRight[props.index].top = top;
                valuesArrowRight[props.index].left = left;
                props.setArrowRight(valuesArrowRight);
            }

            if(props.arrowLeftToBottom){
                const valuesArrowLeftToBottom = [...props.arrowLeftToBottom];
                valuesArrowLeftToBottom[props.index].top = top;
                valuesArrowLeftToBottom[props.index].left = left;
                props.setArrowLeftToBottom(valuesArrowLeftToBottom);
            }
            if(props.arrowLeftToTop){
                const valuesArrowLeftToTop = [...props.arrowLeftToTop];
                valuesArrowLeftToTop[props.index].top = top;
                valuesArrowLeftToTop[props.index].left = left;
                props.setArrowLeftToTop(valuesArrowLeftToTop);
            }
            if(props.arrowLeft){
                const valuesArrowLeft = [...props.arrowLeft];
                valuesArrowLeft[props.index].top = top;
                valuesArrowLeft[props.index].left = left;
                props.setArrowLeft(valuesArrowLeft);
            }
            if(props.arrowBottomToLeft){
                const valuesArrowBottomToLeft = [...props.arrowBottomToLeft];
                valuesArrowBottomToLeft[props.index].top = top;
                valuesArrowBottomToLeft[props.index].left = left;
                props.setArrowBottomToLeft(valuesArrowBottomToLeft);
            }

            if(props.arrowBottomToRight){
                const valuesArrowBottomToRight = [...props.arrowBottomToRight];
                valuesArrowBottomToRight[props.index].top = top;
                valuesArrowBottomToRight[props.index].left = left;
                props.setArrowBottomToRight(valuesArrowBottomToRight);
            }
            if(props.arrowBottom){
                const valuesArrowBottom = [...props.arrowBottom];
                valuesArrowBottom[props.index].top = top;
                valuesArrowBottom[props.index].left = left;
                props.setArrowBottom(valuesArrowBottom);
            }
            if(props.objSemaforoLeft){
                const valuesSemaforoLeft = [...props.objSemaforoLeft];
                valuesSemaforoLeft[props.index].top = top;
                valuesSemaforoLeft[props.index].left = left;
                props.setObjSemaforoLeft(valuesSemaforoLeft);
            }

            if(props.objSemaforoRight){
                const valuesSemaforoRight = [...props.objSemaforoRight];
                valuesSemaforoRight[props.index].top = top;
                valuesSemaforoRight[props.index].left = left;
                props.setObjSemaforoRight(valuesSemaforoRight);
            }

            if(props.objBotoeira){
                const valuesBotoeira = [...props.objBotoeira];
                valuesBotoeira[props.index].top = top;
                valuesBotoeira[props.index].left = left;
                props.setObjBotoeira(valuesBotoeira);
            }
            if(props.objOcupacao){
                const valuesOcupacao = [...props.objOcupacao];
                valuesOcupacao[props.index].top = top;
                valuesOcupacao[props.index].left = left;
                props.setObjOcupacao(valuesOcupacao);
            }
            if(props.objPlug){
                const valuesPlug = [...props.objPlug];
                valuesPlug[props.index].top = top;
                valuesPlug[props.index].left = left;
                props.setObjPlug(valuesPlug);
            }
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
            elmnt.style.top = null;
            elmnt.style.left = null;
        }
    }

    return(
        <Container top={props.top} left={props.left}>
			<div id={"element" + props.index + props.object} className="element" onMouseOver={(e) => dragElement(document.getElementById("element" + props.index + props.object))}>
				<div id={"elementHeader" + props.index} className='elementHeader'>
				    {props.children}
                </div>
			</div>
		</Container>
    );
}

