import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import arrowRigthToBottom from '../../../img/Setas/arrowRigthToBottom.png';
import animateArrowRigthToBottom from '../../../img/Setas/animateArrowRigthToBottom.gif';
import close from '../../../img/close.png';
import { Container, MoveRightToBottom, Options } from './styles';

export default function ArrowRightToBottom(props){  
    
    return(
        <Container>
            {props.arrowRightToBottom.map((item,index) => {
                if(props.arrowRightToBottom[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='arrowRightToBottom' top={item.top} left={item.left} setArrowRightToBottom={props.setArrowRightToBottom} arrowRightToBottom={props.arrowRightToBottom}>
                            <MoveRightToBottom src={props.moveArrowRightToBottom === false ? arrowRigthToBottom : animateArrowRigthToBottom} alt="" />
                            <Options remove={props.remove} onClick={() => props.removeArrowRightToBottom(index,item)}>
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