import React from 'react';
import ItemDraggable from '../../../ItemDraggable';
import esquerda from '../../../img/esquerda.png';
import close from '../../../img/close.png';
import { Container, MoveLeftToBottom, Options } from './styles';

export default function CarLeftToBottom(props){  
    
    return(
        <Container>
            {props.carLeftToBottom.map((item,index) => {
                if(props.carLeftToBottom[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='carLeftToBottom' top={item.top} left={item.left} setCarLeftToBottom={props.setCarLeftToBottom} carLeftToBottom={props.carLeftToBottom}>
                            <MoveLeftToBottom src={esquerda} alt="" move={props.moveLeftToBottom}/>
                            <Options remove={props.remove} onClick={() => props.removeLeftToBottom(index,item)}>
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