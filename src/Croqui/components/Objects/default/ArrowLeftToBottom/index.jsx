import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import arrowLeftToBottom from '../../../img/Setas/arrowLeftToBottom.png';
import animateArrowLeftToBottom from '../../../img/Setas/animateArrowLeftToBottom.gif';
import close from '../../../img/close.png';
import { Container, MoveLeftToBottom, Options } from './styles';

export default function ArrowLeftToBottom(props){  
    
    return(
        <Container>
            {props.arrowLeftToBottom.map((item,index) => {
                if(props.arrowLeftToBottom[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='arrowLeftToBottom' top={item.top} left={item.left} setArrowLeftToBottom={props.setArrowLeftToBottom} arrowLeftToBottom={props.arrowLeftToBottom}>
                            <MoveLeftToBottom src={props.moveArrowLeftToBottom === false ? arrowLeftToBottom : animateArrowLeftToBottom} alt="" />
                            <Options remove={props.remove} onClick={() => props.removeArrowLeftToBottom(index,item)}>
                                <img src={close} alt="" />
                            </Options>
                        </ItemDraggable>
                    );
                }else{
                    return null;
                }
            })}
        </Container>
    );
}