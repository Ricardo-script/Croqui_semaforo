import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import arrowStartLeft from '../../../img/Setas/arrowStartLeft.png';
import close from '../../../img/close.png';
import { Container, MoveLeft, Options } from './styles';

export default function ArrowLeft(props){  
    
    return(
        <Container>
            {props.arrowLeft.map((item,index) => {
                if(props.arrowLeft[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='arrowLeft' top={item.top} left={item.left} setArrowLeft={props.setArrowLeft} arrowLeft={props.arrowLeft}>
                            <MoveLeft src={arrowStartLeft} alt="" move={props.moveArrowLeft}/>
                            <Options remove={props.remove} onClick={() => props.removeArrowLeft(index,item)}>
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