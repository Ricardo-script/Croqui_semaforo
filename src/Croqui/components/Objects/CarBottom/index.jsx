import React, { useState } from 'react';
import ItemDraggable from '../../ItemDraggable';
import descendo from '../../img/descendo.png';
import close from '../../img/close.png';
import { Container, MoveBottom, Options } from './styles';

export default function CarBottom(props){  
    
    return(
        <Container>
            {props.carBottom.map((item,index) => {
                if(props.carBottom[index] !== ''){
                    return(
                        <ItemDraggable key={index} index={index} object='carBottom' top={item.top} left={item.left} setCarBottom={props.setCarBottom} carBottom={props.carBottom}>
                            <MoveBottom src={descendo} alt="" move={props.moveBottom}/>
                            <Options remove={props.remove} onClick={() => props.removeCarBottom(index,item)}>
                                <img src={close} alt="" />
                            </Options>
                        </ItemDraggable>
                    );
                }
            })}
        </Container>
    );
}