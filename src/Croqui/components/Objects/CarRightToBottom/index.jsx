import React from 'react';
import ItemDraggable from '../../ItemDraggable';
import direita from '../../img/direita.png';
import close from '../../img/close.png';
import { Container, MoveRightToBottom, Options } from './styles';

export default function CarRightToBottom(props){  
    
    return(
        <Container>
            {props.carRightToBottom.map((item,index) => {
                if(props.carRightToBottom[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='carRightToBottom' top={item.top} left={item.left} setCarRightToBottom={props.setCarRightToBottom} carRightToBottom={props.carRightToBottom}>
                            <MoveRightToBottom src={direita} alt="" move={props.moveRightToBottom}/>
                            <Options remove={props.remove} onClick={() => props.removeRightToBottom(index,item)}>
                                <img src={close} alt="" />
                            </Options>
                        </ItemDraggable>
                    );
                }
            })}
        </Container>
    );
}