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
    
        function dragMouseDown(e) {
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


            //elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            //elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            //elmnt.style.left = (elmnt.offsetLeft - pos1 > props.limitScreen ? props.limitScreen : elmnt.offsetLeft - pos1) + "px";

            //converte px em vw:
            const top = ((elmnt.offsetTop - pos2) * 100 / document.documentElement.clientHeight);
            const left = ((elmnt.offsetLeft - pos1) * 100 / document.documentElement.clientWidth)

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
             
        }
    
        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
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

